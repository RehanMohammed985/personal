/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '', // For root domain hosting on rehan.world
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 