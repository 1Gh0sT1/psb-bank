import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: `${process.env.INTERNAL_PB_URL || 'http://pocketbase:8090'}/_/`,
      },
    ];
  },
};

export default nextConfig;
