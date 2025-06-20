# Test info

- Name: TC_05: Login Session Timeout
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\02-login.spec.js:61:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

Locator: locator('.error-message')
Expected string: "Session expired, please log in again"
Received: <element(s) not found>
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('.error-message')

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\02-login.spec.js:69:50
```

# Page snapshot

```yaml
- text: 
- heading "Investor Profile" [level=5]
- heading "2" [level=5]
- text: View Investors 
- heading "Domestic Custody Applications" [level=5]
- heading "0" [level=5]
- text: Create New Application 
- heading "Domestic Custody Applications" [level=5]
- heading "0" [level=5]
- text: View Completed Applications 
- heading "Service Request Applications" [level=5]
- heading "0" [level=5]
- text: Create New Application 
- heading "Service Request Applications" [level=5]
- heading "0" [level=5]
- text: View Completed Applications
- img "loading..."
- img
- list:
  - listitem: Home
- text: Copyright © 2023 . All rights Reserved.
- link "Disclaimer":
  - /url: https://www.icicibank.com/disclaimer
- text: "|"
- link "Privacy Policy":
  - /url: https://www.icicibank.com/privacy
- text: "|"
- link "Terms of Use":
  - /url: https://www.icicibank.com/disclaimer
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | import LoginPage from "../pages/loginPage.js";
   3 |
   4 |
   5 | let browser;
   6 | let page;
   7 |
   8 | test.beforeAll(async ({ browser }) => {
   9 |     const context = await browser.newContext();
  10 |     page = await context.newPage();
  11 | });
  12 |
  13 | test('TC_01: Login with Valid Credentials',async ({ page }, testInfo)=> {
  14 |     testInfo.annotations.push({ type: 'tag', description: 'smoke' });
  15 |     testInfo.annotations.push({ type: 'tag', description: 'sanity' });
  16 |     testInfo.annotations.push({ type: 'tag', description: 'regression' });
  17 |    
  18 |      const expectedURL = 'https://cd-r3.finwyze.com/';
  19 |      const loginPage = new LoginPage(page);
  20 |      await page.goto(expectedURL);
  21 |          await loginPage.login("Domestic Custody","TS.JAMA.AMCRM01@FINTUPLE.COM", "Fintuple@1", "a2C4dE");
  22 |          await loginPage.enterOTP("857362");
  23 |          await new Promise(resolve => setTimeout(resolve, 3000));
  24 | });
  25 |
  26 | test('TC_02: Login with Invalid Credentials' , async({page}) =>{
  27 |      const expectedURL = 'https://cd-r5.finwyze.com/';
  28 |      const loginPage = new LoginPage(page);
  29 |      await page.goto(expectedURL);
  30 |      await loginPage.login("Domestic Custody","DORABUJJI214@GMAIL.COM", "Fintuple@13", "a2C4dE");
  31 |      const errorMessage = page.locator('//div[text()="The email address or password is incorrect"]');
  32 |      await new Promise(resolve => setTimeout(resolve, 500));
  33 |      const errorText = await errorMessage.textContent();
  34 |      console.log("Field Error Message:", errorText?.trim());
  35 |      await expect(errorMessage).toHaveText("The email address or password is incorrect");
  36 |
  37 |      
  38 | });
  39 |
  40 | test('TC_03: Login with Empty Fields' , async({page}) =>{
  41 |     const expectedURL = 'https://cd-r5.finwyze.com/';
  42 |     const loginPage = new LoginPage(page);
  43 |     await page.goto(expectedURL);
  44 |     await loginPage.clickVerify();
  45 |     await expect(page.locator('//small[@id="custodyErrors"]')).toHaveText('Custody is required');
  46 |     await expect(page.locator('//small[@id="emailErrors"]')).toHaveText('Email Address is required');
  47 |     await expect(page.locator('//small[@id="captchaError"]')).toHaveText('Captcha is required');
  48 |     await expect(page.locator('//small[@id="passwordError"]')).toHaveText('Password is required'); 
  49 |   
  50 | });
  51 |
  52 | test('TC_04: Login with enter wrong Captcha Validation', async({page}) =>{
  53 |     const expectedURL = 'https://cd-r5.finwyze.com/';
  54 |     const loginPage = new LoginPage(page);
  55 |     await page.goto(expectedURL);
  56 |     await loginPage.login("Domestic Custody","DORABUJJI214@GMAIL.COM", "Fintuple@1", "d21byu");
  57 |     await expect(page.locator('//div[@id="capErr"]')).toHaveText('Invalid captcha');
  58 |    
  59 | });
  60 |
  61 | test('TC_05: Login Session Timeout', async({page}) =>{
  62 |     const expectedURL = 'https://cd-r5.finwyze.com/';
  63 |     const loginPage = new LoginPage(page);
  64 |     await page.goto(expectedURL);
  65 |     await loginPage.login("Domestic Custody","DORABUJJI2104@GMAIL.COM", "Fintuple@1", "a2C4dE");
  66 |     await page.waitForTimeout(2000);
  67 |     await page.reload();
  68 |     await expect(page).toHaveURL(expectedURL);
> 69 |     await expect(page.locator('.error-message')).toHaveText('Session expired, please log in again');
     |                                                  ^ Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)
  70 |    
  71 | });
  72 |
  73 | test('TC_06: Multiple Failed Login Attempts', async({page}) =>{
  74 |     const expectedURL = 'https://cd-r5.finwyze.com/';
  75 |     const loginPage = new LoginPage(page);
  76 |     await page.goto(expectedURL);
  77 |     for (let i = 0; i < 5; i++) {
  78 |     await loginPage.login("Domestic Custody","DORABUJJI2104@GMAIL.COM", "Fintuple@12334", "a2C4dE");
  79 |     }
  80 |     await expect(page.locator('//div[@id="passwordErr"]')).toHaveText('You have made 1 incorrect login attempt. After 3 incorrect attempts, your account will be locked for 60 minutes.');
  81 | });
  82 |
  83 | test('TC_07: Forgot Password functionality', async ({ page }) => {
  84 |     const expectedURL = 'https://cd-r5.finwyze.com/';
  85 |     const loginPage = new LoginPage(page);
  86 |     await page.goto(expectedURL);
  87 |     await loginPage.clickForgotPassword("TS.JAMA.amcrm01@FINTUPE.COM");
  88 |     await expect(page.locator('//div[@id="usernameErr"]')).toHaveText('Email Address is invalid');
  89 |
  90 | });
  91 |
  92 |
  93 |
  94 |
  95 |
  96 |
  97 |
  98 |
```