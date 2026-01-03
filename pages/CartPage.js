 export class CartPage {
  constructor(page) {
    this.page = page
   } // locator
   checkoutButton = ('[data-test="checkout"]')
    // action
   async proceedToCheckout() {
   await this.page.locator(this.checkoutButton).click()
 }
}