# Test info

- Name: TC_01: User should navigate to the External Admin Dashboard successfully
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:25:1

# Error details

```
TimeoutError: page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "https://custodydigitizationuat.icicibank.com/", waiting until "load"

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:13:16
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | import LoginPage from "../pages/loginPage.js";
   3 | import OfflineDocumentSection from"../pages/OfflineDocument.js";
   4 | let browser;
   5 | let page, page2;
   6 | let Name="KishoreZ0196";
   7 | let generatedEmail = `${Name}@Fintuple.com`;
   8 | // MAHARASHTRA
   9 | // TELANGANA
   10 | test.beforeAll(async ({ browser }) => {
   11 |     const context = await browser.newContext();
   12 |     page = await context.newPage();
>  13 |     await page.goto("https://custodydigitizationuat.icicibank.com/");
      |                ^ TimeoutError: page.goto: Timeout 45000ms exceeded.
   14 |     const loginPage = new LoginPage(page);
   15 |     await loginPage.login("Domestic Custody","FTASK@fintuple.com", "Fintuple@1", "a2C4dE");
   16 |     const otpEntered = await loginPage.enterOTP("857362");
   17 |     if (otpEntered) {
   18 |     console.log("OTP entered successfully.");
   19 |     } else {
   20 |     console.log("Failed to enter OTP.");
   21 |     }
   22 |     await new Promise(resolve => setTimeout(resolve, 3000));
   23 |     });
   24 |
   25 | test("TC_01: User should navigate to the External Admin Dashboard successfully", async () => {
   26 |         page2 = await Promise.all([
   27 |         page.waitForEvent("popup"), 
   28 |         page.getByText('View Task').first().click(), 
   29 |         ]).then(([newPage]) => newPage);
   30 |         await page2.waitForLoadState();
   31 |         console.log("Click External Admin Dashboard Page");
   32 |     });
   33 | // test("TC_02: User should be able to add a single record successfully", async()=>{
   34 | //     const addStamp = new OfflineDocumentSection(page2);
   35 | //     await new Promise(resolve => setTimeout(resolve, 2000));
   36 | //     await addStamp.addSingleUser(Name,"0987","212000",generatedEmail,"9344872104");
   37 |
   38 | // });
   39 | // test("TC_03: User status should be Active or Invite Sent after creation",async()=>{
   40 | //     const addStamps = new OfflineDocumentSection(page2);
   41 | //     await new Promise(resolve => setTimeout(resolve, 2000));
   42 | //     await addStamps.userStatus(generatedEmail);
   43 | //     await new Promise(resolve => setTimeout(resolve, 2000));
   44 |    
   45 | // });
   46 |
   47 | // test("TC_04: User should be able to deactivate an active user and validate the success toast message", async () => {
   48 | //     await page2.getByRole('searchbox', { name: 'Search' }).click();
   49 | //     await page2.keyboard.press('Control+A');
   50 | //     await page2.keyboard.press('Backspace');
   51 | //     await page2.getByRole('searchbox', { name: 'Search' }).fill('FT.IPRU.AMCSRRM01@FINTUPLE.COM');
   52 | //     const active = await page2.locator('//span[@id="Active"][text()="Active"]').textContent();
   53 | //     if (active && active.trim() === "Active") {
   54 | //         console.log("Status is correctly set to 'Active'.");
   55 | //     } else {
   56 | //         console.log(`Unexpected status: ${active}`);
   57 | //     }
   58 | // // Deactivate the user
   59 | //     await page2.getByText('Active').click();
   60 | //     await page2.locator('#dropdown').click();
   61 | //     await page2.getByRole('button', { name: ' Activate / Deactivate' }).click();
   62 | //     await page2.locator('#internal_user_comments').fill('DeActivate');
   63 | //     await page2.getByRole('button', { name: 'Deactivate' }).click();
   64 |
   65 | //     // 🛠️ Correct: Wait and capture toast properly
   66 | //     const deactivateToast = await page2.getByRole('alert').textContent();
   67 | //     console.log("Toast Message:", deactivateToast?.trim());
   68 | //     await expect(page2.getByRole('alert')).toHaveText('User deactivated Successfully');
   69 |
   70 | //     // Confirm the status has changed to Inactive
   71 | //     const inactive = await page2.locator('//span[@id="InActive"][text()="InActive"]').textContent();
   72 | //     if (inactive && inactive.trim() === "InActive") {
   73 | //         console.log("Status is correctly set to 'InActive'.");
   74 | //     } else {
   75 | //         console.log(`Unexpected status after deactivation: ${inactive}`);
   76 | //     }
   77 | // });
   78 |
   79 | // test("TC_05: User should be able to activate an inactive user and validate the success toast message", async () => {
   80 | //     await page2.getByRole('searchbox', { name: 'Search' }).click();
   81 | //     await page2.keyboard.press('Control+A');
   82 | //     await page2.keyboard.press('Backspace');
   83 | //     await page2.getByRole('searchbox', { name: 'Search' }).fill('FT.IPRU.AMCSRRM01@FINTUPLE.COM');
   84 |
   85 | //     const inActive = await page2.locator('//span[@id="InActive"][text()="InActive"]').textContent();
   86 | //     if (inActive && inActive.trim() === "InActive") {
   87 | //         console.log("Status is correctly set to 'InActive'.");
   88 | //     } else {
   89 | //         console.log(`Unexpected status before activation: ${inActive}`);
   90 | //     }
   91 |
   92 | //     // Activate the user
   93 | //     await page2.getByText('InActive').click();
   94 | //     await page2.locator('#dropdown').click();
   95 | //     await page2.getByRole('button', { name: ' Activate / Deactivate' }).click();
   96 | //     await page2.locator('#internal_user_comments').fill('Activate');
   97 | //     await page2.locator('//button[@id="Approve"]').click();
   98 |     
   99 | //     // 🛠️ Correct toast capture
  100 | //     // const activateToast = await page2.getByRole('alert').textContent();
  101 | //     // console.log("Toast Message:", activateToast?.trim());
  102 | //     // await expect(page2.getByRole('alert')).toHaveText('User activated Successfully');
  103 |
  104 | //     // // Confirm the status has changed to Active
  105 | //     // const active = await page2.locator('//span[@id="Active"][text()="Active"]').textContent();
  106 | //     // if (active && active.trim() === "Active") {
  107 | //     //     console.log("Status is correctly set to 'Active'.");
  108 | //     // } else {
  109 | //     //     console.log(`Unexpected status after activation: ${active}`);
  110 | //     // }
  111 | // });
  112 |
  113 |
```