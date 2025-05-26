const { browser, test, expect } = require('@playwright/test');
test("Click one of the elements that is visible out of two",{tag:["@smoke", "@raju"]}, async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/disappearing_elements");

    const contactus = page.getByRole("link", { name: "Contact Us" });
    const portfolio = page.getByRole("link", { name: "Portfolio" });
    const gallery = page.getByRole("link", { name: "Gallery" });

    if (await gallery.isVisible()) {
        await gallery.click();
        console.log("clicked on Gallery")
    } 
    
    else if (await portfolio.isVisible()) {
        await portfolio.click();
        console.log("clicked on Portfolio")
    }


    await expect(page).toHaveURL(/.*gallery|.*portfolio/);

   
});