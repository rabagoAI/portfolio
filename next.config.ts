import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'postimages.org',
      },
      {
        protocol: 'https',
        hostname: '1.postimg.cc', // ← Agrega este subdominio
      },
      {
        protocol: 'https',
        hostname: '*.postimg.cc', // ← Esto cubre todos los subdominios
      },
    ],
  },
};

export default nextConfig;