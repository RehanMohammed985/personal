/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '', // Removed '/personal' for root domain
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 