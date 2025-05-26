import { test, expect } from '@playwright/test';


test("Based on BrowserName run different script", async ({ page, browserName }) => {

    switch (browserName) {
        case "chromium":

            await page.goto("https://www.flipkart.com/");
            await page.close()

            break;

        case "firefox":

            await page.goto("https://www.amazon.in/");
            await page.close()

            break;
        case "webkit":

            await page.goto("https://www.myntra.com/");
            await page.close()

            break;

    }


})



test("Based on BrowserName run different script2", async ({ page, browserName }) => {

    if (browserName == "chromium") {


        await page.goto("https://www.flipkart.com/");
        await page.close()

    }
    else if (browserName == "firefox") {

        await page.goto("https://www.amazon.in/");
        await page.close()

    }

    else if (browserName == "webkit") {

        await page.goto("https://www.myntra.com/");
        await page.close()


    }


})