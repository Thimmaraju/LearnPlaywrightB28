import { test, expect } from '@playwright/test';
import logindata from "../testdata/login.json"


test("Verify login with valid credentials", async ({ page }) => {

   await page.goto("/web/index.php/auth/login")

   await page.locator("input[name='username']").fill(logindata.username)

   await page.locator("input[type='password']").fill(logindata.password)

   await page.locator("button[type='submit']").click()

   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');


  })


   test("Verify login with valid username and Invalid password", async ({ page }) => {

      await page.goto("/web/index.php/auth/login")

      await page.locator("input[name='username']").fill("Admin")

      await page.locator("input[type='password']").fill("frhewuyfhyu3")

      await page.locator("button[type='submit']").click()

      await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

      await page.waitForTimeout(5000)

      await page.close()
   })


   test("Verify login with invalid username and valid password", async ({ page }) => {

      await page.goto("/web/index.php/auth/login")

      await page.locator("input[name='username']").fill("erkghiuuhjtr")

      await page.locator("input[type='password']").fill("admin123")

      await page.locator("button[type='submit']").click()

      await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

      //await page.close()
   })


   test("Verify login with invalid username and invalid password", async ({ page }) => {

      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

      await page.locator("input[name='username']").fill("erkghiuuhjtr")

      await page.locator("input[type='password']").fill("admetjguthin123")

      await page.locator("button[type='submit']").click()

      await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

      //or 

      await expect(page.locator("(//p[contains(@class,'oxd-text oxd-text--p')])[1]")).toHaveText('Invalid credentials');

      //await page.close()
   })