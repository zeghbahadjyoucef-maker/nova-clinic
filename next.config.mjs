import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const isCF = process.env.CF_PAGES === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages; standard server mode for Vercel
  output: isCF ? 'export' : undefined,
  images: {
    unoptimized: isCF,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' }
    ]
  },
  // redirects() is not compatible with static export
  ...(!isCF && {
    async redirects() {
      return [{ source: '/', destination: '/fr', permanent: false }];
    }
  })
};

export default withNextIntl(nextConfig);
