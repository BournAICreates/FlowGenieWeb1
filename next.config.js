/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Temporarily disable strict mode to avoid hydration warnings
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig
