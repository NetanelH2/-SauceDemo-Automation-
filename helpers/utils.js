import {expect} from '@playwright/test'

export async function verifyElementIsVisible(locator) {
  await expect(locator).toBeVisible()
}
