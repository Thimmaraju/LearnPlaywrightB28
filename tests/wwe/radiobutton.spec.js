const { test, expect } = require('@playwright/test');

test('Working with Radio button - example', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    await expect(page.locator('input[value="m"]')).toBeChecked()
    await expect(page.locator('input[value="f"]')).not.toBeChecked()

    await page.locator('input[value="f"]').check()

    await expect(page.locator('input[value="m"]')).not.toBeChecked()
    await expect(page.locator('input[value="f"]')).toBeChecked()

    const isChecked = await page.locator('input[value="f"]').isChecked()

    console.log(isChecked)

    await page.waitForTimeout(5000)

})