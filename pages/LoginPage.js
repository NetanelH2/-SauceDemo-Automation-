export class LoginPage {  // ניהול דף ההתחברות 

    constructor(page) {
        this.page = page;

        this.usernameInput =
        page.locator('#user-name');
        this.passwordInput =
        page.locator('#password');
        this.loginbutton =
        page.locator('#login-button');
    }
    // פונקציה 1 נסיעה לאתר 
    async goto () {
        await this.page.goto('https://www.saucedemo.com/');
    }
    // פונקציה 2 ביצוע ההתחברות 
    async login(username, password) 
    {
        await
        this.usernameInput.fill(username);
        await
        this.passwordInput.fill(password);
        await
        this.loginbutton.click();
    }
}