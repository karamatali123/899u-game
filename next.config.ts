import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/899u-game",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
