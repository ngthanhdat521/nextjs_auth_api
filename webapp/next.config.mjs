/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';
import createNextIntlPlugin from 'next-intl/plugin';

dotenv.config({ path: '.env.dev' });
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['product.hstatic.net'], // Thêm tên miền vào đây
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.BACKEND_URL}/:path*`, // URL đích
      },
    ];
  },
};

export default withNextIntl(nextConfig);
