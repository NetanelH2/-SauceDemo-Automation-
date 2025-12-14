import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage.js';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage.js';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage.js';
import { USERS, BASE_URL } from '../data/userData.js';

test('Sanity - End to End purchase flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.navigate(BASE_URL);
  await loginPage.login(USERS.standard.username, USERS.standard.password);

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addBackpackToCart();
  await inventoryPage.addBikeLightToCart();
  await inventoryPage.goToCart();

  await expect(page).toHaveURL(/cart\.html/);
  await expect(page.locator('.title')).toHaveText('Your Cart');

  const cartPage = new CartPage(page);
  await expect(await cartPage.getCartItemCount()).toBe(2);
  await cartPage.clickCheckout();

  await expect(page).toHaveURL(/checkout-step-one\.html/);
  await expect(page.locator('.title')).toHaveText('Checkout: Your Information');

  const stepOne = new CheckoutStepOnePage(page);
  await stepOne.fillDetails('Test', 'User', '12345');

  await expect(page).toHaveURL(/checkout-step-two\.html/);
  await expect(page.locator('.title')).toHaveText('Checkout: Overview');

  const stepTwo = new CheckoutStepTwoPage(page);
  await stepTwo.finishCheckout();

  await expect(page).toHaveURL(/checkout-complete\.html/);
  await expect(page.locator('.title')).toHaveText('Checkout: Complete!');

  const completePage = new CheckoutCompletePage(page);
  await expect(await completePage.getCompleteMessage()).toContain('Thank you');

});