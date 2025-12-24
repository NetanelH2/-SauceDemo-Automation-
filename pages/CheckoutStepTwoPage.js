 export class CheckoutStepTwoPage {
   constructor(page) {
      this.page = page
   }
   finishButton = () => this.page.locator('[data-test="finish"]')
   async finishOrder() {
      await this.finishButton().click()
   }
 }