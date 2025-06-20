# Test info

- Name: TC_05: Activate an Inactive User and Validate Success Toast
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:83:1

# Error details

```
Error: locator.textContent: Error: strict mode violation: getByRole('alert') resolved to 2 elements:
    1) <div role="alert" aria-label="User activated Successfully" class="ng-tns-c2308121496-6 toast-message ng-star-inserted"> User activated Successfully </div> aka getByRole('alert', { name: 'User activated Successfully' })
    2) <div role="alert" aria-label="User deactivated Successfully" class="ng-tns-c2308121496-5 toast-message ng-star-inserted"> User deactivated Successfully </div> aka getByRole('alert', { name: 'User deactivated Successfully' })

Call log:
  - waiting for getByRole('alert')

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:107:58
```

# Page snapshot

```yaml
- text: 
- heading "External Admin" [level=5]
- heading "0" [level=5]
- text: View Task 
- heading "AMC Handler" [level=5]
- heading "0" [level=5]
- text: View Task
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
   7 | let generatedEmail = `${Name}@Fintuple.com`;
   8 |
   9 | test.beforeAll(async ({ browser }) => {
   10 |     const context = await browser.newContext();
   11 |     page = await context.newPage();
   12 |     await page.goto("https://cd-r5.finwyze.com/");
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
   42 |     await new Promise(resolve => setTimeout(resolve, 2000));
   43 |    
   44 | });
   45 |
   46 | test("TC_04: Deactivate an Active User and Validate Success Toast", async () => {
   47 |     await page2.getByRole('searchbox', { name: 'Search' }).click();
   48 |     await page2.keyboard.press('Control+A');
   49 |     await page2.keyboard.press('Backspace');
   50 |
   51 |     // Search for the user
   52 |     await page2.getByRole('searchbox', { name: 'Search' }).fill('JIVITA@FINTUPLE.COM');
   53 |
   54 |     // Check if status is Active
   55 |     const active = await page2.locator('//span[@id="Active"][text()="Active"]').textContent();
   56 |     if (active && active.trim() === "Active") {
   57 |         console.log("Status is correctly set to 'Active'.");
   58 |     } else {
   59 |         console.log(`Unexpected status: ${active}`);
   60 |     }
   61 |
   62 |     // Deactivate the user
   63 |     await page2.getByText('Active').click();
   64 |     await page2.locator('#dropdown').click();
   65 |     await page2.getByRole('button', { name: ' Activate / Deactivate' }).click();
   66 |     await page2.locator('#internal_user_comments').fill('DeActivate');
   67 |     await page2.getByRole('button', { name: 'Deactivate' }).click();
   68 |
   69 |     // 🛠️ Correct: Wait and capture toast properly
   70 |     const deactivateToast = await page2.getByRole('alert').textContent();
   71 |     console.log("Toast Message:", deactivateToast?.trim());
   72 |     await expect(page2.getByRole('alert')).toHaveText('User deactivated Successfully');
   73 |
   74 |     // Confirm the status has changed to Inactive
   75 |     const inactive = await page2.locator('//span[@id="InActive"][text()="InActive"]').textContent();
   76 |     if (inactive && inactive.trim() === "InActive") {
   77 |         console.log("Status is correctly set to 'InActive'.");
   78 |     } else {
   79 |         console.log(`Unexpected status after deactivation: ${inactive}`);
   80 |     }
   81 | });
   82 |
   83 | test("TC_05: Activate an Inactive User and Validate Success Toast", async () => {
   84 |     await page2.getByRole('searchbox', { name: 'Search' }).click();
   85 |     await page2.keyboard.press('Control+A');
   86 |     await page2.keyboard.press('Backspace');
   87 |
   88 |     // Search for the user
   89 |     await page2.getByRole('searchbox', { name: 'Search' }).fill('JIVITA@FINTUPLE.COM');
   90 |
   91 |     // Check if status is InActive
   92 |     const inActive = await page2.locator('//span[@id="InActive"][text()="InActive"]').textContent();
   93 |     if (inActive && inActive.trim() === "InActive") {
   94 |         console.log("Status is correctly set to 'InActive'.");
   95 |     } else {
   96 |         console.log(`Unexpected status before activation: ${inActive}`);
   97 |     }
   98 |
   99 |     // Activate the user
  100 |     await page2.getByText('InActive').click();
  101 |     await page2.locator('#dropdown').click();
  102 |     await page2.getByRole('button', { name: ' Activate / Deactivate' }).click();
  103 |     await page2.locator('#internal_user_comments').fill('Activate');
  104 |     await page2.locator('//button[@id="Approve"]').click();
  105 |
  106 |     // Capture toast properly
> 107 |     const activateToast = await page2.getByRole('alert').textContent();
      |                                                          ^ Error: locator.textContent: Error: strict mode violation: getByRole('alert') resolved to 2 elements:
  108 |     console.log("Toast Message:", activateToast?.trim());
  109 |     await expect(page2.getByRole('alert')).toHaveText('User activated Successfully');
  110 |
  111 |     // Confirm the status has changed to Active
  112 |     const active = await page2.locator('//span[@id="Active"][text()="Active"]').textContent();
  113 |     if (active && active.trim() === "Active") {
  114 |         console.log("Status is correctly set to 'Active'.");
  115 |     } else {
  116 |         console.log(`Unexpected status after activation: ${active}`);
  117 |     }
  118 | });
  119 |
  120 |
  121 |
  122 |
  123 | test("TC_06: Upload Stamp Paper using Offline Document Flow", async({}) =>{
  124 |     await new Promise(resolve => setTimeout(resolve, 5000));
  125 |     await page2.locator('//button[text()="Offline Documents"]').click();
  126 |     
  127 |
  128 |    });
  129 |
  130 | test("TC_07: Validate Stamp Paper Upload in Offline Document ", async () => {
  131 |     const addStamp = new OfflineDocumentSection(page2);
  132 |     await addStamp.stampPaperAddition("2","21-10-2025","MAHARASHTRA","PMS AGREEMENT","700");
  133 |     await addStamp.stampPaperAddition("2","21-11-2025","MAHARASHTRA","POA","500");
  134 |
  135 |
  136 | });
  137 |
  138 |
  139 |
  140 |    
  141 |  
```