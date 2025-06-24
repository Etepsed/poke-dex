/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: {
    domains: ["raw.githubusercontent.com", "github.com"],
  },
};

export default nextConfig;
