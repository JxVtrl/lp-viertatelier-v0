/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "img.freepik.com",
      "images.ctfassets.net",
      "scontent-gig4-1.cdninstagram.com",
      "scontent-iad3-1.cdninstagram.com",
      "scontent-iad3-2.cdninstagram.com",
    ],
  },
  env: {
    INSTA_TOKEN: process.env.INSTA_TOKEN,
  },
};

export default nextConfig;
