/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
      images: {
        unoptimized: true,
      },
    },
  basePath: "/sauravbanna.github.io",
  assetPrefix: "/sauravbanna.github.io"
}

module.exports = nextConfig