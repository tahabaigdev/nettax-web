import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // 🚨 disables type checking on build
  },
  images: {
    domains: ["rise.radixtech.org"], // ✅ add your domain he
  },
};

export default nextConfig;
