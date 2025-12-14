import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { USERS, BASE_URL } from '../data/userData.js';

test.describe('Login Tests', () => {

  test('Negative Login - locked_out_user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate(BASE_URL);
    await loginPage.login(USERS.locked.username, USERS.locked.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('locked out');
  });

  test('Negative Login - wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate(BASE_URL);
    await loginPage.login(USERS.standard.username, 'wrong_password');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('do not match');
  });

  test('Negative Login - wrong username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate(BASE_URL);
    await loginPage.login('wrong_user', USERS.standard.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('do not match');
  });

  test('Negative Login - empty username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate(BASE_URL);
    await loginPage.login('', USERS.standard.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });

  test('Negative Login - empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate(BASE_URL);
    await loginPage.login(USERS.standard.username, '');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Password is required');
  });

  test('Negative Login - empty username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate(BASE_URL);
    await loginPage.login('', '');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });

});