/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  basePath: '/app',
  i18n: {
    locales: ['en', 'gc'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
