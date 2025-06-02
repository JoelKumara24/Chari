import React, { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import styles from './ContactUs.module.scss';

export default function ContactUs() {
  // Form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Update form field
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // On submit, we currently just show an alert.
  // To actually receive emails, you'd need to:
  //   • connect to a backend endpoint (e.g. via fetch/axios) that sends you mail,
  //   • or use a service like EmailJS/SendGrid/Mailgun, etc., passing their API details.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${form.name}! We’ll be in touch.`);

    // EXAMPLE (pseudo):
    // fetch('/api/send-contact-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // })
    //   .then(res => { /* show success message */ })
    //   .catch(err => { /* show error state */ });
  };

  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <p className={styles.subtitle}>
        Have questions or want to start planning your Sri Lanka adventure? Fill out the form
        below or connect with us on social media!
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
          />
        </label>

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>

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
