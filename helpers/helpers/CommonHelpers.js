class CommonHelpers {
  static async waitForPageLoad(page) {
    await page.waitForLoadState('networkidle');
  }

  static generateRandomString(length = 10) {
    return Math.random().toString(36).substring(2, length + 2);
  }
}

module.exports = { CommonHelpers };
