import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/invoice",
        destination: "/invoicing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
