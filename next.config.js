/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.dicasdeviagem.com", "links.papareact.com"],
  },
};

module.exports = nextConfig;
