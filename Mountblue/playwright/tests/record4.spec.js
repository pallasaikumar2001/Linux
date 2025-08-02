const { test, expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');

test('record4', async () => {
  // Increase the timeout to 60 seconds
  test.setTimeout(60000);  // Set the timeout to 60 seconds

  console.log('Launching browser...');
  const browser = await chromium.launch({
    headless: false  // Run in non-headless mode to watch the test execution
  });

  console.log('Creating a new context and page...');
  // Create a new context and page
  const context = await browser.newContext();
  const page = await context.newPage();

  // Start tracing
  console.log('Starting tracing...');
  await context.tracing.start({
    screenshots: true,  // Capture screenshots during the trace
    snapshots: true,    // Capture DOM snapshots during the trace
  });

  console.log('Navigating to the website...');
  // Perform actions
  await page.goto('https://www.saucedemo.com/');
  console.log('Page loaded.');

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-buttonhdjkg"]').click();
  
  // Wait for add-to-cart button to be available
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').waitFor();
  console.log('Adding item to cart...');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Wait for shopping cart link to be available
  await page.locator('[data-test="shopping-cart-link"]').waitFor();
  console.log('Going to shopping cart...');
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Wait for menu button and click
  await page.getByRole('button', { name: 'Open Menu' }).waitFor();
  console.log('Opening menu...');
  await page.getByRole('button', { name: 'Open Menu' }).click();

  // Wait for logout button and click
  await page.locator('[data-test="logout-sidebar-link"]').waitFor();
  console.log('Logging out...');
  await page.locator('[data-test="logout-sidebar-link"]').click();

  // Stop tracing and save the trace to a zip file
  console.log('Stopping tracing and saving trace...');
  await context.tracing.stop({
    path: 'trace4.zip',  // Save the trace file
  });

  // Cleanup and close context and browser
  await context.close();
  await browser.close();

  console.log('Test completed successfully.');
});
