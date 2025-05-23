const { browser, test, expect } = require('@playwright/test');
const fs = require('fs')
const path = require('path');
test.describe('Automation - Working With Elements', () => {

    test('Working with Iframes', async ({ page }) => {

        await page.goto('https://jqueryui.com/checkboxradio/')
        const checkbox = await page.frameLocator('iframe[class="demo-frame"]').locator('label[for="checkbox-1"]').click()

        //await checkbox.click()
        await page.waitForTimeout(5000)

    })


})