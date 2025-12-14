export class LoginPage {
  constructor(page) {
    this.page = page
    // Locators
    this.usernameInput = page.locator('#user-name')
    this.passwordInput = page.locator('#password')
    this.loginButton = page.locator('#login-button')
    this.errorMessage = page.locator('[data-test="error"]')
  }
  // Actions / Methods
  async navigate(baseUrl) {
    await this.page.goto(baseUrl)
  }
  async login(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }
  async getErrorMessage() {
    return await this.errorMessage.innerText()
  }
}
