export class CheckoutCompletePage {
   constructor(page) {
      this.page = page
   }
successHeader = () =>
   this.page.locator('[data-test="complete-header"]')
}