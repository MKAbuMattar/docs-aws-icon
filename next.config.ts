import PWANextInit from 'next-pwa';
import PWANextRuntimeCaching from 'next-pwa/cache';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
} satisfies NextConfig;

const PWANextConfig = PWANextInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching: PWANextRuntimeCaching,
  publicExcludes: [
    '!robots.txt',
    '!sitemap.xml',
    '!sitemap.*.xml',
    '!app-build-manifest.json',
  ],
  buildExcludes: ['app-build-manifest.json'],
});

export default PWANextConfig(nextConfig);
