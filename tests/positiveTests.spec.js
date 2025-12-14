import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { USERS, BASE_URL } from '../data/userData.js';

test.describe('Positive Login Tests', () => {

  const users = [
    USERS.standard,
    USERS.problem,
    USERS.performance,
    USERS.error,
    USERS.visual
  ];

  for (const user of users) {
    test(`Login success - ${user.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.navigate(BASE_URL);
      await loginPage.login(user.username, user.password);

      await expect(page).toHaveURL(/inventory\.html/);
      await expect(page.locator('.title')).toHaveText('Products');
    });
  }

});