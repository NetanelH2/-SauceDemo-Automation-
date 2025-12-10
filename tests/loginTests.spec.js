import { test, expect } from '@playwright/test'; // מייבאים את כלי הבדיקה 

import { LoginPage } from '../pages/LoginPage.js'; // מייבאים את הדף שבנינו 

import { USERS } from '../data/userData.js'; // מייבאים את הנתונים 

const positiveUsers = [  // רשימת משתמשים חיוביים 
    USERS.standard,
    USERS.problem,
    USERS.performance,
    USERS.visual
];

positiveUsers.forEach(user => { // לולאה שרצה על כל משתמש ברשימה 
    test(`Login with ${user.username}`, async ({ page }) => {
        const loginPage = new
        LoginPage(page);
        await loginPage.goto(); // ניווט לאתר ההתחברות 
        await loginPage.login(user.username,user.password); // התחברות עם פרטי המשתמש מהלולאה 
        await expect(page).toHaveURL(/inventory.html/); // אימות שההתחברות הצליחה 
    });
})

test(`Login with locked user`, async ({ page }) => {
    const loginPage = new
    LoginPage(page);
    await loginPage.goto();
    await loginPage.login(USERS.locked.username,USERS.locked.password);
    await expect(page.locator('[data-test="error"]')).toBeVisible();
});