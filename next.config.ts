import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.cache = false;
    config.resolve = config.resolve ?? {};
    config.resolve.symlinks = false;

    return config;
  },
};

export default nextConfig;
