# Test info

- Name: TC_01: Login to iCACE Custody Checker with valid credentials
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\10-custodyChecker.spec.js:18:3

# Error details

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "popup"
============================================================
    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\10-custodyChecker.spec.js:20:16
```

# Page snapshot

```yaml
- text: 
- heading "Investor Profile" [level=5]
- heading "1" [level=5]
- text: View Investors 
- heading "Domestic Custody Applications" [level=5]
- heading "0" [level=5]
- text: Create New Application 
- heading "Domestic Custody Applications" [level=5]
- heading "2" [level=5]
- text: View Completed Applications 
- heading "Service Request Applications" [level=5]
- heading "76" [level=5]
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
   1 | import { test, expect } from '@playwright/test';
   2 | import LAM_LoginPage from "../pages/lamlogin.js";
   3 | import { globalData } from '../pages/global-data.js';
   4 | import CustodyMaker  from '../pages/custodyMaker.js';
   5 |
   6 |
   7 | let page, page2;
   8 |
   9 | test.beforeAll(async ({ browser }) => {
  10 |
  11 |     const context = await browser.newContext();
  12 |     page = await context.newPage();
  13 |     const lamMaker = new LAM_LoginPage(page);
  14 |     await page.goto('https://cdi-r3.finwyze.com');
  15 |     await lamMaker.loginLamMaker('cust.appl.ckr@fintuple.com', 'Icici@123');
  16 |     
  17 |   });
  18 |   test("TC_01: Login to iCACE Custody Checker with valid credentials", async () => {
  19 |       page2 = await Promise.all([
> 20 |           page.waitForEvent("popup"), 
     |                ^ Error: page.waitForEvent: Target page, context or browser has been closed
  21 |           page.getByText('View Task').first().click(), 
  22 |           ]).then(([newPage]) => newPage);
  23 |           await page2.waitForLoadState();
  24 |       });
  25 |   test("TC_02: To click the View Task page for Custody Application Management ", async()=>{
  26 |   
  27 |         await new Promise(resolve => setTimeout(resolve, 3000));
  28 |         if (!globalData.applicationId) {
  29 |           throw new Error("applicationId is not set in globalData");
  30 |         }
  31 |         await page2.locator('//input[@id="search"]').fill(globalData.applicationId);
  32 |   });
  33 |   test("TC_03: To review all PDF documents and verify the AML check is successful, then approve the task", async()=>{
  34 |    
  35 |       const Maker = new CustodyMaker(page2);
  36 |       await Maker.custodyMakerApprove();
  37 |       await new Promise(resolve => setTimeout(resolve, 3000));
  38 |   
  39 |   });
```