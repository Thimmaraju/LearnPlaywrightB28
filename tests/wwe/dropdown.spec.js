
const { test, expect } = require('@playwright/test');


test("Working with dropdowns - example", async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    //text

    //await page.locator('#country').selectOption("Egypt")
    //or 
    //await page.locator('#country').selectOption({label : "Egypt"})

    //Value  - Attribute 

    //await page.locator('#country').selectOption("101")  //Iran
    //or
   // await page.locator('#country').selectOption({value : "102"})

    //index

    //await page.locator('#country').selectOption(4) -- this will not work 

     await page.locator('#country').selectOption({index : 4})

 
 
     await expect.soft(page.locator("#country>option")).toHaveCount(200) // Assertions

      //expect.soft()

   // const options = await page.$$('#country>option') // array

    //console.log(options.length)

    const dropdown = page.locator('#country'); // Use the correct selector for the dropdown

    // // Get all option elements within the dropdown
    const options = await dropdown.locator('option').allTextContents();
    console.log(options)
    await page.waitForTimeout(5000)

})



//hard assertion  

//expect().

//soft assrtion

//expect.soft()