import Link from "next/link";

const posts = [
  {
    slug: "overseeding",
    title: "When to Overseed Your Lawn (By Region)",
    description:
      "The complete, step-by-step guide to timing, prep, and aftercare for overseeding—dialed by region with soil-temp cues, watering schedule, and common mistakes to avoid.",
  },
  {
    slug: "mistakes",
    title: "5 Common Lawn Care Mistakes (and How to Avoid Them)",
    description:
      "Avoid these five pitfalls to save time, money, and your lawn’s health all season long.",
  },
  {
    slug: "winterize",
    title: "How to Winterize Your Yard in One Weekend",
    description:
      "A simple, efficient plan to protect your turf and tools so you hit spring in stride.",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-gray-700 mb-8">
        Practical, step-by-step lawn care plays you can actually use.
      </p>
      <ul className="space-y-6">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-lg border p-5 hover:shadow-sm">
            <h2 className="text-2xl font-semibold">
              <Link className="text-green-800 underline" href={{ pathname: '/blog/[slug]', query: { slug: p.slug } }}>
                 {p.title}
              </Link>
            </h2>
            <p className="text-gray-600 mt-2">{p.description}</p>
            <div className="mt-3">
              <Link className="text-green-800 underline" href={`/blog/${p.slug}`}>
                Read more →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
