/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media-exp2.licdn.com",
      "www.gravatar.com",
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh6.googleusercontent.com"
    ],
  },
};

module.exports = nextConfig;
