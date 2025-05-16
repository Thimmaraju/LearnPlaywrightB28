const { test, expect } = require('@playwright/test');

exports.addEmployeePage = class addEmployeePage {

    constructor(page) {

        this.page = page

        this.addEmployeeSubmenu = page.locator("//a[text()='Add Employee']")
        this.firstNameInput = page.getByPlaceholder("First Name")
        this.lastNameInput = page.getByPlaceholder("Last Name")
        this.saveButton = page.locator('button[type="submit"]')
        this.successmessage = page.locator("//h6[text()='Personal Details']")

    }

    async addEmployee(firstname, lastname){

       await this.addEmployeeSubmenu.click()
       await this.firstNameInput.fill(firstname)
       await this.lastNameInput.fill(lastname)
       await this.saveButton.click()
    }

    async verifyEmployeecreated(){
   
        await expect(this.successmessage).toBeVisible()

    }

}