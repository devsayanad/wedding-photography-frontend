import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // replace with your API endpoint or remove fetch if handled elsewhere
    try {
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' }});
      console.log("Contact form submitted", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="contact-form-section">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        <div aria-live="polite" className="contact-form-status">
          {status === "success" && (
            <p className="success">Thanks — we'll be in touch shortly.</p>
          )}
          {status === "error" && (
            <p className="error">Something went wrong. Please try again.</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
