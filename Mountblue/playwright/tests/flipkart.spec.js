const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');
const path = require('path');

let context
let page
test.beforeAll(async({browser})=>{
  context = await browser.newContext();
  
  await context.tracing.start({
    screenshots: true,
    snapshots: true,
  })
  
  page = await context.newPage();

})

test('flipkart', async () => {
  test.setTimeout(60000);
  const browser = await chromium.launch({
    headless: false
  });

  await page.goto('https://www.flipkart.com/');
  
  await expect(page).toHaveTitle(/Online Shopping Site/)

  await page.getByLabel('Mobiles').click();

  await page.getByRole('link', { name: 'Oppo k12x Oppo k12x' }).click();

  const page1Promise = page.waitForEvent('popup');

  await page.getByRole('link', { name: 'OPPO K12x 5G with 45W SUPERVOOC Charger In-The-Box (Feather Pink, 128 GB) Add' }).click();

  const page1 = await page1Promise;

  await page1.getByRole('button', { name: 'Add to cart' }).click();

  await page1.goto('https://www.flipkart.com/oppo-k12x-5g-45w-supervooc-charger-in-the-box-feather-pink-128-gb/p/itma30cb38861d4c?pid=MOBH4GBFXAJPXAHQ&lid=LSTMOBH4GBFXAJPXAHQP94XCS&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=CLP_BannerX3&fm=organic&iid=e1b2df08-876a-4a02-a34b-5ccb268780ef.MOBH4GBFXAJPXAHQ.SEARCH&ppt=clp&ppn=mobile-phones-store&ssid=xedrbsykk00000001736485114840');

  await page1.close();

  await page.goto('https://www.flipkart.com/');

  await context.tracing.stop({
    path: 'fliptrace.zip'
  })

  // ---------------------
  await context.close();
  await browser.close();
});