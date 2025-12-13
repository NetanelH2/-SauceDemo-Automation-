import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

import { USERS, BASE_URL } from '../data/userData';

test.describe('Sanity Tests', () => {

  test('Sanity - End to End purchase flow', async ({ page }) => {

    // 1 Navigate to site
    const loginPage = new LoginPage(page);
    await loginPage.navigate(BASE_URL);

    // 2 Login with standard_user
    await loginPage.login(
      USERS.standard.username,
      USERS.standard.password
    );

    // 3 Assert Inventory page
    await expect(page).toHaveURL(/inventory\.html/);
    const inventoryPage = new InventoryPage(page);
    await expect(await inventoryPage.getPageTitle()).toBe('Products');

    // 4 Add two products
    await inventoryPage.addBackpackToCart();
    await inventoryPage.addBikeLightToCart();

    // 5 Assert cart badge = 2
    await expect(await inventoryPage.getCartBadgeCount()).toBe('2');

    // 6 Go to cart
    await inventoryPage.goToCart();

    // 7 Assert Cart page
    await expect(page).toHaveURL(/cart\.html/);
    const cartPage = new CartPage(page);
    await expect(await cartPage.getPageTitle()).toBe('Your Cart');

    // 8 Assert two items in cart
    await expect(await cartPage.getCartItemCount()).toBe(2);

    // 9 Checkout
    await cartPage.clickCheckout();

    // 10 Checkout Step One
    await expect(page).toHaveURL(/checkout-step-one\.html/);
    const stepOnePage = new CheckoutStepOnePage(page);
    await expect(await stepOnePage.getPageTitle())
      .toBe('Checkout: Your Information');

    await stepOnePage.fillDetails('Test', 'User', '12345');

    //  Checkout Step Two
    await expect(page).toHaveURL(/checkout-step-two\.html/);
    const stepTwoPage = new CheckoutStepTwoPage(page);
    await expect(await stepTwoPage.getPageTitle())
      .toBe('Checkout: Overview');

    // Optional but good assertion
    const totalText = await stepTwoPage.getSummaryTotal();
    await expect(totalText).toContain('Total');

    //  Finish checkout
    await stepTwoPage.finishCheckout();

    //  Checkout Complete
    await expect(page).toHaveURL(/checkout-complete\.html/);
    const completePage = new CheckoutCompletePage(page);
    await expect(await completePage.getPageTitle())
      .toBe('Checkout: Complete!');
    await expect(await completePage.getCompleteMessage())
      .toContain('Thank you');
  });

});