 import { BASE_URL } from '../data/urls.js';
 export class LoginPage { 
    constructor(page) {
     this.page = page;
   }

  usernameField = () => this.page.locator('[data-test="username"]');
  passwordField = () => this.page.locator('[data-test="password"]');
  loginButton = () => this.page.locator('[data-test="login-button"]');
  errorMessage = () => this.page.locator('[data-test="error"]');

   async navigate() {
     await this.page.goto(BASE_URL);
  }

  async login(username, password) {
    await this.usernameField().fill(username);
    await this.passwordField().fill(password);
    await this.loginButton().click();
  }
}