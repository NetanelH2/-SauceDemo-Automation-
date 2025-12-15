export class CheckoutStepTwoPage {
  constructor(page) {
    this.page = page
    // Locators
    this.pageTitle = page.locator('.title')
    this.finishButton = page.locator('#finish')
    this.summaryTotal = page.locator('.summary_total_label')
  }
  // Actions / Methods
  async getPageTitle() {
    return await this.pageTitle.innerText()
  }
  async finishCheckout() {
    await this.finishButton.click()
  }
  async getSummaryTotal() {
    return await this.summaryTotal.innerText()
  }
}
