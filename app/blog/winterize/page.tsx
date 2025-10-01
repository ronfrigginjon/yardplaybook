import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Winterize Your Yard in One Weekend — YardPlaybook",
  description:
    "A simple, efficient plan to protect your turf and tools so you hit spring in stride.",
};

export default function WinterizePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 prose prose-green">
      <h1 className="text-4xl font-bold mb-2">How to Winterize Your Yard in One Weekend</h1>
      <p className="text-gray-600 mb-6">
        Winterizing protects your turf and equipment so spring startup is painless. Do this in one
        focused weekend and you’ll keep disease, dead spots, and broken tools at bay.
      </p>

      <ul>
        <li>Final mow one notch lower to reduce matting under snow.</li>
        <li>Apply a late-fall fertilizer to strengthen roots.</li>
        <li>Blow out irrigation or drain lines; store hoses indoors.</li>
        <li>Stabilize fuel, change oil, and sharpen mower blades.</li>
        <li>Rake/mulch leaves to prevent smothering and snow mold.</li>
      </ul>

      <p className="mt-4">
        If you overseeded this fall, be gentle on young turf. See{" "}
        <Link href="/blog/overseeding" className="text-green-800 underline">
          When to Overseed Your Lawn (By Region)
        </Link>{" "}
        for mowing/watering timing in the first month.
      </p>

      <div className="rounded-lg border border-green-200 bg-green-50 p-4 my-6">
        <strong>📘 Free Resource:</strong>{" "}
        <Link href="/#playbook" className="text-green-800 underline">
          Download the Seasonal Lawn Playbook
        </Link>{" "}
        and keep this weekend plan handy.
      </div>

      <div className="mt-8">
        <Link className="text-green-800 underline" href="/blog">
          ← All articles
        </Link>
      </div>
    </main>
  );
}
