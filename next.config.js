/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blogs/startup-co-founder-frontend-mimarisi-let-wash",
        destination: "/blogs/startup-frontend-mimarisi-let-wash",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "nizsimsek.dev" }],
        destination: "https://nizamettinsimsek.com.tr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nizsimsek.dev" }],
        destination: "https://nizamettinsimsek.com.tr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nizamettinsimsek.com.tr" }],
        destination: "https://nizamettinsimsek.com.tr/:path*",
        permanent: true,
      },
    ];
  },
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
