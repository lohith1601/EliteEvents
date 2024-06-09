/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '**',  // Optional: match all paths, adjust as necessary
      },
    ],
  },
  // Add any other custom configurations here
};

export default nextConfig;
