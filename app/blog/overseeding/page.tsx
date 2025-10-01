import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "When to Overseed Your Lawn (By Region) — YardPlaybook",
  description:
    "The complete, step-by-step guide to timing, prep, and aftercare for overseeding—dialed by region with soil-temp cues, watering schedule, and common mistakes to avoid.",
};

const faqJson = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the best time to overseed cool-season lawns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Late summer to early fall when soil is warm (55–70°F) and air temps are cooling. This window reduces weed pressure and heat stress.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I water after overseeding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mist lightly 2–4 times daily for the first 7 days to keep the top 1/2 inch moist, then taper over weeks 2–4 to fewer, deeper waterings to train roots.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use pre-emergent weed control when overseeding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avoid traditional pre-emergents like prodiamine around overseeding—they also block grass seed. If needed, choose a seed-safe product such as mesotrione.",
      },
    },
    {
      "@type": "Question",
      name: "When should I mow after overseeding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Make your first mow when new grass reaches 3–4 inches and is dry. Use a sharp blade, remove no more than 1/3 of the blade height, and keep the mower high for the first few cuts.",
      },
    },
  ],
};

export default function OverseedingPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 prose prose-green">
      <Script
        id="faq-overseeding"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      <h1 className="text-4xl font-bold mb-2">When to Overseed Your Lawn (By Region)</h1>
      <p className="text-gray-600 mb-6">
        Overseeding is the fastest, most reliable way to thicken a thin lawn without starting from
        scratch. The trick is timing and execution: seed needs consistent soil warmth, good contact,
        and steady moisture to win. Use the regional guidance below, follow the prep and aftercare
        exactly, and you’ll see fresh green fill-in within weeks.
      </p>

      <div className="rounded-lg border border-green-200 bg-green-50 p-4 my-6">
        <strong>📘 Free Resource:</strong>{" "}
        <Link href="/#playbook" className="text-green-800 underline">
          Get the Seasonal Lawn Playbook
        </Link>{" "}
        for a printable month-by-month checklist.
      </div>

      <h2>Quick Answer by Region</h2>
      <p>Use soil temperature (not just the calendar) as your primary signal. A cheap soil thermometer is worth it.</p>

      <h3>Cool-Season Regions (Midwest, Northeast, Pacific Northwest)</h3>
      <ul>
        <li><strong>Best window:</strong> Late summer → early fall when daytime highs cool and soil is still warm (roughly Aug–Oct).</li>
        <li><strong>Soil temp target:</strong> ~55–70°F. This minimizes weed pressure and heat stress, and maximizes germination.</li>
        <li><strong>Secondary window:</strong> Early spring (riskier—more weeds, weather swings). Fall still wins 9 times out of 10.</li>
      </ul>

      <h3>Warm-Season Regions (South / Sunbelt)</h3>
      <ul>
        <li><strong>Best window:</strong> Late spring → early summer after nights warm and soil stays consistently above ~65°F.</li>
        <li><strong>Grass types:</strong> Overseed warm-season lawns (Bermuda, Zoysia, St. Augustine, Centipede) only when they’re actively growing. For winter color, some overseed Bermuda with perennial rye in fall—just know it competes in spring.</li>
      </ul>

      <h2>Soil Temperature &gt; Calendar</h2>
      <p>
        Weather apps are fine, but a <em>soil</em> thermometer ends the guesswork. Insert 2–3" deep in multiple spots.
        In cool-season belts, aim for the 55–70°F band. In warm-season areas, wait for consistent 65°F+ before you broadcast seed.
      </p>

      <h2>Prep: The Part Most People Skip</h2>
      <p>Overseeding success is 80% prep. Give seed a soft landing and good contact so it doesn’t dry out or wash away.</p>
      <ol>
        <li><strong>Mow low (but don’t scalp):</strong> Drop your mower one notch below normal to open the canopy. Bag the clippings.</li>
        <li><strong>Dethatch (if needed):</strong> If thatch &gt; ½", remove it so seed hits soil, not a sponge layer.</li>
        <li><strong>Core aerate (ideal):</strong> Plugs create perfect seed pockets and improve water/air flow.</li>
        <li><strong>Rake clean:</strong> Remove debris so seed isn’t blocked.</li>
        <li><strong>Topdress (optional but awesome):</strong> A light ¼" layer of compost or screened soil improves germination and evens out bumps.</li>
      </ol>

      <h2>Choose the Right Seed + Rate</h2>
      <h3>Cool-Season Lawns</h3>
      <ul>
        <li><strong>Common blends:</strong> KBG (spreads via rhizomes), PRG (fast pop), TTTF (heat/drought tolerance) or mixes.</li>
        <li><strong>Overseeding rate:</strong> ~3–5 lbs/1,000 sq ft for PRG/TTTF blends; 1–3 lbs/1,000 for KBG-heavy mixes (check the bag).</li>
      </ul>

      <h3>Warm-Season Lawns</h3>
      <ul>
        <li><strong>Bermuda:</strong> Overseed with Bermuda (late spring) or winter color with PRG (early fall).</li>
        <li><strong>Zoysia/St. Augustine/Centipede:</strong> Often better thickened by plugs or sod rather than seed (seed availability and success vary).</li>
      </ul>

      <h2>How to Spread Seed (The “Even Coverage” Play)</h2>
      <ol>
        <li><strong>Load a spreader</strong> with half your seed. Make a north–south pass.</li>
        <li><strong>Load the second half</strong> and make an east–west pass.</li>
        <li><strong>Lightly rake</strong> to pull seed into the top ¼" of soil. Don’t bury it.</li>
        <li><strong>Topdress lightly</strong> (optional) to improve moisture retention and seed-to-soil contact.</li>
        <li><strong>Roll (optional):</strong> A water roller helps press seed in on bumpy ground.</li>
      </ol>

      <h2>Watering Schedule: Weeks 0–4</h2>
      <p>Your goal is constant surface moisture—not puddles. Adjust for wind/slope/sun.</p>
      <ul>
        <li><strong>Days 0–7:</strong> Mist 2–4×/day to keep top ½" moist.</li>
        <li><strong>Days 8–14:</strong> Taper to 1–2×/day as sprouts take.</li>
        <li><strong>Days 15–21:</strong> Shift to once daily, slightly deeper soak.</li>
        <li><strong>Days 22–28:</strong> Water 3–4×/week, deeper yet—train roots.</li>
      </ul>

      <h2>Fertilizer, Weed Control & Mowing Timing</h2>
      <h3>Starter Fertilizer?</h3>
      <p>If your soil test shows low phosphorus, a starter helps. Otherwise a light, balanced feeding (or none) is safer. Too much N early causes flop and disease.</p>

      <h3>Pre-Emergent Warning</h3>
      <p>Skip pre-emergent (e.g., prodiamine) before or right after overseeding—it blocks grass seed too. If you must control weeds, choose seed-safe options like mesotrione (many starter blends label this).</p>

      <h3>When to Mow</h3>
      <ul>
        <li>First mow when new grass hits ~3–4". Sharp blade, gentle turns. Remove ≤ ⅓ of the blade.</li>
        <li>Keep the mower higher than usual for the first few cuts to reduce stress.</li>
      </ul>

      <h2>Common Mistakes (And How to Avoid Them)</h2>
      <ul>
        <li><strong>Seeding into thatch:</strong> If seed can’t touch soil, it won’t germinate. Dethatch or rake hard first.</li>
        <li><strong>Overwatering or underwatering:</strong> Aim for consistent surface moisture the first 2 weeks—not puddles.</li>
        <li><strong>Too much nitrogen:</strong> Causes weak, leggy growth and disease. Go light early.</li>
        <li><strong>Bad timing:</strong> Don’t fight peak heat or cold snaps; use soil temp as your guide.</li>
      </ul>
      <p>
        For more pitfalls to dodge, read{" "}
        <Link href="/blog/mistakes" className="text-green-800 underline">
          5 Common Lawn Care Mistakes (and How to Avoid Them)
        </Link>
        .
      </p>

      <h2>Mini Calendar (By Season)</h2>
      <ul>
        <li><strong>Late Summer / Early Fall (cool-season):</strong> Prime time. Overseed as nights cool; follow the 4-week schedule.</li>
        <li><strong>Late Spring / Early Summer (warm-season):</strong> Overseed when soil is warm and turf is actively growing.</li>
        <li><strong>Late Fall:</strong> If you miss the window, consider a “dormant seeding” very late in the season. Germination waits until spring—coverage is spottier, but better than nothing.</li>
      </ul>

      <div className="rounded-lg border border-green-200 bg-green-50 p-4 my-8">
        <p className="mb-2">
          <strong>Next:</strong>{" "}
          <Link href="/blog/winterize" className="text-green-800 underline">
            How to Winterize Your Yard in One Weekend
          </Link>{" "}
          keeps your gains alive through the cold.
        </p>
        <p>
          Or grab the free{" "}
          <Link href="/#playbook" className="text-green-800 underline">
            Seasonal Lawn Playbook
          </Link>{" "}
          so you never miss a task.
        </p>
      </div>

      <div className="mt-8">
        <Link className="text-green-800 underline" href="/blog">
          ← All articles
        </Link>
      </div>
    </main>
  );
}
