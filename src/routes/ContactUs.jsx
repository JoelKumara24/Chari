// src/components/ContactUs.jsx

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./ContactUs.module.scss";

export default function ContactUs() {
  // Form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // Track whether we're in the middle of submitting
  const [submitting, setSubmitting] = useState(false);
  // Feedback message (success or error)
  const [feedback, setFeedback] = useState("");

  // Replace these placeholders with your actual EmailJS IDs:
  const SERVICE_ID = "service_6ivmx1p";
  const TEMPLATE_ID = "template_jv49b0a";
  const PUBLIC_KEY  = "qvUtZNIiycswW1joK";

  // Update a field in the form state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // On form submit, send via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback("");
    setSubmitting(true);

    // Prepare the template parameters to match your EmailJS template variables
    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("EmailJS success:", result.text);
          setFeedback("Thanks! Your message has been sent.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          setFeedback("Sorry—something went wrong. Please try again.");
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <p className={styles.subtitle}>
        Have questions or want to start planning your Sri Lanka adventure?
        Fill out the form below or connect with us on social media!
      </p>

      {/* ——— Contact Form ——— */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.field}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            disabled={submitting}
          />
        </label>

        <label className={styles.field}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            disabled={submitting}
          />
        </label>

        <label className={styles.field}>
          <span>Message</span>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us how we can help..."
            required
            disabled={submitting}
          />
        </label>

        <button type="submit" className={styles.submitBtn} disabled={submitting}>
          {submitting ? "Sending…" : "Send Message"}
        </button>
      </form>

      {/* Feedback message, shown only if non-empty */}
      {feedback && <p className={styles.feedback}>{feedback}</p>}

      {/* ——— Or connect with us on social media ——— */}
      <fieldset className={styles.socialContainer}>
        <legend>Connect with Us</legend>
        <div className={styles.socialLinks}>
          <a
            href="https://facebook.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </fieldset>
    </div>
);
}
