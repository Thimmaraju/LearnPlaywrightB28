const { test, expect } = require('@playwright/test');


exports.loginPage = class loginPage {

     constructor(page){

        this.page= page
        this.logo = page.locator('img[alt="company-branding"]')
        this.usernameInput = page.locator('//input[@name="username"]')
        this.passwordInput = page.locator('input[name="password"]')
        this.loginButton = page.locator('button[type="submit"]')
        this.loginErrorMessage = page.getByText("Invalid credentials")

     }

     async launchApplication(){

         await this.page.goto("/web/index.php/auth/login")
     }

     async verifyLogoVisibility(){

        await expect(this.logo).toBeVisible()
     }

     async loginwithCreds(username, password){

        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
     }

    async loginwithCreds(username, password){

        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
     }


     async verifyErrorMessage(){

        await expect(this.loginErrorMessage).toBeVisible()
     }

     async verifyLoginSuccess(){

        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
     }

}