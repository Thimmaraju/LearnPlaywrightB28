import { test, expect } from '@playwright/test';

test.describe('Add job title tests', () => {
  for (let i = 0; i <= 10; i++) {
    test(`Verify Add job title with Mandatory fields - Test ${i}`, async ({ page }) => {
      const random5Char = Math.random().toString(36).substring(2, 7);
      test.setTimeout(60000);

      await page.goto('/web/index.php/auth/login');
      await page.locator("input[name='username']").fill("Admin");
      await page.locator("input[type='password']").fill("admin123");
      await page.locator("button[type='submit']").click();
      await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

      await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
      await page.locator("//li[contains(.,'Job')]").click();
      await page.locator("//a[normalize-space(text())='Job Titles']").click();
      await page.locator("//button[contains(.,'Add')]").click();

      await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle');
      await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(random5Char);
      await page.locator("//textarea[@placeholder='Type description here']").fill("Test job description");
      await page.locator("//button[@type='submit']").click();

      await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList");
    });
  }
});
