import { expect, test } from '@playwright/test';

import { HomePage } from '@/e2e/pages/home';

test.describe('/', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.goto();
    });

    test('should have correct title', async () => {
        await expect(homePage.page).toHaveTitle('Александр Тришин');
    });
});
