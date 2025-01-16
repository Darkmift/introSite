import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    swcPlugins: [['typewind/swc', {}]],
  },
};

export default nextConfig;
