import type { Metadata } from "next";
import Link from "next/link";

const articles: Record<string, {title: string, body: JSX.Element, description: string}> = {
  overseeding: {
    title: "When to Overseed Your Lawn (By Region)",
    description: "Timing your overseeding is the difference between lush and lackluster.",
    body: (
      <>
        <p>Overseeding refreshes thinning lawns. The ideal timing depends on your grass type and climate.</p>
        <h3 className="text-xl font-semibold mt-6">Cool-Season Grasses (Midwest / Northeast)</h3>
        <p>Best: Late summer to early fall (soil is warm, air is cooler, fewer weeds). Secondary window: early spring.</p>
        <h3 className="text-xl font-semibold mt-6">Warm-Season Grasses (South / Sunbelt)</h3>
        <p>Best: Late spring to early summer after soil temps consistently exceed ~65°F.</p>
        <p className="mt-4">Prep matters: mow low, rake up thatch, core aerate if possible, seed-to-soil contact, and keep it moist.</p>
      </>
    ),
  },
  mistakes: {
    title: "5 Common Lawn Care Mistakes (and How to Avoid Them)",
    description: "Avoid these pitfalls to save time and money all season.",
    body: (
      <>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Mowing too short (scalping). Aim for the 1/3rd rule.</li>
          <li>Watering frequently but shallow. Water deeply and less often.</li>
          <li>Over/under fertilizing. Follow a seasonal plan and recommended rates.</li>
          <li>Ignoring soil health. Test pH, add organic matter, manage compaction.</li>
          <li>Seeding without prep. Ensure seed-to-soil contact and proper timing.</li>
        </ol>
      </>
    ),
  },
  winterize: {
    title: "How to Winterize Your Yard in One Weekend",
    description: "A simple weekend plan to protect your lawn and tools.",
    body: (
      <>
        <p>Winterizing protects your turf and equipment so you can hit spring running.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Final mow a notch lower to reduce matting.</li>
          <li>Apply a late-fall fertilizer for root strength.</li>
          <li>Blow out irrigation / hoses; store hoses indoors.</li>
          <li>Clean and stabilize mower fuel; change oil and sharpen blade.</li>
          <li>Rake/mulch leaves to prevent smothering.</li>
        </ul>
      </>
    ),
  },
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = articles[params.slug];
  return {
    title: a ? `${a.title} — YardPlaybook` : "YardPlaybook",
    description: a?.description,
  };
}

export default function Article({ params }: { params: { slug: string } }) {
  const a = articles[params.slug];
  if (!a) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-2xl font-bold mb-2">Not Found</h1>
        <p className="mb-4">The article you’re looking for doesn’t exist.</p>
        <Link className="text-green-800 underline" href="/blog">Back to Blog</Link>
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 prose prose-green">
      <h1 className="text-4xl font-bold mb-2">{a.title}</h1>
      <p className="text-gray-600 mb-6">{a.description}</p>
      <div className="[&>*]:mb-3">{a.body}</div>
      <div className="mt-8">
        <Link className="text-green-800 underline" href="/blog">← All articles</Link>
      </div>
    </main>
  );
}
