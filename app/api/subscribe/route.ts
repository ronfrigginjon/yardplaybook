import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const email = String(form.get("email") || "").trim();
  if (!email) return NextResponse.redirect(new URL("/?subscribed=0", req.url));

  // Store keys in Vercel Project → Settings → Environment Variables
  const API_KEY = process.env.BEEHIIV_API_KEY!;
  const PUB_ID  = process.env.BEEHIIV_PUBLICATION_ID!;

  const resp = await fetch(`https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({ email, reactivate_existing: true, send_welcome_email: true }),
  });

  // Optional: handle 409 (already subscribed) gracefully
  return NextResponse.redirect(new URL(resp.ok ? "/?subscribed=1" : "/?subscribed=0", req.url));
}
