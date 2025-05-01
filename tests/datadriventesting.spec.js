
const { test, expect } = require('@playwright/test');
const { title } = require('process');



const creds = {

    username: "Admin",
    password: "admin123"
}

const jobtitles = {

     title1 : "SDET Engineer 1",
     title2 : "AI Engineer",
     title3 : "DATA Analyst 2",
     title4 : "bfhergfyu"
}


for(let title in jobtitles){

    test(`Verify Add job title with Mandatory fields - ${jobtitles[title]}`, async ({ page }) => {

        test.setTimeout(60000)
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
       
    
        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitles[title])
    
        await page.locator("//textarea[@placeholder='Type description here']").fill("nsdfbvubgefsvhb")
    
        await page.locator("//button[@type='submit']").click();
    
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
    
    
    });
  
}


