import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eliasb.be';
  
  const publicProjectIds = ["zero", "minecraft"]; 

  const homeRoute = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  };

  const privacyRoute = {
    url: `${baseUrl}/privacy`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  };

  const projectRoutes = publicProjectIds.map((id) => ({
    url: `${baseUrl}/project/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [homeRoute, privacyRoute, ...projectRoutes];
}