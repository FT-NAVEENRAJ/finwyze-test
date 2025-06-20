# Test info

- Name: Checker Flow >> Maker Flow >> TC_05_02: Update the details to click Resubmit the task for Maker 
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:445:3

# Error details

```
Error: locator.waitFor: Test timeout of 100000ms exceeded.
Call log:
  - waiting for locator('//input[@type="email"]') to be visible
    - waiting for" https://custodydigitization.finwyze.com/auth/realms/Fintuple/protocol/openid-connect/auth?client_id=admin-internal&redirect_uri=https%3A%2F%2Fcdi-r3.finwyze.com%2F&state=399e2be6-e434-440c-9d72-bec43…" navigation to finish...
    - navigated to "https://custodydigitization.finwyze.com/auth/realms/Fintuple/broker/AzureSAML/login?session_code=CW_SVar-9pNSeeLOFY3dx0I_B3UVMkV4itpU8zde9pk&client_id=admin-internal&tab_id=18FONNCQaDI"
    - waiting for" https://custodydigitization.finwyze.com/auth/realms/Fintuple/broker/after-post-broker-login?session_code=R9ODP4VrxpBJT0iC6_fFwFC4LO_BZS8KkCb9FkpnsvI&client_id=admin-internal&tab_id=18FONNCQaDI" navigation to finish...
    - navigated to "https://cdi-r3.finwyze.com/#state=399e2be6-e434-440c-9d72-bec437b3fc49&session_state=8b16374f-822c-4b87-b326-2ddbb98a1bba&iss=https%3A%2F%2Fcustodydigitization.finwyze.com%2Fauth%2Frealms%2FFintuple&…"

    at LAM_LoginPage.loginLamMaker (C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\pages\lamlogin.js:34:29)
    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:442:20
```

# Page snapshot

```yaml
- text: 
- heading "Internal User Management" [level=5]
- heading "462" [level=5]
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
   1 | export default class LAM_LoginPage{
   2 |     constructor(page) {
   3 |       this.page = page;
   4 |
   5 |       this.emailInput = page.locator('//input[@type="email"]');
   6 |       this.clickEmailNextbuttton = page.locator('//input[@id="idSIButton9"]');
   7 |       this.passwordInput = page.getByPlaceholder("Password");
   8 |       this.signinButton = page.locator('//input[@value="Sign in"]');
   9 |       this.staySignIn = page.locator('//input[@type="submit"]');
  10 |       
  11 |       this.viewTaskHypelink = page.locator('//a[text()="View Task"]');
  12 |       this.clickUserButton= page.locator('//button[@id="users"]');
  13 |       this.clickAddUserButton = page.locator('//button[text()="Add User "]');
  14 |       this.enterFulName = page.locator('//input[@id="internal_user_fullName"]');
  15 |       this.enterEmployeeId = page.locator('//input[@id="internal_user_employeeId"]');
  16 |       this.enterEmailAddress = page.locator('//input[@id="internal_user_emailAddress"]');
  17 |       this.enterMobileNumber = page.locator('//input[@id="internal_user_mobileNumber"]');
  18 |       this.enterLocation = page.locator('(//input[@type="text"])[5]');
  19 |       this.selectApplicationAccess = page.locator('//ng-select[@id="internal_user_applications"]');
  20 |       this.selectUserRoles = page.locator('//ng-select[@id="internal_user_roles"]');
  21 |       this.clickSaveButton = page.locator('//button[@id="internal_user_submit"]');
  22 |
  23 |       // Checker
  24 |       this.clickTaskID = page.getByRole('row', { name: 'NEW TR25040900442 09-04-2025' }).locator('#dropdown');
  25 |       this.clickAction = page.getByRole('button', { name: ' Approve/Reject' });
  26 |       this.clickApproveReject = page.locator('#task_internal_user_comments');
  27 |       this.enterCommants = page.getByRole('button', { name: 'Approve' });
  28 |       
  29 |
  30 |
  31 |     } 
  32 |     
  33 |     async loginLamMaker(email, password) {
> 34 |       await this.emailInput.waitFor();
     |                             ^ Error: locator.waitFor: Test timeout of 100000ms exceeded.
  35 |       await this.emailInput.fill(email);
  36 |       await this.clickEmailNextbuttton.click();
  37 |       await this.passwordInput.fill(password);
  38 |       await this.signinButton.click();
  39 |       await this.staySignIn.click();
  40 |     }
  41 |     async loginLamChecker(email, password) {
  42 |         await this.emailInput.waitFor();
  43 |         await this.emailInput.fill(email);
  44 |         await this.clickEmailNextbuttton.click();
  45 |         await this.passwordInput.fill(password);
  46 |         await this.signinButton.click();
  47 |         await this.staySignIn.click();
  48 |       }
  49 |       async clickUser(){
  50 |         await new Promise(resolve => setTimeout(resolve, 5000));
  51 |         await new Promise(resolve => setTimeout(resolve, 2500));
  52 |         await this.clickUserButton.click();
  53 |         await new Promise(resolve => setTimeout(resolve,1000));
  54 |
  55 |       }
  56 |       async AddUser(Name, mobileNumber,) {
  57 |         await new Promise(resolve => setTimeout(resolve, 5000));
  58 |         //await this.viewTaskHypelink.click();
  59 |         await new Promise(resolve => setTimeout(resolve, 2500));
  60 |         await this.clickUserButton.click();
  61 |         await new Promise(resolve => setTimeout(resolve,1000));
  62 |         await this.clickAddUserButton.click();
  63 |         await new Promise(resolve => setTimeout(resolve, 2000));
  64 |         await this.enterFulName.fill(Name);
  65 |         // // await this.enterEmployeeId.fill(empID);
  66 |         // // let generatedEmail = `${empID}@ICICIBANK.com`.toLowerCase();
  67 |
  68 |         // // // let generatedEmail = email;
  69 |         // // // if (empID.toLowerCase() === "Vinayan") {
  70 |         // // //     generatedEmail = `${empID}@ICICIBANK.com`; 
  71 |         // // // }
  72 |         // // await new Promise(resolve => setTimeout(resolve, 1000));
  73 |         // // await this.enterEmailAddress.fill(generatedEmail);
  74 |         // console.log(generatedEmail);
  75 |         await this.enterMobileNumber.fill(mobileNumber);
  76 |         await new Promise(resolve => setTimeout(resolve, 2000));
  77 |        // await this.selectApplicationAccess.click();
  78 |       //  await page2.locator('.ng-input > input').first().click();
  79 |       //  await page2.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chenn');
  80 |       //  await page2.getByText('Chennai Main Branch').click();
  81 |
  82 |       //  await page2.locator('#internal_user_applications').getByRole('textbox').click();
  83 |       //  await page2.getByText('USER MANAGEMENT').click();
  84 |       //  await page2.locator('#internal_user_roles').getByRole('textbox').click();
  85 |       //  await page2.getByText('LAM ID Maker', { exact: true }).click();
  86 |
  87 |       //  // await page.waitForLoadState();
  88 |       //   // await this.selectApplicationAccess.selectOption("USER MANAGEMENT");
  89 |
  90 |       //   // await this.selectUserRoles.selectOption("LAM ID MAKER");
  91 |       //   await new Promise(resolve => setTimeout(resolve, 2000));
  92 |       //   await this.clickSaveButton.click();
  93 |
  94 |       }
  95 |
  96 |   
  97 |    
  98 |   }
  99 |   
```