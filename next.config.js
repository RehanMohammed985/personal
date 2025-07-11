/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/personal',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 