import { test, expect } from '@playwright/test';
import { USERS } from '../data/userData.js';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage.js';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage.js';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage.js';

test('Sanity Test - End to End Purchase', async ({ page }) => { // אתחול כל הדפים שנשתמש בהם 
const loginPage = new 
LoginPage(page); 
const inventoryPage = new
InventoryPage(page)
const cartPage = new 
CartPage(page); 
const checkoutOne = new
CheckoutStepOnePage(page);
const checkoutTwo = new
CheckoutStepTwoPage(page);
const checkoutComplete = new
CheckoutCompletePage(page);

// התחברות למערכת 

await loginPage.goto();
await loginPage.login(USERS.standard.username, USERS.standard.password);

// הוספת מוצרים ומעבר לעגלה 

await inventoryPage.addItemsToCart();
await inventoryPage.gotoCart();

// וידוא שיש 2 מוצרים בעגלה ומעבר לקופה 

const itemsCount = await
cartPage.getCartItemCount();
expect(itemsCount).toBe(2); // בדיקה שיש 2 מוצרים 
await cartPage.startCheckout();

// מילוי פרטים אישיים 

await checkoutOne.fillDetails('Sean', 'Traskonov', '12345');
await checkoutTwo.finishCheckout(); // סיום ההזמנה לחיצה על סיום 

const message = await checkoutComplete.getCompleteMessage(); // בדיקה סופית וידוא שהופיעה הודעת ההצלחה 
expect(message).toBe('Thank you for your order!');
});