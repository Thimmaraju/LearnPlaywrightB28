const { browser, test, expect, chromium } = require('@playwright/test');

test.describe('Automation - Working With Elements', () => {

  test("browse context test", async () => {
    const browser = await chromium.launch({ headless: false });
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();


    const page = await context1.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("input[type='password']").press("Enter")

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')



    const page2 = await context2.newPage();
    await page2.goto('https://opensource-demo.orangehrmlive.com/');

    await page2.goto('https://opensource-demo.orangehrmlive.com/');
    await page2.locator('input[name="username"]').fill("rajug")
    await page2.locator("input[type='password']").fill("Raju@1234")
    await page2.locator("input[type='password']").press("Enter")

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')



    console.log(browser.contexts().length);

    await page.waitForTimeout(10000)

    await browser.close();
  });

})