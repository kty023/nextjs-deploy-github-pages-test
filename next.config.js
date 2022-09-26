/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: process.env.GITHUB_ACTIONS && "/nextjs-deploy-github-pages-test",
  trailingSlash: true,
//  assetPrefix: !debug ? "/notes/" : "",
//  images: { loader: "custom" },
  // experimental: {
  //   images: {
  //       unoptimized: true,
  //   },
  // },
  images: {
      unoptimized: true,
  },
};
