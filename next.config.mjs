/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.akamai.steamstatic.com",
      "encrypted-tbn0.gstatic.com",
      "www.imdb.com",
      "i.scdn.co",
    ],
  },
};

export default nextConfig;
