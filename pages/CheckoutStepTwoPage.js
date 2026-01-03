 export class CheckoutStepTwoPage {
   constructor(page) {
      this.page = page
   }
   // locator
   finishButton = ('[data-test="finish"]')
  // action
   async finishOrder() {
      await this.page.locator(this.finishButton).click()
   }
 }