import { test, expect } from '@playwright/test';

test('record demo test', async ({ page }) => {
  // Start tracing
  await page.context().tracing.start({
    screenshots: true,  // Capture screenshots during the trace
    snapshots: true,    // Capture DOM snapshots during the trace
  });

  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(1000);

  await page.locator('[data-test="username"]').click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.waitForTimeout(1000);

  await page.locator('[data-test="password"]').click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.waitForTimeout(1000);

  // Wait for login button to be visible and click it
  const loginButton = await page.locator('[data-test="login-button"]');
  await loginButton.waitFor({ state: 'visible', timeout: 5000 });  // 5 seconds timeout
  await loginButton.click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="item-4-img-link"]').click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="add-to-cart"]').click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="checkout"]').click();
  await page.waitForTimeout(1000);

  await page.locator('[data-test="primary-header"] div').filter({ hasText: 'Swag Labs' }).first().click();
  await page.waitForTimeout(1000);

  // Stop tracing and save it
  await page.context().tracing.stop({
    path: 'trace.zip', // Path to save the trace file
  });
});
