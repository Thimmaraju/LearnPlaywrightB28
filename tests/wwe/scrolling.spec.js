const { test, expect } = require('@playwright/test');

test('scroll to specific element', async ({ page }) => {

    await page.goto("https://www.imdb.com/chart/top/");

    // let dJanagoMovieLink = await page.locator("//h3[contains(text(),'128. Hamilton')]");

    // await dJanagoMovieLink.scrollIntoViewIfNeeded();

    await page.locator("//h3[contains(text(),'128. Hamilton')]").scrollIntoViewIfNeeded()

    //await dJanagoMovieLink.click();

    await page.locator("//h3[contains(text(),'128. Hamilton')]").click()

    expect(await page.locator('h1 span').textContent()).toEqual('Hamilton')

});
