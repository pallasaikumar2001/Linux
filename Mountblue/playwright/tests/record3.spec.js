const { test, expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');

test('record3', async () => {
  const browser = await chromium.launch({
    headless: false
  });

  // Create a new context and page first
  const context = await browser.newContext();
  const page = await context.newPage();

  // Start tracing after the page is created
  await context.tracing.start({
    screenshots: true,  // Capture screenshots during the trace
    snapshots: true,    // Capture DOM snapshots during the trace
  });

  // Perform actions
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-linkfdbfdhfvf"]').click();

  // Stop tracing and save it to trace.zip
  await context.tracing.stop({
    path: 'trace.zip', // Path to save the trace file
  });

  // Cleanup and close the context and browser
  await context.close();
  await browser.close();
});
