/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a minimal, self-contained production build (.next/standalone) that
  // bundles only the traced runtime files. Required for the production Docker
  // image — see Dockerfile. https://nextjs.org/docs/app/api-reference/config/next-config-js/output
  output: 'standalone',

  // Do not advertise the framework via the `X-Powered-By: Next.js` header.
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
};

export default nextConfig;