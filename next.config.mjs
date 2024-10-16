/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
    experimental: {
      outputFileTracingIncludes: {
        'api/data': ['./secrets.json'],
      },
    },
  }