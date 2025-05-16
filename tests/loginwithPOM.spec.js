const { test, expect } = require('@playwright/test');

import { loginPage } from "../pageObjects/loginpage.po"

import logindata from "../testdata/login.json"


let page;

let login;

test.beforeEach(async ({browser})=>{

    page = await browser.newPage()

   login = new loginPage(page)

  await  login.launchApplication()

  await login.verifyLogoVisibility()

})

test("Verify login with valid credentials", async () =>{
  
    await login.loginwithCreds(logindata.username, logindata.password)

    await login.verifyLoginSuccess()
    
})


test("Verify login with valid username and Invalid Password", async () =>{
  
    await login.loginwithCreds(logindata.username, logindata.wrongpassword)

    await login.verifyErrorMessage()
    
})


test("Verify login with Invalid username and Valid Password", async () =>{
  
    await login.loginwithCreds(logindata.wrongusername, logindata.password)

    await login.verifyErrorMessage()
    
})

test("Verify login with Invalid username and InValid Password", async () =>{
  
    await login.loginwithCreds(logindata.wrongusername, logindata.wrongpassword)

    await login.verifyErrorMessage()
    
})