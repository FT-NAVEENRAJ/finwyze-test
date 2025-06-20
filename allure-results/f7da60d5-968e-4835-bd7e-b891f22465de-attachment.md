# Test info

- Name: TC_03: To review all PDF documents and verify the AML check is successful, then approve the task
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\07-amcReviewer.spec.js:32:1

# Error details

```
TimeoutError: page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "https://custodydigitizationuat.icicibank.com/", waiting until "load"

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\07-amcReviewer.spec.js:11:16
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | import LoginPage from "../pages/loginPage.js";
   3 | import AMCReviewer  from "../pages/amcReviewer.js";
   4 | import { globalData } from '../pages/global-data.js';
   5 |
   6 | let page,page2;
   7 |
   8 | test.beforeAll(async ({ browser }) => {
   9 |     const context = await browser.newContext();
  10 |     page = await context.newPage();
> 11 |     await page.goto("https://custodydigitizationuat.icicibank.com/");
     |                ^ TimeoutError: page.goto: Timeout 45000ms exceeded.
  12 |     const loginPage = new LoginPage(page);
  13 |     await loginPage.login("Domestic Custody","FT.IPRU.AMCREVIEWER01@FINTUPLE.COM", "Fintuple@1", "a2C4dE");
  14 |     await loginPage.enterOTP("857362");
  15 |     await new Promise(resolve => setTimeout(resolve, 3000));
  16 |     });
  17 | test("TC_01: Login to iCACE AMC Reviewer with valid credentials", async () => {
  18 |     page2 = await Promise.all([
  19 |         page.waitForEvent("popup"), 
  20 |         page.getByText('View Task').first().click(), 
  21 |         ]).then(([newPage]) => newPage);
  22 |         await page2.waitForLoadState();
  23 |     });
  24 | test("TC_02: To click the View Task page for AMC Reviewer page", async()=>{
  25 |
  26 |       await new Promise(resolve => setTimeout(resolve, 3000));
  27 |       if (!globalData.applicationId) {
  28 |         throw new Error("applicationId is not set in globalData");
  29 |       }
  30 |       await page2.locator('//input[@id="search"]').fill(globalData.applicationId);
  31 | });
  32 | test("TC_03: To review all PDF documents and verify the AML check is successful, then approve the task", async()=>{
  33 |  
  34 |     const reviewer = new AMCReviewer(page2);
  35 |     await reviewer.amcManagerApprove();
  36 |     await new Promise(resolve => setTimeout(resolve, 3000));
  37 |
  38 | });
```