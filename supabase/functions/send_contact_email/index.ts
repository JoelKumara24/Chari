import { serve } from "https://deno.land/x/sift/mod.ts";
import { SmtpClient } from "https://deno.land/x/denomailer@0.13.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ─── 1) READ REQUIRED ENVIRONMENT VARIABLES ───────────────────────────────
const SUPABASE_URL         = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const GMAIL_USER           = Deno.env.get("GMAIL_USER");
const GMAIL_APP_PASS       = Deno.env.get("GMAIL_APP_PASS");   // Must be a valid Gmail App Password
const FOUNDERS_EMAIL       = Deno.env.get("FOUNDERS_EMAIL");

if (
  !SUPABASE_URL ||
  !SUPABASE_SERVICE_KEY ||
  !GMAIL_USER ||
  !GMAIL_APP_PASS ||
  !FOUNDERS_EMAIL
) {
  console.error("Missing environment variables at boot:", {
    SUPABASE_URL:         !!SUPABASE_URL,
    SUPABASE_SERVICE_KEY: !!SUPABASE_SERVICE_KEY,
    GMAIL_USER:           !!GMAIL_USER,
    GMAIL_APP_PASS:       !!GMAIL_APP_PASS,
    FOUNDERS_EMAIL:       !!FOUNDERS_EMAIL,
  });
  throw new Error("Missing required environment variables");
}

// ─── 2) INITIALIZE SUPABASE CLIENT ─────────────────────────────────────────
const sb = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// ─── 3) DEFINE CORS HEADERS ─────────────────────────────────────────────────
const CORS_HEADERS = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Methods": "OPTIONS,POST",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-client-info, apikey",
};

// ─── 4) ACTUAL REQUEST HANDLER ───────────────────────────────────────────────
async function handleRequest(req: Request): Promise<Response> {
  try {
    console.log("▶️  Incoming request:", req.method, req.url);

    // 4a) CORS preflight
    if (req.method === "OPTIONS") {
      console.log("↪️  OPTIONS preflight → 204");
      return new Response(null, {
        status:  204,
        headers: CORS_HEADERS,
      });
    }

    // 4b) Only accept POST
    if (req.method !== "POST") {
      console.warn("🚫  Rejecting non-POST:", req.method);
      return new Response(
        JSON.stringify({ error: "Method Not Allowed" }),
        {
          status: 405,
          headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // 4c) Parse JSON body
    let body: { name?: string; email?: string; message?: string };
    try {
      body = await req.json();
    } catch (jsonErr) {
      console.error("❌  Invalid JSON:", jsonErr);
      return new Response(
        JSON.stringify({ error: "Invalid JSON" }),
        {
          status: 400,
          headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { name, email, message } = body;
    if (!name || !email || !message) {
      console.warn("⚠️  Missing fields in body:", { name, email, message });
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        {
          status: 400,
          headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // 4d) Insert into Supabase table “contact_submissions”
    console.log("↪️  Inserting into Supabase:", { name, email, message });
    const { error: insertError } = await sb
      .from("contact_submissions")
      .insert({ name, email, message });

    if (insertError) {
      console.error("❌  DB Insert Error:", insertError);
      return new Response(
        JSON.stringify({
          error:   "Database insertion failed",
          details: insertError.message,
        }),
        {
          status: 500,
          headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // 4e) Build plain-text email content
    const emailContent = `
You have a new contact form submission:

Name:  ${name}
Email:  ${email}

Message:
${message}
    `.trim();

    console.log("↪️  Prepared email content.");

    // 4f) Send via Gmail SMTP on port 465 (TLS on connect), all in one step:
    const mailClient = new SmtpClient({
      connection: {
        hostname: "smtp.gmail.com",
        port:     465,
        tls:      true,
        auth: {
          username: GMAIL_USER,
          password: GMAIL_APP_PASS,  // Your App Password here
        },
      },
    });

    try {
      console.log("↪️  Calling mailClient.send()—Denomailer will handle TLS handshake…");
      await mailClient.send({
        from:    GMAIL_USER,
        to:      FOUNDERS_EMAIL,
        subject: `New contact from ${name}`,
        content: emailContent,       // “content” is required (not “text”)
        replyTo: email,
      });
      console.log("✅  Email sent successfully.");
    } catch (smtpErr) {
      console.error("❌  SMTP Error:", smtpErr);
      return new Response(
        JSON.stringify({
          error:   "Failed to send email via SMTP",
          details: smtpErr.message || "Unknown SMTP error",
        }),
        {
          status: 500,
          headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/json",
          },
        }
      );
    } finally {
      await mailClient.close();
    }

    // 4g) All done – return success
    return new Response(
      JSON.stringify({ status: "OK" }),
      {
        status: 200,
        headers: {
          ...CORS_HEADERS,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (unhandledErr) {
    console.error("❌  Uncaught exception in handleRequest:", unhandledErr);
    return new Response(
      JSON.stringify({
        error:   "Internal server error",
        details: (unhandledErr as Error).message,
      }),
      {
        status: 500,
        headers: {
          ...CORS_HEADERS,
          "Content-Type": "application/json",
        },
      }
    );
  }
}

// ─── 5) ROUTE MAPPING ─────────────────────────────────────────────────────────
serve({
  "/functions/v1/send_contact_email": (req: Request) => {
    console.log("▶️  Route matched: /functions/v1/send_contact_email");
    return handleRequest(req);
  },

  // (Optional local‐testing route)
  "/send_contact_email": (req: Request) => {
    console.log("▶️  Route matched: /send_contact_email");
    return handleRequest(req);
  },

  // Fallback
  "404": (_: Request) => {
    console.warn("⚠️  Unmatched route");
    return new Response(
      JSON.stringify({ error: "Route not found" }),
      {
        status: 404,
        headers: CORS_HEADERS,
      }
    );
  },
});
