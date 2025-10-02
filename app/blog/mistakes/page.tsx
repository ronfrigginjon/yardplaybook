import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5 Common Lawn Care Mistakes (and How to Avoid Them) — YardPlaybook",
  description:
    "Avoid these five pitfalls to save time, money, and your lawn’s health all season long.",
};

export default function MistakesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 prose prose-green">
      <h1 className="text-4xl font-bold mb-2">5 Common Lawn Care Mistakes (and How to Avoid Them)</h1>
      <p className="text-gray-600 mb-6">
        Most lawn problems trace back to a handful of habits that are easy to fix. Tweak these and
        you’ll see fast improvement—often within a few weeks.
      </p>

      <ol>
        <li>
          <strong>Mowing too short (scalping):</strong> Follow the 1/3 rule—never remove more than a
          third of the blade in one cut. Higher mowing shades soil, reduces weeds, and deepens roots.
        </li>
        <li>
          <strong>Shallow, frequent watering:</strong> Water deeply and less often to train roots
          down. Most lawns thrive on ~1 inch/week total.
        </li>
        <li>
          <strong>Guessing on fertilizer:</strong> Get a soil test and follow seasonal rates. Too
          much nitrogen creates thatch, disease, and rapid—weak—top growth.
        </li>
        <li>
          <strong>Ignoring soil health:</strong> Aerate compacted areas, add organic matter, and
          keep thatch under ½&quot;.
        </li>
        <li>
          <strong>Skipping prep before seeding:</strong> Seed needs soil contact. Rake, dethatch,
          and consider aeration before overseeding.
        </li>
      </ol>

      <p className="mt-4">
        Planning to thicken the lawn? Read{" "}
        <Link href="/blog/overseeding" className="text-green-800 underline">
          When to Overseed Your Lawn (By Region)
        </Link>{" "}
        for timing, prep, and aftercare. And protect your gains with{" "}
        <Link href="/blog/winterize" className="text-green-800 underline">
          How to Winterize Your Yard in One Weekend
        </Link>
        .
      </p>

      <div className="rounded-lg border border-green-200 bg-green-50 p-4 my-6">
        <strong>📘 Free Resource:</strong>{" "}
        <Link href="/#playbook" className="text-green-800 underline">
          Get the Seasonal Lawn Playbook
        </Link>{" "}
        so you never miss a key task.
      </div>

      <div className="mt-8">
        <Link className="text-green-800 underline" href="/blog">
          ← All articles
        </Link>
      </div>
    </main>
  );
}
