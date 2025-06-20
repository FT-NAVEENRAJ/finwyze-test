import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage.js";


let browser;
let page;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
});

test('TC_01: Login with Valid Credentials',async ({ page }, testInfo)=> {
    testInfo.annotations.push({ type: 'tag', description: 'smoke' });
    testInfo.annotations.push({ type: 'tag', description: 'sanity' });
    testInfo.annotations.push({ type: 'tag', description: 'regression' });
   
     const expectedURL = 'https://cd-r3.finwyze.com/';
     const loginPage = new LoginPage(page);
     await page.goto(expectedURL);
         await loginPage.login("Domestic Custody","TS.JAMA.AMCRM01@FINTUPLE.COM", "Fintuple@1", "a2C4dE");
         await loginPage.enterOTP("857362");
         await new Promise(resolve => setTimeout(resolve, 3000));
});

test('TC_02: Login with Invalid Credentials' , async({page}) =>{
     const expectedURL = 'https://cd-r5.finwyze.com/';
     const loginPage = new LoginPage(page);
     await page.goto(expectedURL);
     await loginPage.login("Domestic Custody","DORABUJJI214@GMAIL.COM", "Fintuple@13", "a2C4dE");
     const errorMessage = page.locator('//div[text()="The email address or password is incorrect"]');
     await new Promise(resolve => setTimeout(resolve, 500));
     const errorText = await errorMessage.textContent();
     console.log("Field Error Message:", errorText?.trim());
     await expect(errorMessage).toHaveText("The email address or password is incorrect");

     
});

test('TC_03: Login with Empty Fields' , async({page}) =>{
    const expectedURL = 'https://cd-r5.finwyze.com/';
    const loginPage = new LoginPage(page);
    await page.goto(expectedURL);
    await loginPage.clickVerify();
    await expect(page.locator('//small[@id="custodyErrors"]')).toHaveText('Custody is required');
    await expect(page.locator('//small[@id="emailErrors"]')).toHaveText('Email Address is required');
    await expect(page.locator('//small[@id="captchaError"]')).toHaveText('Captcha is required');
    await expect(page.locator('//small[@id="passwordError"]')).toHaveText('Password is required'); 
  
});

test('TC_04: Login with enter wrong Captcha Validation', async({page}) =>{
    const expectedURL = 'https://cd-r5.finwyze.com/';
    const loginPage = new LoginPage(page);
    await page.goto(expectedURL);
    await loginPage.login("Domestic Custody","DORABUJJI214@GMAIL.COM", "Fintuple@1", "d21byu");
    await expect(page.locator('//div[@id="capErr"]')).toHaveText('Invalid captcha');
   
});

test('TC_05: Login Session Timeout', async({page}) =>{
    const expectedURL = 'https://cd-r5.finwyze.com/';
    const loginPage = new LoginPage(page);
    await page.goto(expectedURL);
    await loginPage.login("Domestic Custody","DORABUJJI2104@GMAIL.COM", "Fintuple@1", "a2C4dE");
    await page.waitForTimeout(2000);
    await page.reload();
    await expect(page).toHaveURL(expectedURL);
    await expect(page.locator('.error-message')).toHaveText('Session expired, please log in again');
   
});

test('TC_06: Multiple Failed Login Attempts', async({page}) =>{
    const expectedURL = 'https://cd-r5.finwyze.com/';
    const loginPage = new LoginPage(page);
    await page.goto(expectedURL);
    for (let i = 0; i < 5; i++) {
    await loginPage.login("Domestic Custody","DORABUJJI2104@GMAIL.COM", "Fintuple@12334", "a2C4dE");
    }
    await expect(page.locator('//div[@id="passwordErr"]')).toHaveText('You have made 1 incorrect login attempt. After 3 incorrect attempts, your account will be locked for 60 minutes.');
});

test('TC_07: Forgot Password functionality', async ({ page }) => {
    const expectedURL = 'https://cd-r5.finwyze.com/';
    const loginPage = new LoginPage(page);
    await page.goto(expectedURL);
    await loginPage.clickForgotPassword("TS.JAMA.amcrm01@FINTUPE.COM");
    await expect(page.locator('//div[@id="usernameErr"]')).toHaveText('Email Address is invalid');

});







