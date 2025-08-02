const {test,expect}=require('@playwright/test')

test ('locators test',async({page})=>{
    await page.goto('https://saucedemo.com')
    await page.pause()

    // await page.click('id=user-name')
    // await page.locator('id=user-name').fill('Saikumar Palla')
    await page.locator('[id=user-name]').fill('standard_user')
    await page.waitForTimeout(3000)

    // await page.click('id=password')
    await page.locator('id=password').fill('secret_sauce')
    await page.waitForTimeout(2000)

    await page.click('id=login-button') 
    await page.waitForTimeout(3000)   
    
})