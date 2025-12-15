export class CartPage {
  constructor(page) {
    this.page = page
    // Locators
    this.pageTitle = page.locator('.title')
    this.cartItems = page.locator('.cart_item')
    this.checkoutButton = page.locator('#checkout')
    this.continueShoppingButton = page.locator('#continue-shopping')
  }
  // Actions / Methods
  async getPageTitle() {
    return await this.pageTitle.innerText()
  }
  // Get the count of items currently in the cart
  async getCartItemCount() {
    return await this.cartItems.count()
  }
  // Click on Checkout Button
  async clickCheckout() {
    await this.checkoutButton.click()
  }
  // Click on Continue Shopping button
  async clickContinueShopping() {
    await this.continueShoppingButton.click()
  }
}
