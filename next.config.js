/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/about/karen",
        destination: "/about/me/karen",
      },
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
