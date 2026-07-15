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
    <form action={formAction} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-widest text-slate-500">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-widest text-slate-500">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-xs font-mono uppercase tracking-widest text-slate-500">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell me about your project or just say hello..."
          required
          rows={5}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors resize-y min-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        />
      </div>

      {state.message && (
        <div className={`px-4 py-3 rounded-lg text-sm font-medium ${state.success ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
          {state.message}
        </div>
      )}

      <button type="submit" className="w-full py-3 px-6 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
