const { test, expect } = require('@playwright/test'); 
const { chromium } = require('@playwright/test');

test('record demo2', async () => {
  const browser = await chromium.launch({
    headless: false
  });
   // Start tracing
   await page.context().tracing.start({
    screenshots: true,  // Capture screenshots during the trace
    snapshots: true,    // Capture DOM snapshots during the trace
  });

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  // Cleanup and close the context and browser
  await page.context().tracing.stop({
    path: 'trace1.zip', // Path to save the trace file
  });
  await context.close();
  await browser.close();
});
