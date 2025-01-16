const { expect } = require("@playwright/test");

exports.LoginPage =
class LoginPage {

    constructor(page) {

        this.page= page;
        this.userInput= "//input[@name='username']";
        this.passwordInput= "//input[@name='password']";
        this.loginButton= "//button[normalize-space()='Login']";
        this.logo= "//img[@alt='company-branding']";
        this.errorText= '.oxd-alert-content-text';

    }

    async navigatetoLoginPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username, password){

        await this.page.locator(this.userInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    async invalidError() {
       const error= await this.page.locator(this.errorText).textContent();
       console.log(error)
    }
    
    async assertion1(){
        const logo= await this.page.locator(this.logo)
        await expect(logo).toBeVisible();
    }

    async assertionError() {

        expect(() => {
            throw new Error('Invalid Credentials');
          }).toThrowError();
    }
}