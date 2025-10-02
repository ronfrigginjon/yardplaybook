import type { Metadata } from "next";
import "./globals.css";
import { clsx } from "clsx";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YardPlaybook — Your Game Plan for a Better Yard",
  description:
    "Seasonal reminders, step-by-step checklists, and expert tips to keep your lawn winning all year long.",
  metadataBase: new URL("https://yardplaybook.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "YardPlaybook — Your Game Plan for a Better Yard",
    description:
      "Seasonal reminders, step-by-step checklists, and expert tips to keep your lawn winning all year long.",
    url: "https://yardplaybook.com",
    siteName: "YardPlaybook",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YardPlaybook — Your Game Plan for a Better Yard",
    description:
      "Seasonal reminders, step-by-step checklists, and expert tips to keep your lawn winning all year long.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx("min-h-screen antialiased")}>
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-extrabold text-xl tracking-tight">
              <span className="text-green-800">Yard</span>Playbook
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/blog" className="hover:underline">Blog</Link>
              <Link href="/#playbook" className="hover:underline">Playbook</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="mt-16 bg-green-800 text-white">
          <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-3">
            <div>
              <div className="font-extrabold text-lg">YardPlaybook</div>
              <p className="text-sm mt-2 opacity-90">
                Your lawn care coach. Simple plays, seasonal reminders, real results.
              </p>
            </div>
            <div>
              <div className="font-bold">Popular Topics</div>
              <ul className="mt-3 space-y-1 text-sm opacity-90">
                <li><Link href="/blog/overseeding" className="hover:underline">Overseeding</Link></li>
                <li><Link href="/blog/winterize" className="hover:underline">Winterizing</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-bold">Stay in the Game</div>
              <form action="/api/subscribe" method="post" className="mt-3 flex gap-2">
                <input type="email" name="email" required placeholder="Email address" className="w-full rounded-md px-3 py-2 text-black" />
                <button className="rounded-md bg-white/10 px-4 py-2 font-semibold hover:bg-white/20">Join</button>
              </form>
              <p className="text-xs mt-2 opacity-80">We send seasonal reminders and key yard tasks. Unsubscribe anytime.</p>
            </div>
          </div>
          <div className="border-t border-white/20 py-4 text-center text-sm opacity-90">
            © 2025 YardPlaybook — All Rights Reserved
          </div>
        </footer>

        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7Z3S1JDHXQ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7Z3S1JDHXQ');
`}}
        />
      </body>
    </html>
  );
}
