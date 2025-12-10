export class CheckoutStepOnePage //מחלקה המייצגת את דף מילוי הפרטים האישיים 
{
    constructor(page) {
        this.page = page;

        this.firstName = page.locator('#first-name'); // זיהוי שדה השם הפרטי 
        this.lastName = page.locator('#last-name'); // זיהוי שדה שם המשפחה 
        this.postalCode = page.locator('#postal-code'); // זיהוי שדה המיקוד 
this.continueButton = page.locator('#continue'); // זיהוי כפתור ההמשך 
    }
    async fillDetails(firstName, lastName, zip) {
        await this.firstName.fill(firstName); // למלא את שדה השם הפרטי 
        await this.lastName.fill(lastName); // למלא את שדה שם המשפחה 
        await this.postalCode.fill(zip); // למלא את שדה המיקוד 
        await this.continueButton.click(); // ללחוץ על כפתור ההמשך 
    }
}