/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nizsimsek.dev",
      },
      {
        protocol: "https",
        hostname: "nizamettinsimsek.com.tr",
      },
      {
        protocol: "https",
        hostname: "localhost:3000",
      },
    ],
    loader: "default",
  },
};

module.exports = nextConfig;
