import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true
  },
  sassOptions: {
    includePaths: ['./src'],
  }
};

export default nextConfig;
