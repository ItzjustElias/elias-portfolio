import { MetadataRoute } from "next";
import { PROJECT_ORDER } from "./lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eliasb.be";

  const homeRoute = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  };

  const privacyRoute = {
    url: `${baseUrl}/privacy`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  };
  
  const projectRoutes = PROJECT_ORDER.map((id) => ({
    url: `${baseUrl}/project/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [homeRoute, privacyRoute, ...projectRoutes];
}
