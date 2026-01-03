 import { BASE_URL } from '../data/urls.js';
 export class LoginPage { 
    constructor(page) {
     this.page = page;
   }
 // locators
 usernameField = ('[data-test="username"]')
 passwordField = ('[data-test="password"]')
 loginButton = ('[data-test="login-button"]')
 errorMessage = ('[data-test="error"]')
 // actions
   async navigate() {
     await this.page.goto(BASE_URL);
  }

  async login(username, password) {
    await this.page.locator(this.usernameField).fill(username);
    await this.page.locator(this.passwordField).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}