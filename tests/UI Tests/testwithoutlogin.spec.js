import { test, expect } from '@playwright/test';

import jobtitledata from "../../testdata/addjobtitle.json"
import employeedetails from "../../testdata/addemployee.json"



test.describe('Validate Orange HRM Login functionality with SessionStorage', () => {



    test('Add Employee ', { tag: "@smoke" }, async ({ page }) => {


        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
        await page.getByRole('textbox', { name: 'First Name' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).fill(employeedetails.firstname);
        await page.getByRole('textbox', { name: 'Last Name' }).click();
        await page.getByRole('textbox', { name: 'Last Name' }).fill(employeedetails.lastname);
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

    });


    test('Add job title ', { tag: "@smoke" }, async ({ page }) => {


        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")
        const random5Char = Math.random().toString(36).substring(2, 7); // 5 chars 

        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitledata.jobTitle + random5Char)

        await page.locator("//textarea[@placeholder='Type description here']").fill(jobtitledata.jobDescription)

        await page.locator('input[type="file"]').setInputFiles("./testdata/files/Gemini_Generated_Image.png")

        await page.locator("//button[@type='submit']").click();

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")





    });

})