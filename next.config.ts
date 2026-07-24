import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages
  ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "/streetbeat-airc-research-intelligence")
  : "";

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath,
  output: isGithubPages ? "export" : undefined,
  trailingSlash: isGithubPages,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
