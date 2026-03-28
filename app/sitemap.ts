import { MetadataRoute } from 'next'

const baseUrl = 'https://sageintlg.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        `${baseUrl}/images/hero-bg.jpg`,
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        `${baseUrl}/images/about-hero.jpg`,
      ],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
      images: [
        `${baseUrl}/images/services-hero.jpg`,
      ],
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [
        `${baseUrl}/images/hero-bg.jpg`,
      ],
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [
        `${baseUrl}/images/clients/slb.png`,
        `${baseUrl}/images/clients/koc.png`,
        `${baseUrl}/images/clients/baker_hughes.png`,
        `${baseUrl}/images/clients/al_mansoori.png`,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ]
}
