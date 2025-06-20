# Test info

- Name: TC_04: Deactivate an Active User and Validate Success Toast
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:45:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://cd-r5.finwyze.com/", waiting until "load"

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:12:16
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | import LoginPage from "../pages/loginPage.js";
   3 | import OfflineDocumentSection from"../pages/OfflineDocument.js";
   4 | let browser;
   5 | let page, page2;
   6 | let Name="KishoreI";
   7 | let generatedEmail = `${Name}@Fintuple.com`;
   8 |
   9 | test.beforeAll(async ({ browser }) => {
  10 |     const context = await browser.newContext();
  11 |     page = await context.newPage();
> 12 |     await page.goto("https://cd-r5.finwyze.com/");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  13 |     const loginPage = new LoginPage(page);
  14 |     await loginPage.login("Domestic Custody","FTIPRU@FINTUPLE.COM", "Fintuple@1", "a2C4dE");
  15 |     // const otpEntered = await loginPage.enterOTP("857362");
  16 |     // if (otpEntered) {
  17 |     // console.log("OTP entered successfully.");
  18 |     // } else {
  19 |     // console.log("Failed to enter OTP.");
  20 |     // }
  21 |     await new Promise(resolve => setTimeout(resolve, 3000));
  22 |     });
  23 |
  24 | test("TC_01: Navigate to External Admin Dashboard", async () => {
  25 |         page2 = await Promise.all([
  26 |         page.waitForEvent("popup"), 
  27 |         page.getByText('View Task').first().click(), 
  28 |         ]).then(([newPage]) => newPage);
  29 |         await page2.waitForLoadState();
  30 |         console.log("Click External Admin Dashboard Page");
  31 |     });
  32 | test("TC_02: User can add the user of Single Record", async()=>{
  33 |     const addStamp = new OfflineDocumentSection(page2);
  34 |     await new Promise(resolve => setTimeout(resolve, 2000));
  35 |     await addStamp.addSingleUser(Name,"0987","212000",generatedEmail,"9344872104");
  36 |
  37 | });
  38 | test("TC_03: To check the user status was Active or InviteSent",async()=>{
  39 |     const addStamps = new OfflineDocumentSection(page2);
  40 |     await new Promise(resolve => setTimeout(resolve, 2000));
  41 |     await addStamps.userStatus(generatedEmail);
  42 |    
  43 | });
  44 |
  45 | test("TC_04: Deactivate an Active User and Validate Success Toast", async()=>{
  46 |     await this.page.keyboard.press('Control+A');
  47 |     await this.page.keyboard.press('Backspace');
  48 |     await page2.getByRole('searchbox', { name: 'Search' }).fill('JIVITA@FINTUPLE.COM');
  49 |     const active = await page2.locator(' //span[@id="Active"][text()="Active"]').textContent();
  50 |         if (active && active.trim() === "Active") {
  51 |             console.log("Status is correctly set to 'Active'.");
  52 |         } else {
  53 |             console.log(`Unexpected status: ${active}`);
  54 |         }
  55 |
  56 |     await page2.getByText('Active').click();
  57 |     await page2.locator('#dropdown').click();
  58 |     await page2.getByRole('button', { name: ' Activate / Deactivate' }).click();
  59 |     await page2.locator('#internal_user_comments').fill('NOW NOT NEED THE ROAl');
  60 |     await page2.getByRole('button', { name: 'Deactivate' }).click();
  61 |
  62 |     const deactivateToast = page.getByRole('alert', { name: 'User deactivated Successfully' }).textContent();
  63 |     console.log("Toast Message:", toastText?.trim());
  64 |     await expect(deactivateToast).toHaveText("User deactivated Successfully");
  65 |     const inActive = await page2.locator(' //span[@id="InActive"][text()="InActive"]').textContent();
  66 |         if (inActive && inActive.trim() === "InActive") {
  67 |             console.log("Status is correctly set to 'InActive'.");
  68 |         } else {
  69 |             console.log(`Unexpected status: ${inActive}`);
  70 |         }
  71 |
  72 |
  73 |
  74 |         const toastText = await successToast.textContent();
  75 |       console.log("Success Toast Message:", toastText?.trim());
  76 |       await expect(successToast).toHaveText("Task Created Successfully");
  77 | })
  78 |
  79 |
  80 | test("TC_04: Upload Stamp Paper using Offline Document Flow", async({}) =>{
  81 |     await new Promise(resolve => setTimeout(resolve, 5000));
  82 |     await page2.locator('//button[text()="Offline Documents"]').click();
  83 |     
  84 |
  85 |    });
  86 |
  87 | test("TC_05: Validate Stamp Paper Upload in Offline Document ", async () => {
  88 |     const addStamp = new OfflineDocumentSection(page2);
  89 |     await addStamp.stampPaperAddition("2","21-10-2025","MAHARASHTRA","PMS AGREEMENT","700");
  90 |     await addStamp.stampPaperAddition("2","21-11-2025","MAHARASHTRA","POA","500");
  91 |
  92 |
  93 | });
  94 |
  95 |
  96 |
  97 |    
  98 |  
```