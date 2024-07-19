/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      "images.unsplash.com",
      "img.freepik.com",
      "images.ctfassets.net",
      "scontent-gig4-1.cdninstagram.com",
      "scontent-iad3-1.cdninstagram.com",
      "scontent-iad3-2.cdninstagram.com",
      "scontent.cdninstagram.com",
    ],
  },
  env: {
    INSTA_TOKEN: process.env.INSTA_TOKEN,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    return config;
  },
};

export default nextConfig;
