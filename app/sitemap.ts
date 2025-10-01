import type { MetadataRoute } from "next";

/**
 * Update the `posts` array whenever you add a new blog post.
 * This keeps Google/Bing aware of all your canonical URLs.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.yardplaybook.com";

  // List all blog slugs here
  const posts = [
    { slug: "overseeding", priority: 0.7 },
    { slug: "mistakes", priority: 0.7 },
    { slug: "winterize", priority: 0.7 },
  ];

  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/thanks`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogEntries: MetadataRoute.Sitemap = posts.map(({ slug, priority }) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority,
  }));

  return [...core, ...blogEntries];
}
