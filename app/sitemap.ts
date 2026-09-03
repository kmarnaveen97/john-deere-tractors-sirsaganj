import type { MetadataRoute } from "next";
import { allCatalogItems } from "@/lib/catalog";
import { serviceAreas } from "@/lib/service-area";

export const baseUrl = "https://sbautosirsaganj.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/tractors", "/implements", "/precision-ag", "/finance", "/service", "/dealer", "/service-area"];

  return [
    ...staticPaths.map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    // Area landing pages carry the local-search weight, so rank them above products.
    ...serviceAreas.map((area) => ({
      url: `${baseUrl}/${area.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...allCatalogItems.map((item) => ({
      url: `${baseUrl}/products/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
