// @ts-check

import createNextBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks']
    }
};

const withNextBundleAnalyzer = createNextBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });
const withNextIntl = createNextIntlPlugin('./src/i18n/next-intl-provider.ts');

export default withNextBundleAnalyzer(withNextIntl(nextConfig));
