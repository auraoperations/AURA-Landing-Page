import { siteConfig } from "../lib/site";
import { seoPages } from "../lib/seo-pages";

export default function sitemap() {
  const lastModified = new Date();
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...Object.keys(seoPages).map((slug) => ({
      url: `${siteConfig.url}/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
