"use server";

import { getResend } from "@/lib/resend";
import { isEmail } from "@/lib/validators";
import WaitlistConfirmation from "@/emails/WaitlistConfirmation";

export type WaitlistState =
  | { status: "idle" }
  | { status: "success"; email: string }
  | { status: "error"; message: string };

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!email || email.length > 254 || !isEmail(email)) {
    return {
      status: "error",
      message: "That doesn't look like a valid email.",
    };
  }

  const from = process.env.WAITLIST_FROM_EMAIL;
  if (!from) {
    console.error("WAITLIST_FROM_EMAIL is not set");
    return {
      status: "error",
      message: "Something went wrong. Try again in a minute.",
    };
  }

  try {
    const { error } = await getResend().emails.send({
      from,
      to: [email],
      replyTo: process.env.WAITLIST_REPLY_TO,
      subject: "You're on the canvas list.",
      react: WaitlistConfirmation({ email }),
    });

    if (error) {
      console.error("Resend send failed", error);
      return {
        status: "error",
        message: "Something went wrong. Try again in a minute.",
      };
    }
  } catch (err) {
    console.error("Waitlist action threw", err);
    return {
      status: "error",
      message: "Something went wrong. Try again in a minute.",
    };
  }

  return { status: "success", email };
}
