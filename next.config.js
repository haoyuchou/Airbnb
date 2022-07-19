/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.dicasdeviagem.com", "links.papareact.com"],
  },
  env: {
    mapboxKey: "pk.eyJ1IjoiaGFveXVjaG91IiwiYSI6ImNsNXFodDZ1ZzF4Zmgzam1tMmN6NGhnOWgifQ.8JJJL-yD5tXDPyXNl-f4dg"
  }
};

module.exports = nextConfig;
