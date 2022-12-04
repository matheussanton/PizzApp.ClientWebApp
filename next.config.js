/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    SERVICE_BASEURL: "http://localhost:3333"
  }
}

module.exports = nextConfig
