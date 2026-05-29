import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.CF_PAGES === '1',
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr',
        permanent: false
      }
    ];
  }
};

export default withNextIntl(nextConfig);
