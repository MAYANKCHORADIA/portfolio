"use server";

import { db } from "@/db";
import { contacts } from "@/db/schema";

export interface ContactFormState {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // ── Validation ──
  if (!name || !email || !message) {
    return { success: false, message: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (message.length < 10) {
    return { success: false, message: "Message must be at least 10 characters." };
  }

  try {
    await db.insert(contacts).values({ name, email, message });

    console.log("📬 New contact form submission:", { name, email, message });

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
