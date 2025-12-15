import {expect, test} from '@playwright/test'
import {BASE_URL, URLS} from '../data/urls.js'
import {USERS} from '../data/userData.js'
import {InventoryPage} from '../pages/InventoryPage.js'
import {LoginPage} from '../pages/LoginPage.js'

test.describe('Positive Login Tests', () => {
  Object.values(USERS)
    .filter((user) => user.username !== 'locked_out_user')
    .forEach((user) => {
      test(`Login success - ${user.username}`, async ({page}) => {
        const loginPage = new LoginPage(page)
        const inventoryPage = new InventoryPage(page)
        await loginPage.navigate(BASE_URL)
        await loginPage.login(user.username, user.password)
        await expect(page).toHaveURL(URLS.INVENTORY)
        await expect(inventoryPage.pageTitle).toHaveText('Products')
      })
    })
})
