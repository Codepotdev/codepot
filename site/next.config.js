/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: [
      "media-exp2.licdn.com",
      "www.gravatar.com",
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
      "lh6.googleusercontent.com",
      "avatars.githubusercontent.com",
      "i.stack.imgur.com",
      "graph.facebook.com",
      "api.github.com",
      "res.cloudinary.com",
      "github.com",
      "cdn.jsdelivr.net",
      "gitlab.com"
    ],
  },
};

module.exports = nextConfig;
