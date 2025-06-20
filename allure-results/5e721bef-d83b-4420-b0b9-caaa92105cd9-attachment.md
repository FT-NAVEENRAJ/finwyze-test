# Test info

- Name: LAM ID Module Tests >> Maker Flow >> TC_01_01: Create user as Maker
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:19:5

# Error details

```
Error: locator.click: Test timeout of 100000ms exceeded.
Call log:
  - waiting for locator('//button[text()="Add User "]')

    at LAM_LoginPage.AddUser (C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\pages\lamlogin.js:62:39)
    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:27:7
```

# Page snapshot

```yaml
- img "loading..."
- list:
  - listitem
  - listitem
  - listitem
  - listitem
  - listitem
- img
- button "Task"
- button "Users"
- button "Reports"
- tablist:
  - tab "My Tasks" [selected]
  - tab "All Tasks"
- tabpanel "My Tasks":
  - text: Show
  - combobox:
    - option "10"
    - option "25" [selected]
    - option "50"
    - option "100"
  - text: Entries
  - searchbox "Search"
  - button ""
  - button ""
  - button ""
  - button ""
  - table:
    - rowgroup:
      - row "Flag  Task ID  Date & Time  Task Type  For  Reference ID  From  Role  Status  Actions":
        - cell "Flag "
        - cell "Task ID "
        - cell "Date & Time "
        - cell "Task Type "
        - cell "For "
        - cell "Reference ID "
        - cell "From "
        - cell "Role "
        - cell "Status "
        - cell "Actions"
    - rowgroup:
      - row "+7D TR25032500710 25-03-2025 06:03 PM EDITUSER USER TESTREVIEW1234@EXT.ICICIBANK.COM NILESH GHAGA LAM ID CHECKER REJECTED ":
        - cell "+7D"
        - cell "TR25032500710"
        - cell "25-03-2025 06:03 PM"
        - cell "EDITUSER"
        - cell "USER"
        - cell "TESTREVIEW1234@EXT.ICICIBANK.COM"
        - cell "NILESH GHAGA"
        - cell "LAM ID CHECKER"
        - cell "REJECTED"
        - cell ""
      - row "+7D TR25032000665 25-03-2025 05:58 PM ACTIVATEUSER USER TESTSAI1234@EXT.ICICIBANK.COM NILESH GHAGA LAM ID CHECKER REJECTED ":
        - cell "+7D"
        - cell "TR25032000665"
        - cell "25-03-2025 05:58 PM"
        - cell "ACTIVATEUSER"
        - cell "USER"
        - cell "TESTSAI1234@EXT.ICICIBANK.COM"
        - cell "NILESH GHAGA"
        - cell "LAM ID CHECKER"
        - cell "REJECTED"
        - cell ""
      - row "+7D TR25032400699 25-03-2025 05:58 PM ADDUSER USER DEMOFROMPLAYWRIGHTFORSUMANTH@ICICIBANK.COM NILESH GHAGA LAM ID CHECKER REJECTED ":
        - cell "+7D"
        - cell "TR25032400699"
        - cell "25-03-2025 05:58 PM"
        - cell "ADDUSER"
        - cell "USER"
        - cell "DEMOFROMPLAYWRIGHTFORSUMANTH@ICICIBANK.COM"
        - cell "NILESH GHAGA"
        - cell "LAM ID CHECKER"
        - cell "REJECTED"
        - cell ""
    - rowgroup
  - text: Showing 1 to 3 of 3 Entries
  - navigation "Pagination":
    - list:
      - listitem: « Previous page
      - listitem: You're on page 1
      - listitem: Next page »
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
  34 |       await this.emailInput.waitFor();
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
  60 |         //await this.clickUserButton.click();
  61 |         await new Promise(resolve => setTimeout(resolve,1000));
> 62 |         await this.clickAddUserButton.click();
     |                                       ^ Error: locator.click: Test timeout of 100000ms exceeded.
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