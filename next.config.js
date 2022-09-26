/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const debug = process.env.NODE_ENV !== "production";

// const withOptimizedImages = require('next-optimized-images');

// module.exports = withOptimizedImages({
//   basePath: process.env.GITHUB_ACTIONS && "/nextjs-deploy-github-pages-test",
//   trailingSlash: true,
// //  assetPrefix: !debug ? "/notes/" : "",
// //  images: { loader: "custom" },
//   // experimental: {
//   //   images: {
//   //       unoptimized: true,
//   //   },
//   // },
//   // images: {
//   //     unoptimized: true,
//   // },
//   handleImages: ['jpeg', 'png', 'svg'],
// });

// module.exports = {
//   basePath: process.env.GITHUB_ACTIONS && "/nextjs-deploy-github-pages-test",
//   trailingSlash: true,
// //  assetPrefix: !debug ? "/notes/" : "",
// //  images: { loader: "custom" },
//   // experimental: {
//   //   images: {
//   //       unoptimized: true,
//   //   },
//   // },
//   // images: {
//   //     unoptimized: true,
//   // },
// };

module.exports = {
  basePath: process.env.GITHUB_ACTIONS && "/nextjs-deploy-github-pages-test",
  trailingSlash: true,
  assetPrefix: '/',
};
