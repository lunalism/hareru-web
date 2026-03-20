import type { MetadataRoute } from "next";

const baseUrl = "https://hareru.app";
const locales = ["ja", "en", "ko"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push(
      { url: `${baseUrl}/${locale}`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
      { url: `${baseUrl}/${locale}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
      { url: `${baseUrl}/${locale}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    );
  }

  return entries;
}
