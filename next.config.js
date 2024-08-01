/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "imgur.com"],
  },
  compiler: {
    styledComponents: true,
  },
};
