const { test, expect } = require('@playwright/test');

test('Working with check box', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    // await page.locator('input[name^="chk_altemail"]').check()

    // await expect(page.locator('input[name^="chk_altemail"]')).toBeChecked()

    await page.waitForTimeout(2000) // Halt the execution for 2 sec 

    // await page.locator('//input[@type="checkbox"]').uncheck()

    // await expect(page.locator('//input[@type="checkbox"]')).not.toBeChecked()

    const ischecked = await page.locator('//input[@type="checkbox"]').isChecked()

     console.log(ischecked)

    if(ischecked){

        await page.locator('//input[@type="checkbox"]').check()

        await expect(page.locator('input[name^="chk_altemail"]')).toBeChecked()

    }

    await page.waitForTimeout(2000)
});

test('Working with check box - example 2', async ({ page }) => {

    await page.goto('/web/index.php/auth/login');

    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']").click()

    await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()

    const checkBoxes = ["input[value='3']", "input[value='4']", "input[value='8']"] // specific checkboxes 


    for (let checkbox of checkBoxes) {
        const isChecked = await page.locator(checkbox).isChecked();

        // Check the checkbox if it's not already checked
        if (!isChecked) {
            await page.locator(checkbox).check({ force: true });
        }
    }

    await page.waitForTimeout(5000)

})

test('Working with check box - example 3', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/radio.html');


    const checkBoxes = await page.$$('[type="checkbox"]');

    for (let checkbox of checkBoxes) {

        const isChecked = await checkbox.isChecked(); // false 

        // Check the checkbox if it's not already checked
        if (!isChecked) {
            await checkbox.check({ force: true });
        }
    }

    await page.waitForTimeout(5000)

})

// $$ - will save all matxhing locators to a array
// $  - will work with first matching element 

// const checkboxes = ['input[value="0"]', 'input[value="2"]', 'input[value="5"]']

// for (let checkbox of checkBoxes) {

//     const isChecked = await checkbox.isChecked(); // false 

//     // Check the checkbox if it's not already checked
//     if (!isChecked) {
//         await checkbox.check({ force: true });
//     }
// }


test.only("radio", async ({page}) =>{

    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")


    await expect(page.locator('input[value="m"]')).toBeChecked() // already male is selected or not 
   
    await page.locator('input[value="f"]').check()
    
    await expect(page.locator('input[value="f"]')).toBeChecked() // now female should be checked 
    
    await expect(page.locator('input[value="m"]')).not.toBeChecked() // male should be unchecked
})