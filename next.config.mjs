/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  basePath: '/mj-builder',
  i18n: {
    locales: ['en', 'gc'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
