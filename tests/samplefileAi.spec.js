const { test, expect } = require('@playwright/test');

test.describe('Login Tests', () => {
    test('Working with text boxes', async ({ page }) => {

        await page.goto("https://demoqa.com/text-box")  
        await page.getByPlaceholder('Full Name').click();
        await page.getByPlaceholder('Full Name').fill('John Doe');
        await page.getByPlaceholder('Full Name').press('Tab');
        await page.getByPlaceholder('name@example.com').click();
        await page.getByPlaceholder('name@example.com').fill('raju@gmail.com');
        await page.getByPlaceholder('name@example.com').press('Tab');
        await page.getByPlaceholder('Current Address').click();     
        await page.getByPlaceholder('Current Address').fill('123 Main St');
        await page.getByPlaceholder('Current Address').press('Tab');
        await page.locator('#permanentAddress').click();
        await page.locator('#permanentAddress').fill('456 Elm St');
        await page.locator('#permanentAddress').press('Tab');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByText('Name:John Doe')).toBeVisible()

    
    });

    test.only('create redif account', async ({ page }) => {
        await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
        await page.getByPlaceholder('Enter your full name').click();    
        await page.getByPlaceholder('Enter your full name').fill('John Doe');
        await page.getByPlaceholder('Enter your full name').press('Tab');
        await page.getByPlaceholder('Enter Rediffmail ID').click();
        await page.getByPlaceholder('Enter Rediffmail ID').fill('rajugmail');
        await page.getByPlaceholder('Enter Rediffmail ID').press('Tab');
        await page.getByPlaceholder('Enter password').click();
        await page.getByPlaceholder('Enter password').fill('password123');
        await page.getByPlaceholder('Enter password').press('Tab');     
        await page.getByPlaceholder('Retype password').click();
        await page.getByPlaceholder('Retype password').fill('password123');
        await page.getByPlaceholder('Retype password').press('Tab');

        
    });

    test('should require username and password', async ({ page }) => {
        await page.goto('https://example.com/login');
        await page.click('button[type="submit"]');
        await expect(page.locator('text=Username is required')).toBeVisible();
        await expect(page.locator('text=Password is required')).toBeVisible();
    });
});