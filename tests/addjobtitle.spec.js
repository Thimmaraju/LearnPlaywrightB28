const { test, expect } = require('@playwright/test');

import data from "../testdata/login.json"
import jobtitledata from "../testdata/addjobtitle.json"


let page

const creds = {

    username: "Admin",
    password: "admin123"
}

test.beforeEach(async ({browser}) => {

   page = await browser.newPage();

    //    test.setTimeout(60000)
    // Navigate to the application
    await page.goto('/web/index.php/auth/login');

    console.log("Launching the application")
    // Enter username and password
    await page.locator("input[name='username']").fill(creds.username)
    console.log("Entering username")

    await page.locator("input[type='password']").fill(creds.password)
    console.log("Entering password")

    //click on login button

    await page.locator("button[type='submit']").click()
    console.log("Clicking on login button")

    // Verify that the user is redirected to the dashboard page

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index', { timeout: 15000 });

    await expect(page.locator('ul[class="oxd-main-menu"]')).toBeVisible()
    // click on the admin module
    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

    //clcik on the Job

    await page.locator("//li[contains(.,'Job')]").click();

    //click on the job title

    await page.locator("//a[normalize-space(text())='Job Titles']").click();

    // click on the add button 

    await page.locator("//button[contains(.,'Add')]").click();


    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle');


});


test.afterEach(async () => {

    // Close the browser
    await page.close();
    console.log("Closing the browser")

});

test('Verify Add job title with Mandatory fields', {tag : "@smoke"},async () => {

    const random5Char = Math.random().toString(36).substring(2, 7); // 5 chars 

    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitledata.jobTitle + random5Char)

    await page.locator("//textarea[@placeholder='Type description here']").fill(jobtitledata.jobDescription)

    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")


});


test.skip('Verify Add job title fileds max chars limit', async () => {


    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("gtrkjhhutriughtrkjgk  hjdefbgijrtiugjiotrhg kjnhtrhjgiutrh kjniubvhrtktjnbdfsjgbherguneriugiuerhtgkjherjgnerkjvnjherhntjhgtrjhbgjtrhbguhrekjgherkjgbkjerhgyuh4ihger,mngjefjhgiu")

    await expect(page.locator('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')).toBeVisible()



});
