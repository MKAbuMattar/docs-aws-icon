import PWANextInit from 'next-pwa';
import PWANextRuntimeCaching from 'next-pwa/cache';
import type { NextConfig } from 'next';

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
}) as unknown as (config: NextConfig) => NextConfig;

const BaseConfig = {
  output: 'export',
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

const config = PWANextConfig(BaseConfig as NextConfig) as NextConfig;

export default config;
