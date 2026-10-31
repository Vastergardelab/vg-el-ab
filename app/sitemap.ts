import type { MetadataRoute } from "next";
import { brand, hasPlaceholderReviews, services } from "@/app/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${brand.url}/tjanster/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: brand.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${brand.url}/tjanster`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages,
    {
      url: `${brand.url}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Recensioner tas med först när riktiga omdömen finns (sidan är noindex så länge).
    ...(hasPlaceholderReviews
      ? []
      : [
          {
            url: `${brand.url}/recensioner`,
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.6,
          },
        ]),
  ];
}
