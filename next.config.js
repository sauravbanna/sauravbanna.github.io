/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
      images: {
        unoptimized: true,
      },
    },
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages"
}

module.exports = nextConfig