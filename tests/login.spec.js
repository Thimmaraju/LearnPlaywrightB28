import { test, expect } from '@playwright/test';
import logindata from "../testdata/login.json"


const logininputs = ["Admin", "admin123", "ekjnfiuhew", "ebfuhrewiuwbhf"]



test("Verify login with valid credentials", async ({ page }) => {

   await page.goto("/web/index.php/auth/login")

   await page.locator("input[name='username']").fill(logininputs[0])

   await page.locator("input[type='password']").fill(logininputs[1])

   await page.locator("button[type='submit']").click()

   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');


})


test.only("Verify login with valid username and Invalid password", async ({ page }) => {

   await page.goto("/web/index.php/auth/login")

   await page.locator("input[name='username']").fill(logininputs[0])

   await page.locator("input[type='password']").fill(logininputs[3])

   await page.locator("button[type='submit']").click()

   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

   await page.waitForTimeout(5000)

   await page.close()
})


test("Verify login with invalid username and valid password", async ({ page }) => {


   const wrongusername = "brfjb"
   const passwrod = "admin123"
   await page.goto("/web/index.php/auth/login")

   await page.locator("input[name='username']").fill(wrongusername)

   await page.locator("input[type='password']").fill(passwrod)

   await page.locator("button[type='submit']").click()

   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

   //await page.close()
})


test("Verify login with invalid username and invalid password", async ({ page }) => {

   const logincreds = ["ehfvbherwbfv", "fvuybeffuvbeu"]

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   await page.locator("input[name='username']").fill(logincreds[0])

   await page.waitForTimeout(5000)

   await page.locator("input[type='password']").fill(logincreds[1])

   await page.waitForTimeout(30000)


   await page.locator("button[type='submit']").click()

   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

   //or 

   await expect(page.locator("(//p[contains(@class,'oxd-text oxd-text--p')])[1]")).toHaveText('Invalid credentials');

   //await page.close()
})