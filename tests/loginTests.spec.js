import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { USERS, BASE_URL } from '../data/userData';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(BASE_URL);
  });

  // Positive Login Tests
  const positiveUsers = [
    { key: 'standard', label: 'standard_user' },
    { key: 'problem', label: 'problem_user' },
    { key: 'performance', label: 'performance_glitch_user' },
    { key: 'error', label: 'error_user' },
    { key: 'visual', label: 'visual_user' },
  ];

  for (const user of positiveUsers) {
    test(`Login success - ${user.label}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.login(
        USERS[user.key].username,
        USERS[user.key].password
      );

      await expect(page).toHaveURL(/.*inventory\.html/);
      await expect(page.locator('.title')).toHaveText('Products');
    });
  }

  // Locked User Negative
  test('Login blocked - locked_out_user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      USERS.locked.username,
      USERS.locked.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('locked out');
    await expect(page).not.toHaveURL(/inventory\.html/);
  });

  // Negative Login Cases
  const negativeCases = [
    {
      name: 'valid username + wrong password',
      username: USERS.standard.username,
      password: 'wrong_password',
      errorText: 'do not match',
    },
    {
      name: 'wrong username + valid password',
      username: 'wrong_user',
      password: USERS.standard.password,
      errorText: 'do not match',
    },
    {
        name: 'wrong username + wrong password',
        username: 'wrong_user',
        password: 'wrong_password',
        errorText: 'do not match'
    },
    {
      name: 'empty username',
      username: '',
      password: USERS.standard.password,
      errorText: 'Username is required',
    },
    {
      name: 'empty password',
      username: USERS.standard.username,
      password: '',
      errorText: 'Password is required',
    },
    {
      name: 'empty username and password',
      username: '',
      password: '',
      errorText: 'Username is required',
    },
  ];

  for (const testCase of negativeCases) {
    test(`Login fails - ${testCase.name}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.login(testCase.username, testCase.password);

      await expect(loginPage.errorMessage).toBeVisible();
      await expect(loginPage.errorMessage).toContainText(testCase.errorText);
      await expect(page).not.toHaveURL(/inventory\.html/);
    });
  }
});