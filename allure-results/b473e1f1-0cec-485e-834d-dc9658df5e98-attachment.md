# Test info

- Name: TC_01: User should navigate to the External Admin Dashboard successfully
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:24:1

# Error details

```
TimeoutError: page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "https://custodydigitizationuat.icicibank.com/", waiting until "load"

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:12:16
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | import LoginPage from "../pages/loginPage.js";
   3 | import OfflineDocumentSection from"../pages/OfflineDocument.js";
   4 | let browser;
   5 | let page, page2;
   6 | let Name="KishoreZ016";
   7 | let generatedEmail = `${Name}@Fintuple.com`;
   8 |
   9 | test.beforeAll(async ({ browser }) => {
   10 |     const context = await browser.newContext();
   11 |     page = await context.newPage();
>  12 |     await page.goto("https://custodydigitizationuat.icicibank.com/");
      |                ^ TimeoutError: page.goto: Timeout 45000ms exceeded.
   13 |     const loginPage = new LoginPage(page);
   14 |     await loginPage.login("Domestic Custody","ts.test.amcsign1@fintuple.com", "Fintuple@1", "a2C4dE");
   15 |     const otpEntered = await loginPage.enterOTP("857362");
   16 |     if (otpEntered) {
   17 |     console.log("OTP entered successfully.");
   18 |     } else {
   19 |     console.log("Failed to enter OTP.");
   20 |     }
   21 |     await new Promise(resolve => setTimeout(resolve, 3000));
   22 |     });
   23 |
   24 | test("TC_01: User should navigate to the External Admin Dashboard successfully", async () => {
   25 |         page2 = await Promise.all([
   26 |         page.waitForEvent("popup"), 
   27 |         page.getByText('View Task').first().click(), 
   28 |         ]).then(([newPage]) => newPage);
   29 |         await page2.waitForLoadState();
   30 |         console.log("Click External Admin Dashboard Page");
   31 |     });
   32 | // test("TC_02: User should be able to add a single record successfully", async()=>{
   33 | //     const addStamp = new OfflineDocumentSection(page2);
   34 | //     await new Promise(resolve => setTimeout(resolve, 2000));
   35 | //     await addStamp.addSingleUser(Name,"0987","212000",generatedEmail,"9344872104");
   36 |
   37 | // });
   38 | // test("TC_03: User status should be Active or Invite Sent after creation",async()=>{
   39 | //     const addStamps = new OfflineDocumentSection(page2);
   40 | //     await new Promise(resolve => setTimeout(resolve, 2000));
   41 | //     await addStamps.userStatus(generatedEmail);
   42 | //     await new Promise(resolve => setTimeout(resolve, 2000));
   43 |    
   44 | // });
   45 |
   46 | // test("TC_04: User should be able to deactivate an active user and validate the success toast message", async () => {
   47 | //     await page2.getByRole('searchbox', { name: 'Search' }).click();
   48 | //     await page2.keyboard.press('Control+A');
   49 | //     await page2.keyboard.press('Backspace');
   50 | //     await page2.getByRole('searchbox', { name: 'Search' }).fill('FT.IPRU.AMCSRRM01@FINTUPLE.COM');
   51 | //     const active = await page2.locator('//span[@id="Active"][text()="Active"]').textContent();
   52 | //     if (active && active.trim() === "Active") {
   53 | //         console.log("Status is correctly set to 'Active'.");
   54 | //     } else {
   55 | //         console.log(`Unexpected status: ${active}`);
   56 | //     }
   57 | // // Deactivate the user
   58 | //     await page2.getByText('Active').click();
   59 | //     await page2.locator('#dropdown').click();
   60 | //     await page2.getByRole('button', { name: ' Activate / Deactivate' }).click();
   61 | //     await page2.locator('#internal_user_comments').fill('DeActivate');
   62 | //     await page2.getByRole('button', { name: 'Deactivate' }).click();
   63 |
   64 | //     // 🛠️ Correct: Wait and capture toast properly
   65 | //     const deactivateToast = await page2.getByRole('alert').textContent();
   66 | //     console.log("Toast Message:", deactivateToast?.trim());
   67 | //     await expect(page2.getByRole('alert')).toHaveText('User deactivated Successfully');
   68 |
   69 | //     // Confirm the status has changed to Inactive
   70 | //     const inactive = await page2.locator('//span[@id="InActive"][text()="InActive"]').textContent();
   71 | //     if (inactive && inactive.trim() === "InActive") {
   72 | //         console.log("Status is correctly set to 'InActive'.");
   73 | //     } else {
   74 | //         console.log(`Unexpected status after deactivation: ${inactive}`);
   75 | //     }
   76 | // });
   77 |
   78 | // test("TC_05: User should be able to activate an inactive user and validate the success toast message", async () => {
   79 | //     await page2.getByRole('searchbox', { name: 'Search' }).click();
   80 | //     await page2.keyboard.press('Control+A');
   81 | //     await page2.keyboard.press('Backspace');
   82 | //     await page2.getByRole('searchbox', { name: 'Search' }).fill('FT.IPRU.AMCSRRM01@FINTUPLE.COM');
   83 |
   84 | //     const inActive = await page2.locator('//span[@id="InActive"][text()="InActive"]').textContent();
   85 | //     if (inActive && inActive.trim() === "InActive") {
   86 | //         console.log("Status is correctly set to 'InActive'.");
   87 | //     } else {
   88 | //         console.log(`Unexpected status before activation: ${inActive}`);
   89 | //     }
   90 |
   91 | //     // Activate the user
   92 | //     await page2.getByText('InActive').click();
   93 | //     await page2.locator('#dropdown').click();
   94 | //     await page2.getByRole('button', { name: ' Activate / Deactivate' }).click();
   95 | //     await page2.locator('#internal_user_comments').fill('Activate');
   96 | //     await page2.locator('//button[@id="Approve"]').click();
   97 |     
   98 | //     // 🛠️ Correct toast capture
   99 | //     // const activateToast = await page2.getByRole('alert').textContent();
  100 | //     // console.log("Toast Message:", activateToast?.trim());
  101 | //     // await expect(page2.getByRole('alert')).toHaveText('User activated Successfully');
  102 |
  103 | //     // // Confirm the status has changed to Active
  104 | //     // const active = await page2.locator('//span[@id="Active"][text()="Active"]').textContent();
  105 | //     // if (active && active.trim() === "Active") {
  106 | //     //     console.log("Status is correctly set to 'Active'.");
  107 | //     // } else {
  108 | //     //     console.log(`Unexpected status after activation: ${active}`);
  109 | //     // }
  110 | // });
  111 |
  112 |
```