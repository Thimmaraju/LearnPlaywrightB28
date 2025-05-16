const { test, expect } = require('@playwright/test');

import { dashBoardPage } from '../pageObjects/dashBaordPage.po';
import { loginPage } from '../pageObjects/loginpage.po';
import { addEmployeePage } from "../pageObjects/addEmployeePage.po"

import logindata from "../testdata/login.json"
import addemployeedata from "../testdata/addemployee.json"

test("Verify Add Employee", async ({ page }) => {

    const login = new loginPage(page)
    const dashborad = new dashBoardPage(page)
    const addemp = new addEmployeePage(page)

    await login.launchApplication()
    await login.loginwithCreds(logindata.username, logindata.password)
    await login.verifyLoginSuccess()
    await dashborad.clickonPIM()
    await addemp.addEmployee(addemployeedata.firstname, addemployeedata.lastname)
    await addemp.verifyEmployeecreated()

})