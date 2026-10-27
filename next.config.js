/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages serves the demo from /<repo>; the deploy workflow sets BASE_PATH.
  basePath: process.env.BASE_PATH || "",
  images: {
    unoptimized: true,
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  trailingSlash: true,
  compiler: {
    emotion: true,
  },
}

module.exports = nextConfig
