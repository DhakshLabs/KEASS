import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: githubPages ? "/KEASS" : "",
  assetPrefix: githubPages ? "/KEASS" : "",
};

export default nextConfig;
