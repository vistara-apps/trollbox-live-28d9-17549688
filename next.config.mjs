
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['imagedelivery.net', 'res.cloudinary.com'],
  },
};

export default nextConfig;
