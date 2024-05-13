import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    stories: ['../src/**/*.(stories|story).@(ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-styling-webpack',
        '@storybook/addon-a11y',
        'storybook-dark-mode',
        'storybook-i18n'
    ],
    staticDirs: ['../public'],
    framework: {
        name: '@storybook/nextjs',
        options: {}
    }
};

export default config;
