import { expect, test } from '@playwright/test';

import { NotFoundPage } from '@/e2e/pages/not-found';

test.describe('/404', () => {
    let notFoundPage: NotFoundPage;

    test.beforeEach(async ({ page }) => {
        notFoundPage = new NotFoundPage(page);

        await notFoundPage.goto();
    });

    test('should have correct message', async () => {
        await expect(notFoundPage.paragraphMessage).toContainText('страница не найдена');
    });

    test('should redirect to home page on link click', async () => {
        await notFoundPage.linkGoHome.click();

        await expect(notFoundPage.page).toHaveURL('/');
    });
});
