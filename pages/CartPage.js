 export class CartPage {
  constructor(page) {
    this.page = page
   }
   checkoutButton = () => this.page.locator('[data-test="checkout"]')
   async proceedToCheckout() {
   await this.checkoutButton().click()
 }
}