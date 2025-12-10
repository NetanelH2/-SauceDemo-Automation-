export class CheckoutStepTwoPage { // מחלקה המייצגת את דף סיכום ההזמנה 
constructor(page) {
    this.page = page;

    this.finishButton = page.locator('#finish'); // זיהוי כפתור הסיום 
this.summaryTotal = page.locator('.summary_total_label'); // זיהוי הטקסט של המחיר הסופי לצורך אימות 
}
async finishCheckout() { //  פונקציה שמסיימת את ההזמנה 
await this.finishButton.click(); // לחיצה על כפתור הסיום 
}
}