export class CheckoutCompletePage {
    constructor(page) {
        this.page = page;
        // Locators
        this.pageTitle = page.locator('.title');
        this.completeHeader = page.locator('.complete-header');
        this.backHomeButton = page.locator('#back-to-products');
    }
    // Actions / Methods
    async getPageTitle() {
        return await this.pageTitle.innerText();
    }
    async getCompleteMessage() {
        return await this.completeHeader.innerText();
    }
    async clickBackHome() {
        await this.backHomeButton.click();
    }
}