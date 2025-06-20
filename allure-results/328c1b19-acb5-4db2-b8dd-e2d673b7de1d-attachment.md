# Test info

- Name: LAM ID Module Tests >> Maker Flow >> TC_01_02: Create a Duplicate User for Maker
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:78:5

# Error details

```
Error: locator.textContent: Test ended.
Call log:
  - waiting for locator('div.toast-title').filter({ hasText: 'Task is already exist in checker queue' })

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:93:58
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import LAM_LoginPage from "../pages/lamlogin.js";
   3 |
   4 | // Test data
   5 | const TEST_DATA = {
   6 |   employeeId: "KishoreeKumar0112",
   7 |   get generatedEmail() {
   8 |     return `${this.employeeId}@ICICIBANK.com`;
   9 |   },
   10 |   users: {
   11 |     maker: { email: 'lam.id.mkr@fintuple.com', password: 'Icici@124' },
   12 |     checker: { email: 'lam.id.ckr@fintuple.com', password: 'Icici@124' }
   13 |   },
   14 |   urls: {
   15 |     base: 'https://cdi-r3.finwyze.com'
   16 |   }
   17 | };
   18 |
   19 | test.describe('LAM ID Module Tests', () => {
   20 |   let page;
   21 |   
   22 |   // Common functions
   23 |   const openTaskView = async (page) => {
   24 |     const newPage = await Promise.all([
   25 |       page.waitForEvent("popup"),
   26 |       page.locator('//a[text()="View Task"]').click(),
   27 |     ]).then(([newPage]) => newPage);
   28 |     
   29 |     await newPage.waitForLoadState();
   30 |     return newPage;
   31 |   };
   32 |
   33 |   const approveRejectTask = async (page, action, comment) => {
   34 |     await page.locator('(//i[@id="dropdown"])[1]').click();
   35 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
   36 |     await page.locator('#task_internal_user_comments').click();
   37 |     await page.locator('#task_internal_user_comments').fill(comment);
   38 |     await page.getByRole('button', { name: action }).click();
   39 |     await page.waitForTimeout(2000);
   40 |   };
   41 |
   42 |   // Maker Flow Tests
   43 |   test.describe('Maker Flow', () => {
   44 |     test.beforeEach(async ({ page }) => {
   45 |       const lamMaker = new LAM_LoginPage(page);
   46 |       await page.goto(TEST_DATA.urls.base);
   47 |       await lamMaker.loginLamMaker(TEST_DATA.users.maker.email, TEST_DATA.users.maker.password);
   48 |     });
   49 |
   50 |     test('TC_01_01: Create user as Maker', async ({ page }) => {
   51 |       const taskPage = await openTaskView(page);
   52 |       const lamPopup = new LAM_LoginPage(taskPage);
   53 |       
   54 |       await lamPopup.AddUser("Arunachalam", "9080365952");
   55 |       await taskPage.locator('//input[@id="internal_user_employeeId"]').fill(TEST_DATA.employeeId);
   56 |       await taskPage.locator('//input[@id="internal_user_emailAddress"]').fill(TEST_DATA.generatedEmail);
   57 |       
   58 |       // Fill form fields
   59 |       await taskPage.locator('.ng-input > input').first().click();
   60 |       await taskPage.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chennai');
   61 |       await taskPage.getByText('Chennai Main Branch').click();
   62 |       
   63 |       await taskPage.locator('#internal_user_applications').getByRole('textbox').click();
   64 |       await taskPage.getByText('USER MANAGEMENT').click();
   65 |       
   66 |       await taskPage.locator('#internal_user_roles').getByRole('textbox').click();
   67 |       await taskPage.getByText('LAM ID Maker', { exact: true }).click();
   68 |       
   69 |       await taskPage.locator('//button[@id="internal_user_submit"]').click();
   70 |       
   71 |       const successToast = taskPage.getByRole('alert', { name: 'Task Created Successfully' });
   72 |       await page.waitForTimeout(500);
   73 |       const toastText = await successToast.textContent();
   74 |       console.log("Success Toast Message:", toastText?.trim());
   75 |       await expect(successToast).toHaveText("Task Created Successfully");
   76 |     });
   77 |
   78 |     test('TC_01_02: Create a Duplicate User for Maker', async ({ page }) => {
   79 |       const taskPage = await openTaskView(page);
   80 |       const lamPopup = new LAM_LoginPage(taskPage);
   81 |       
   82 |       await lamPopup.AddUser("Arunachalam", "9080365952");
   83 |       await taskPage.locator('//input[@id="internal_user_employeeId"]').fill(TEST_DATA.employeeId);
   84 |       await taskPage.locator('//input[@id="internal_user_emailAddress"]').fill(TEST_DATA.generatedEmail);
   85 |       
   86 |       // Fill form fields (same as TC_01_01)
   87 |       // ...
   88 |       
   89 |       await taskPage.locator('//button[@id="internal_user_submit"]').click();
   90 |       
   91 |       const duplicateUserPopup = taskPage.locator('div.toast-title').filter({ hasText: 'Task is already exist in checker queue' });
   92 |       await page.waitForTimeout(500);
>  93 |       const toastTextDuplcate = await duplicateUserPopup.textContent();
      |                                                          ^ Error: locator.textContent: Test ended.
   94 |       console.log("Success Toast Message:", toastTextDuplcate?.trim());
   95 |       await expect(duplicateUserPopup).toHaveText("Task is already exist in checker queue");
   96 |     });
   97 |
   98 |     test('TC_02_01: Edit user as Maker', async ({ page }) => {
   99 |       const taskPage = await openTaskView(page);
  100 |       const lamPopup = new LAM_LoginPage(taskPage);
  101 |       
  102 |       await lamPopup.clickUser();
  103 |       await taskPage.locator('//input[@id="search"]').fill(TEST_DATA.generatedEmail);
  104 |       await new Promise(resolve => setTimeout(resolve, 2000));
  105 |       await taskPage.locator('//i[@id="dropdown"]').click();
  106 |       await taskPage.locator('//button[@id="Edit"]').click();
  107 |       
  108 |       const phoneNumber = taskPage.locator('//input[@id="internal_user_mobileNumber"]');
  109 |       await phoneNumber.click();
  110 |       await phoneNumber.press('Control+A');
  111 |       await phoneNumber.press('Backspace');
  112 |       await phoneNumber.fill('9080378965');
  113 |       
  114 |       await taskPage.locator('//button[@id="internal_user_submit"]').click();
  115 |     });
  116 |
  117 |     test('TC_03_01: Activate user as Maker', async ({ page }) => {
  118 |       const taskPage = await openTaskView(page);
  119 |       const lamPopup = new LAM_LoginPage(taskPage);
  120 |       
  121 |       await lamPopup.clickUser();
  122 |       await taskPage.locator('//input[@id="search"]').fill(TEST_DATA.generatedEmail);
  123 |       await taskPage.locator('//i[@id="dropdown"]').click();
  124 |       await taskPage.locator('//button[@id="Activate/Deactivate"]').click();
  125 |       await taskPage.locator('//textarea[@id="internal_user_comment"]').fill("Activate the User");
  126 |       await taskPage.locator('//button[@id="internal_user_submit"]').click();
  127 |     });
  128 |
  129 |     test('TC_04_01: Deactivate user as Maker', async ({ page }) => {
  130 |       const taskPage = await openTaskView(page);
  131 |       const lamPopup = new LAM_LoginPage(taskPage);
  132 |       
  133 |       await lamPopup.clickUser();
  134 |       await taskPage.locator('//input[@id="search"]').fill(TEST_DATA.generatedEmail);
  135 |       await taskPage.locator('//i[@id="dropdown"]').click();
  136 |       await taskPage.locator('//button[@id="Activate/Deactivate"]').click();
  137 |       await taskPage.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  138 |       await taskPage.locator('//button[@id="internal_user_submit"]').click();
  139 |     });
  140 |
  141 |     test('TC_05_02: Resubmit Task for Maker', async ({ page }) => {
  142 |       const taskPage = await openTaskView(page);
  143 |       
  144 |       await taskPage.locator('//input[@id="search"]').fill(TEST_DATA.generatedEmail);
  145 |       await taskPage.locator('//i[@id="dropdown"]').click();
  146 |       await taskPage.locator('//button[@id="Re-submit Task"]').click();
  147 |       await taskPage.locator('//textarea[@id="internal_user_comment"]').fill("Details to the User");
  148 |       await taskPage.locator('//button[@id="internal_user_submit"]').click();
  149 |     });
  150 |   });
  151 |
  152 |   // Checker Flow Tests
  153 |   test.describe('Checker Flow', () => {
  154 |     test.beforeEach(async ({ page }) => {
  155 |       const lamChecker = new LAM_LoginPage(page);
  156 |       await page.goto(TEST_DATA.urls.base);
  157 |       await lamChecker.loginLamMaker(TEST_DATA.users.checker.email, TEST_DATA.users.checker.password);
  158 |     });
  159 |
  160 |     test('TC_01_02: Reject user as Checker', async ({ page }) => {
  161 |       const taskPage = await openTaskView(page);
  162 |       await approveRejectTask(taskPage, 'Reject', 'Reject');
  163 |     });
  164 |
  165 |     test('TC_02_02: Approve Edit user as Checker', async ({ page }) => {
  166 |       const taskPage = await openTaskView(page);
  167 |       await approveRejectTask(taskPage, 'Approve', 'APPROVE');
  168 |     });
  169 |
  170 |     test('TC_03_02: Approve Activate user as Checker', async ({ page }) => {
  171 |       const taskPage = await openTaskView(page);
  172 |       await taskPage.locator('//input[@id="search"]').fill(TEST_DATA.generatedEmail);
  173 |       await approveRejectTask(taskPage, 'Approve', 'APPROVE');
  174 |     });
  175 |
  176 |     test('TC_04_02: Approve Deactivate user as Checker', async ({ page }) => {
  177 |       const taskPage = await openTaskView(page);
  178 |       await approveRejectTask(taskPage, 'Approve', 'APPROVE');
  179 |     });
  180 |
  181 |     test('TC_05_01: Reject Task for Checker', async ({ page }) => {
  182 |       const taskPage = await openTaskView(page);
  183 |       
  184 |       await taskPage.locator('//input[@id="search"]').fill(TEST_DATA.generatedEmail);
  185 |       await taskPage.locator('//i[@id="dropdown"]').click();
  186 |       await taskPage.locator('//button[@id="Activate/Deactivate"]').click();
  187 |       await taskPage.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  188 |       await taskPage.locator('//button[@id="task_activate_Reject"]').click();
  189 |     });
  190 |   });
  191 | });
  192 |
  193 |
```