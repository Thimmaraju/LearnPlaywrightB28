
const { test, expect } = require('@playwright/test');
test('Working with Shadow DOM', async ({ page }) => {

    await page.goto('http://watir.com/examples/shadow_dom.html')

    await page.locator('input[type="text"]').fill("Raju")
    await page.waitForTimeout(5000)

})

test('Working with Shadow DOM2', async ({ page }) => {

    await page.goto('https://books-pwakit.appspot.com/')
    await page.locator('#input').fill('Science')

    await page.keyboard.press('Enter')

    await expect(page.locator('text=Before Big Science')).toBeVisible()

    await page.waitForTimeout(5000)

   // await page.reload()

    await page.keyboard.press('F5')

    await page.goBack()

    await page.waitForTimeout(5000)

    await page.goForward()

})