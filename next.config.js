/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
