const {  test, expect } = require('@playwright/test');

test.describe('Automation - Working With Elements', () => {

  test('handle tabs - example 1', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/windows');

    const [newTab] = await Promise.all([
      page.waitForEvent('popup'),
      page.click('//a[normalize-space()="Click Here"]')
    ]);

    // console.log(newTab.url());
    // expect(await newTab.title()).toBe('New Window');

    const textvalue = await newTab.locator('.example>h3').textContent();

    console.log("Text on new page:", textvalue);

    await expect(await newTab.title()).toBe('New Window');

    await page.waitForTimeout(5000)
  });


  test('handle tabs -example 2***', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/windows');

    // await page.goBack() // history back page 

    // await page.goForward() // history forward 

    await page.click('//a[normalize-space()="Click Here"]')

    const newPagePromise = page.waitForEvent('popup');
    const newPage = await newPagePromise;
    await newPage.waitForLoadState();

   await expect(newPage.locator('.example>h3')).toHaveText("New Window")

    const textvalue = await newPage.locator('.example>h3').textContent();

    console.log("Text on new page:", textvalue);


    await page.waitForTimeout(5000)
  });


  test("flipkart - verify product display", async ({ page }) =>{

      await page.goto('https://www.flipkart.com/');

      await page.locator('input[name="q"]').fill("Iphone")

     await page.locator('input[name="q"]').press('Enter')


       const [newTab] = await Promise.all([
      page.waitForEvent('popup'),
        await page.locator("//div[text()='Apple iPhone 16 (Black, 128 GB)']").click()
    ]);

    await expect(newTab).toHaveURL(/apple-iphone-16-black-128-gb/)
   

    const nameofthePhone = await newTab.locator("._6EBuvT>span").textContent();

    console.log(nameofthePhone)

    await page.locator("//div[text()='Apple iPhone 13 (Midnight, 128 GB)']").click()

  })

})