import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.yardplaybook.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/blog/overseeding`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/blog/mistakes`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/blog/winterize`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
