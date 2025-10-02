import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fertilizing Basics — YardPlaybook",
  description: "When and how to fertilize your lawn for healthy growth all season long.",
};

export default function FertilizingPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 prose prose-green">
      <h1 className="text-4xl font-bold mb-2">Fertilizing Basics</h1>
      <p className="text-gray-600 mb-6">
        Fertilizing is one of the highest-return plays in lawn care—but only when done at the right
        time and with the right product. Too much, too little, or bad timing can cause more harm
        than good.
      </p>

      <h2>Seasonal Timing</h2>
      <ul>
        <li><strong>Spring:</strong> Light feeding to wake up the lawn without causing surge growth.</li>
        <li><strong>Summer:</strong> Avoid heavy nitrogen; spoon-feed if needed in cool-season lawns.</li>
        <li><strong>Fall:</strong> The most important application. Builds roots and stores energy.</li>
      </ul>

      <h2>General Tips</h2>
      <ul>
        <li>Always follow a soil test first.</li>
        <li>Apply evenly with a broadcast spreader.</li>
        <li>Water in unless using slow-release coated products.</li>
        <li>Avoid overlapping passes to prevent streaks or burns.</li>
      </ul>

      <div className="rounded-lg border border-green-200 bg-green-50 p-4 my-6">
        <strong>📘 Free Resource:</strong>{" "}
        <Link href="/#playbook" className="text-green-800 underline">
          Get the Seasonal Lawn Playbook
        </Link>{" "}
        for a month-by-month fertilizing schedule.
      </div>

      <div className="mt-8">
        <Link className="text-green-800 underline" href="/blog">
          ← All articles
        </Link>
      </div>
    </main>
  );
}
