import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "1hcgs7spbatxhpzg.public.blob.vercel-storage.com" },
    ],
  },
};

export default nextConfig;
