import {test,expect} from '@playwright/test'

test('demo login',async({page})=>{
    await page.goto('https://demo.applitools.com/')
})