 export class CheckoutStepOnePage {
  constructor(page) {
    this.page = page;
  }
 // locators
  firstNameField = ('[data-test="firstName"]');
  lastNameField = ('[data-test="lastName"]');
  postalCodeField = ('[data-test="postalCode"]');
  continueButton = ('[data-test="continue"]');
 // actions
  async fillInformation(fname, lname, zip) {
    await this.page.locator(this.firstNameField).fill(fname);
    await this.page.locator(this.lastNameField).fill(lname);
    await this.page.locator(this.postalCodeField).fill(zip);
    await this.page.locator(this.continueButton).click();
  }
}