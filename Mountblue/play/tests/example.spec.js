const { test, expect } = require('@playwright/test');

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle(/Playwright/);
});
