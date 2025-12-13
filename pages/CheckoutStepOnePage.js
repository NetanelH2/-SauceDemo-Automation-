export class CheckoutStepOnePage {
    constructor(page) {
        this.page = page;

        // Locators
        this.pageTitle = page.locator('.title');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
    }
    // Actions / Methods
    async getPageTitle() {
        return await this.pageTitle.innerText();
    }
    // Fill the checkout form
    async fillDetails(firstName, lastName, zip) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(zip);
        await this.continueButton.click();
    }
}