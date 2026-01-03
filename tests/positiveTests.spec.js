import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';

import { USERS } from '../data/userData.js';
import { URLS } from '../data/urls.js';

const POSITIVE_USERS = [
  USERS.standard,
  USERS.problem,
  USERS.performance,
  USERS.error,
  USERS.visual,
];

test.describe('Positive Login Tests', () => {
  for (const user of POSITIVE_USERS) {
    test(`Positive Login Test - ${user.username}`, async ({page}) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);

      await loginPage.navigate();
      await loginPage.login(user.username, user.password);

      await expect(page).toHaveURL(URLS.INVENTORY);
      await expect(page.locator(inventoryPage.pageTitle)).toHaveText('Products');
    });
  }
});