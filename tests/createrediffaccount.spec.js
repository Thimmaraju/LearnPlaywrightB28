import { test, expect } from '@playwright/test';

test("Verify Create a Reddif Email account ", async ({page})=>{

    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")

    await page.locator("input[placeholder='Enter your full name']").fill("G Thimmaraju")

    await page.locator("input[placeholder='Enter Rediffmail ID']").fill("rajutester")

    await page.locator("#newpasswd").fill("Raju@1234")

    await page.locator("#newpasswd1").fill("Raju@1234")

    await page.locator('select.day').selectOption("10")

    await page.locator('select.middle.month').selectOption("AUG")

    await page.locator("select.year").selectOption("1992")

    await page.locator('div#div_city>div>select').selectOption("Aurangabad")
 
})