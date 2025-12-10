export class InventoryPage { // מחלקה המייצגת את דף המוצרים 
    constructor(page) {
        this.page = page;

        this.backpackAddBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'); // הוספה של התיק 

        this.bikeLightAddBtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]'); // הוספה של הפנס 

        this.cartIcon = page.locator('[data-test="shopping-cart-link"]'); // לחיצה על העגלה 
    }
    async addItemsToCart() {  // הוספת פריטים לעגלה 
        await this.backpackAddBtn.click(); // ביצוע לחיצה על התיק 
        await this.bikeLightAddBtn.click(); // ביצוע לחיצה על הפנס 
        }
        async gotoCart() { // מעבר לקופה 
await this.cartIcon.click(); // לחיצה על העגלה למעבר לדף הבא 
        }
    }



