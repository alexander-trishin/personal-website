import type { Locator, Page } from '@playwright/test';

class NotFoundPage {
    readonly page: Page;

    readonly linkGoHome: Locator;
    readonly paragraphMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.linkGoHome = page.getByRole('link', { name: 'Перейти на домашнюю страницу' });
        this.paragraphMessage = page.getByRole('paragraph');
    }

    async goto() {
        await this.page.goto(`/not-found-page-${Date.now()}`);
    }
}

export { NotFoundPage };
