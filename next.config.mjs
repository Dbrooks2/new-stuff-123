/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/new-stuff-123',
  assetPrefix: '/new-stuff-123/',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

export default nextConfig
