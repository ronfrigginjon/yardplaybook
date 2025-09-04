import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const email = String(form.get("email") || "").trim();

  // TODO: integrate with your provider (Beehiiv, ConvertKit, Mailchimp, etc.).
  // For now, we simulate success and log on the server.
  console.log("[subscribe] email:", email);

  return NextResponse.redirect(new URL("/?subscribed=1", req.url));
}
