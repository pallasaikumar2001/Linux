const { test, expect } = require('@playwright/test');

test('logintest', async ({ browser }) => {
  console.log('Starting tracing...');
  
  // Launch a browser context
  const context = await browser.newContext();
  
  // Start tracing
  await context.tracing.start({
    screenshots: true,  // Capture screenshots during the trace
    snapshots: true,    // Capture DOM snapshots during the trace
  });

  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  
  // Fixed the typo in the 'login-button' locator
  await page.locator('[data-test="login-button"]').click();
  
  await page.locator('[data-test="item-4-img-link"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  console.log('Stopping tracing and saving trace...');
  
  // Stop tracing and save it
  await context.tracing.stop({
    path: 'trace.zip',
  });

  // Clean up
  await context.close();
});
