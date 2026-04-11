import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: `${process.env.INTERNAL_PB_URL || 'http://pocketbase:8090'}/:path*`,
      },
      {
        source: '/_/:path*',
        destination: `${process.env.INTERNAL_PB_URL || 'http://pocketbase:8090'}/_/:path*`,
      },
    ];
  },
};

export default nextConfig;
