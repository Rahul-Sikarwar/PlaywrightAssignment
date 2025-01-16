const { expect } = require("@playwright/test");

exports.DashboardPage = class DashboardPage {

    constructor(page) {

        this.page= page
        this.profileName= '.oxd-userdropdown-name';
        this.profileDrop= '.oxd-userdropdown-icon';
        this.logout= "//a[normalize-space()='Logout']"
        this.sidePanel= "//div[@class='oxd-sidepanel-body']//ul//a//span"
        this.dashText= "//h6[normalize-space()='Dashboard']";
        this.labelOption="//ul[@class='oxd-main-menu']//li"
    }


    async labelNameDisplay(){

        const labels= await this.page.$$(this.sidePanel)

        for (const label of labels)
        {
            const labelName= await label.textContent();
            console.log(labelName)
        }

    }

    async logoutFlow() {
        await this.page.locator(this.profileDrop).click()
        await this.page.locator(this.logout).click()
    }

    async assertion2(){
        const dash= await this.page.locator(this.dashText)
        await expect(dash).toHaveText('Dashboard')
    }

    async assertion3(){
        const name= await this.page.locator(this.profileName).textContent();
        await expect (await this.page.getByText(name)).toBeVisible();
    }

    async assertion4(){
        const total=await this.page.locator(this.labelOption);
        await expect(total).toHaveCount(12);
    }
}





