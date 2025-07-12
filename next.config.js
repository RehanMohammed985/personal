/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/personal', // Back to GitHub Pages subdirectory
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 