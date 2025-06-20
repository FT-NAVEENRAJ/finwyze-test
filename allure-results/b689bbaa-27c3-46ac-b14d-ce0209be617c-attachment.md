# Test info

- Name: TC_01: Navigate to External Admin Dashboard
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:22:1

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://cd-r3.finwyze.com/
Call log:
  - navigating to "https://cd-r3.finwyze.com/", waiting until "load"

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:10:16
```

# Page snapshot

```yaml
- heading "This site can’t be reached" [level=1]
- paragraph:
  - strong: cd-r3.finwyze.com
  - text: ’s DNS address could not be found. Diagnosing the problem.
- paragraph
- list:
  - listitem:
    - link "Try running Windows Network Diagnostics":
      - /url: javascript:diagnoseErrors()
    - text: .
- text: DNS_PROBE_STARTED
- button "Reload"
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | import LoginPage from "../pages/loginPage.js";
   3 | import OfflineDocumentSection from"../pages/OfflineDocument.js";
   4 | let browser;
   5 | let page, page2;
   6 |
   7 | test.beforeAll(async ({ browser }) => {
   8 |     const context = await browser.newContext();
   9 |     page = await context.newPage();
> 10 |     await page.goto("https://cd-r3.finwyze.com");
     |                ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://cd-r3.finwyze.com/
  11 |     const loginPage = new LoginPage(page);
  12 |     await loginPage.login("Domestic Custody","FTIPRU@FINTUPLE.COM", "Fintuple@1", "a2C4dE");
  13 |     const otpEntered = await loginPage.enterOTP("857362");
  14 |     if (otpEntered) {
  15 |     console.log("OTP entered successfully.");
  16 |     } else {
  17 |     console.log("Failed to enter OTP.");
  18 |     }
  19 |     await new Promise(resolve => setTimeout(resolve, 3000));
  20 |     });
  21 |
  22 | test("TC_01: Navigate to External Admin Dashboard", async () => {
  23 |         page2 = await Promise.all([
  24 |         page.waitForEvent("popup"), 
  25 |         page.getByText('View Task').first().click(), 
  26 |         ]).then(([newPage]) => newPage);
  27 |         await page2.waitForLoadState();
  28 |         console.log("Click External Admin Dashboard Page");
  29 |     });
  30 |
  31 | test("TC_02: Upload Stamp Paper using Offline Document Flow", async({}) =>{
  32 |     await new Promise(resolve => setTimeout(resolve, 5000));
  33 |     await page2.locator('//button[text()="Offline Documents"]').click();
  34 |     
  35 |
  36 |    });
  37 |
  38 | test("TC_03: Validate Stamp Paper Upload in Offline Document ", async () => {
  39 |     const addStamp = new OfflineDocumentSection(page2);
  40 |     await addStamp.stampPaperAddition("2","21-10-2025","MAHARASHTRA","PMS AGREEMENT","700");
  41 |     await addStamp.stampPaperAddition("2","21-11-2025","MAHARASHTRA","POA","500");
  42 |
  43 |
  44 | });
  45 |
  46 |
  47 |
  48 |    
  49 |  
```