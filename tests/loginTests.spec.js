import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { USERS } from '../data/userData.js';

test.describe('Login – Negative & Locked Users', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Login with locked_out_user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(USERS.locked.username, USERS.locked.password);

    await expect(loginPage.errorMessage()).toContainText(
      'Epic sadface: Sorry, this user has been locked out.'
    );
  });

  test('Empty username + valid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('', USERS.standard.password);

    await expect(loginPage.errorMessage()).toContainText(
      'Epic sadface: Username is required'
    );
  });

  test('Valid username + empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(USERS.standard.username, '');

    await expect(loginPage.errorMessage()).toContainText(
      'Epic sadface: Password is required'
    );
  });

  test('Wrong username + wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('wrong_user', 'wrong_password');

    await expect(loginPage.errorMessage()).toContainText(
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

});