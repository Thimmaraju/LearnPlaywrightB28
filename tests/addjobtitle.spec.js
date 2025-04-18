const { test, expect } = require('@playwright/test');

import data from "../testdata/login.json"
import jobtitledata from "../testdata/addjobtitle.json"




    test('Verify Add job title with Mandatory fields', async ({ page }) => {
        // Navigate to the application
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        console.log("Launching the application")
        // Enter username and password
        await page.locator("input[name='username']").fill(data.username)
        console.log("Entering username")

        await page.locator("input[type='password']").fill(data.password)
        console.log("Entering password")

        //click on login button
     
        await page.locator("button[type='submit']").click()
        console.log("Clicking on login button")

        // Verify that the user is redirected to the dashboard page
     
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

        // click on the admin module
        await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

        //clcik on the Job
        
        await page.locator("//li[contains(.,'Job')]").click();

        //click on the job title

        await page.locator("//a[normalize-space(text())='Job Titles']").click();

       // click on the add button 

        await page.locator("//button[contains(.,'Add')]").click();


        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle');

        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitledata.jobTitle)

        await page.locator("//textarea[@placeholder='Type description here']").fill(jobtitledata.jobDescription)

        await page.locator("//button[@type='submit']").click();

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

      
    });
