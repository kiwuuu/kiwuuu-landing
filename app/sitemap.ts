import type { MetadataRoute } from "next";
import { listVerticals } from "@/lib/verticals";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kiwuuu.com";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...listVerticals().map((v) => ({
      url: `${base}/${v.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    {
      url: `${base}/cyrillic`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];
}
