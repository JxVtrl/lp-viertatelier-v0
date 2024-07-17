/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "img.freepik.com", "images.ctfassets.net"],
  },
  env: {
    INSTA_TOKEN: process.env.INSTA_TOKEN
  }
};

export default nextConfig;
