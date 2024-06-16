/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/subscribe/your-info',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
