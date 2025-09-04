import Link from "next/link";

const posts = [
  { slug: "overseeding", title: "When to Overseed Your Lawn (By Region)", excerpt: "Timing your overseeding is the difference between lush and lackluster." },
  { slug: "mistakes", title: "5 Common Lawn Care Mistakes (and How to Avoid Them)", excerpt: "Avoid these pitfalls to save time and money all season." },
  { slug: "winterize", title: "How to Winterize Your Yard in One Weekend", excerpt: "A simple weekend plan to protect your lawn and tools." },
];

export default function BlogIndex() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(p => (
          <article key={p.slug} className="p-6 bg-white rounded-lg shadow hover:shadow-md">
            <h2 className="text-xl font-semibold">
              <Link className="hover:underline text-green-800" href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="text-gray-600 mt-2">{p.excerpt}</p>
            <Link className="text-sm text-green-800 mt-3 inline-block hover:underline" href={`/blog/${p.slug}`}>Read more →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
