/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
