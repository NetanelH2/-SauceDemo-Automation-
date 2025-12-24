 export class InventoryPage {
  constructor(page) {
    this.page = page;
  }

  pageTitle = () => this.page.locator('[data-test="title"]');
  cartBadge = () => this.page.locator('[data-test="shopping-cart-badge"]');
  backpackAddToCartButton = () =>
    this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  bikeLightAddToCartButton = () =>
    this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  cartButton = () => this.page.locator('[data-test="shopping-cart-link"]');
}