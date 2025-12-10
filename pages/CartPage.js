export class CartPage { // המחלקה המייצגת את דף העגלה 
constructor(page) {
    this.page = page;

    this.cartItems = page.locator('.cart_item'); // זיהוי רשימת המוצרים בעגלה 
    this.checkoutButton = page.locator('#checkout'); // זיהוי כפתור המעבר לקופה 
}
async startCheckout() { // פונקציה לביצוע מעבר לקופה 
await this.checkoutButton.click();
}
async getCartItemCount() { // פונקציה שבודקת את מספר הפריטים הקיים בעגלה 
return await this.cartItems.count();
}
}