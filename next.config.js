/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: process.env.GITHUB_ACTIONS && "/nextjs-deploy-github-pages-test",
  assetPrefix: !debug ? "/notes/" : "",
  images: { loader: "custom" },
};
