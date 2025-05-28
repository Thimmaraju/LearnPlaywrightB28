import { test, expect } from '@playwright/test';

test('Verify clicking on Hidden element ', async ({ page }) => {

    await page.goto("https://playwright.dev/")

    await page.locator('a[href="/python/"]').click({force:true}) 

    //await expect(page.locator('a[href="/java/docs/input"]')).toBeVisible()

    await expect(page.locator('a[href="/java/"]')).toBeAttached()
 


})


test.only('Verify clicking on Edit box element ', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('input[name="username"]').type("Admin")

    //await page.locator('input[name="username"]').clear() // 

    //await page.locator('input[name="username"]').pressSequentially("Bharghav", {delay :1000}) // all the letters at one go it set the value 

    await page.waitForTimeout(2000)
    //await page.locator('input[name="username"]').pressSequentially("Admin", {delay: 2000}) // will type the leteers on by one 


    //clear()

//    await page.locator('input[name="username"]').clear()



//await page.locator('input[name="username"]').press("Shift+A+Backspace")

 await page.locator('input[name="password"]').fill("admin123")


//     await page.waitForTimeout(2000)


 await page.locator('input[name="password"]').press('Enter')

    //.press()

    // its stimulate keybaord press 



})