import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/account/', '/api/', '/studio/'], // Keep private routes hidden from Google
    },
    sitemap: 'https://businesshub.com/sitemap.xml', // Change to your domain
  }
}