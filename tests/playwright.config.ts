import { defineConfig, devices } from '@playwright/test';

const isDev = !process.env.CI;

const port = 3001;

const config = defineConfig({
    testDir: './e2e/specs',

    fullyParallel: isDev,
    forbidOnly: isDev,

    retries: isDev ? 0 : 2,
    workers: isDev ? '50%' : 1,

    reporter: isDev ? 'list' : [['html', { open: 'never' }]],

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] }
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] }
        }
    ],

    webServer: {
        cwd: '..',
        command: `npm run start -- -p ${port}`,
        port,
        reuseExistingServer: isDev
    },
    use: {
        baseURL: `http://localhost:${port}`,
        locale: 'ru' as Locale,
        trace: 'on-first-retry'
    }
});

export default config;
