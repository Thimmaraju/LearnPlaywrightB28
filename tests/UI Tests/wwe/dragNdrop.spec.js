const { test, expect } = require('@playwright/test');


test('drag and drop- example13', async ({ page }) => {
    // Go to the page
    await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop');

    // await page.locator('#menu-fried-chicken').dragTo(await page.locator('#plate-items'))

    //  await page.locator('#menu-hamburger').dragTo(await page.locator('#plate-items'))

    //  await page.locator('#menu-ice-cream').dragTo(await page.locator('#plate-items'))

    // await page.waitForTimeout(5000)

    const sourceFriedChicken = await page.locator('#menu-fried-chicken');
    const sourceHamburger = await page.locator('#menu-hamburger');
    const sourceIceCream = await page.locator('#menu-ice-cream');

    const targetPlateItems = await page.locator('#plate-items');

    await sourceFriedChicken.dragTo(targetPlateItems);
    await sourceHamburger.dragTo(targetPlateItems);
    await sourceIceCream.dragTo(targetPlateItems);
    await page.waitForTimeout(5000)

})

