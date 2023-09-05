/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**.localhost:8000',
      },
    ],

  },
}

module.exports = nextConfig
