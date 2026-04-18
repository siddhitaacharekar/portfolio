"use client";

import { useState } from "react";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="contact-inner">
        <p className="s-tag" style={{ justifyContent: "center", display: "flex" }}>
          Contact
        </p>
        <h2 id="contact-title" className="reveal">
          Let&apos;s <em>Talk</em>
        </h2>
        <p className="s-sub reveal d1">
          Have a product challenge, role, or conversation in mind? I&apos;d
          love to hear from you.
        </p>

        {sent ? (
          <div className="form-success" role="status" aria-live="polite">
            Thank you for reaching out.
            <br />
            I&apos;ll get back to you shortly.
          </div>
        ) : (
          <form
            className="form-wrap reveal d2"
            onSubmit={onSubmit}
            noValidate
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="f-name" className="form-label">
                  Your Name
                </label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Rahul Sharma"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="f-email" className="form-label">
                  Email Address
                </label>
                <input
                  id="f-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="rahul@company.com"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="f-subject" className="form-label">
                Subject
              </label>
              <input
                id="f-subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="PM role discussion"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="f-msg" className="form-label">
                Message
              </label>
              <textarea
                id="f-msg"
                name="message"
                rows={5}
                className="form-ta"
                placeholder="Tell me about what you're working on..."
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />
            </div>
            <button type="submit" className="form-submit">
              <span>Send Message →</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
