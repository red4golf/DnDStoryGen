/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  // Add custom webpack config if needed
  webpack: (config, { isServer }) => {
    // Custom webpack config here
    return config;
  },
}

module.exports = nextConfig