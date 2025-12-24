 export class CheckoutStepOnePage {
  constructor(page) {
    this.page = page;
  }

  firstNameField = () => this.page.locator('[data-test="firstName"]');
  lastNameField = () => this.page.locator('[data-test="lastName"]');
  postalCodeField = () => this.page.locator('[data-test="postalCode"]');
  continueButton = () => this.page.locator('[data-test="continue"]');

  async fillInformation(fname, lname, zip) {
    await this.firstNameField().fill(fname);
    await this.lastNameField().fill(lname);
    await this.postalCodeField().fill(zip);
    await this.continueButton().click();
  }
}