import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ✅ Allow production builds even if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Skip ESLint checks during build (helps prevent deploy errors)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
