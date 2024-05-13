import type { Viewport } from 'next';

const viewport: Viewport = {
    width: 'device-width',
    minimumScale: 1,
    initialScale: 1,
    colorScheme: 'light dark',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#2e2e2e' }
    ]
};

export { viewport };
