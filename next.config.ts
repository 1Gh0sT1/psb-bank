import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: `${process.env.NEXT_PUBLIC_PB_URL || 'http://127.0.0.1:8090'}/_/`,
      },
    ];
  },
};

export default nextConfig;
