export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-green-700 text-white py-20 px-6 text-center">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Your Game Plan for a Better Yard
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Stop guessing. YardPlaybook gives you seasonal reminders,
            step-by-step checklists, and expert tips to keep your lawn
            winning all year long.
          </p>
          <a
            href="#playbook"
            className="inline-block bg-white text-green-800 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
          >
            Get the Free Lawn Playbook
          </a>
        </div>
      </section>

      {/* Blog Teaser moved up for SEO */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Fresh Plays for Your Yard</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "When to Overseed Your Lawn (By Region)", href: "/blog/overseeding" },
              { title: "5 Common Lawn Care Mistakes (and How to Avoid Them)", href: "/blog/mistakes" },
              { title: "How to Winterize Your Yard in One Weekend", href: "/blog/winterize" },
            ].map((post) => (
              <article key={post.href} className="p-6 bg-white rounded-lg shadow hover:shadow-md">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <a href={post.href} className="text-sm text-green-800 mt-2 inline-block hover:underline">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What is YardPlaybook */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">What Is YardPlaybook?</h2>
          <p className="text-lg text-gray-700">
            Think of us as your lawn care coach. We break yard work into simple plays you can follow all year —
            no complicated guides, no wasted weekends. From fertilizing to overseeding to winter prep,
            we’ll tell you what to do, when to do it, and how to do it right.
          </p>
        </div>
      </section>

      {/* Free Playbook Lead Magnet */}
      <section id="playbook" className="bg-gray-100 py-16 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Yard Task Again</h2>
          <p className="text-lg text-gray-700 mb-6">
            Download our free Seasonal Lawn Playbook and get a month-by-month plan for a healthier, greener yard.
            Print it, stick it in the garage, and always know what’s next.
          </p>
          <form action="/api/subscribe" method="post" className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300"
            />
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-800"
            >
              Send Me the Playbook
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </main>
  );
}
