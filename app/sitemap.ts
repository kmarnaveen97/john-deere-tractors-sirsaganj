import type { MetadataRoute } from "next";
import { allCatalogItems } from "@/lib/catalog";
import { comparisons } from "@/lib/comparisons";
import { serviceAreas } from "@/lib/service-area";

export const baseUrl = "https://sbautosirsaganj.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/tractors", "/implements", "/precision-ag", "/finance", "/service", "/dealer", "/service-area", "/tractor-emi-calculator", "/purana-tractor-exchange"];

  return [
    ...staticPaths.map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    // Area landing pages carry the local-search weight, so rank them above products.
    // Tundla and Jasrana already have their own John Deere dealer, so they are
    // de-prioritised relative to Shikohabad and Firozabad city, which have none.
    ...serviceAreas.map((area) => ({
      url: `${baseUrl}/${area.slug}`,
      changeFrequency: "monthly" as const,
      priority: area.key === "tundla" || area.key === "jasrana" ? 0.6 : 0.9,
    })),
    ...comparisons.map((item) => ({
      url: `${baseUrl}/compare/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...allCatalogItems.map((item) => ({
      url: `${baseUrl}/products/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
