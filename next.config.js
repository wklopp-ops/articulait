/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['articulait.b-cdn.net', 'cdn.articulait.com'],
  },
}

module.exports = nextConfig
