import type { Page } from '@playwright/test';

class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/');
    }
}

export { HomePage };
