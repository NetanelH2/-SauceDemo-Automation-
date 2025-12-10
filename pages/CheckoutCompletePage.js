export class CheckoutCompletePage { // מחלקה המייצגת את דף הסיום 
constructor(page) {
    this.page = page;

    this.completeHeader = page.locator('.complete-header'); // זיהוי כותרת תודה על ההזמנה 
    this.backHomeButton = page.locator('#back-to-products'); // זיהוי הכפתור לחזרה הביתה 
}
async getCompleteMessage() { // פונקציה שמחזירה את הטקסט של הודעת ההצלחה 
    return await this.completeHeader.innerText(); // שולף את הטקסט כדי שנוכל לבדוק אותו 
}
}