"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="contact-form">
      <div className="form-group">
        <label htmlFor="contact-name" className="form-label">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          className="form-input"
          disabled={isPending}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-email" className="form-label">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          className="form-input"
          disabled={isPending}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-message" className="form-label">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell me about your project or just say hello..."
          required
          rows={5}
          className="form-input form-textarea"
          disabled={isPending}
        />
      </div>

      {state.message && (
        <div className={`form-status ${state.success ? "form-success" : "form-error"}`}>
          {state.message}
        </div>
      )}

      <button type="submit" className="btn-primary form-submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
