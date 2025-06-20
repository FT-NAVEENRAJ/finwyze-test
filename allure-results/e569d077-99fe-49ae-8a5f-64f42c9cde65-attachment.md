# Test info

- Name: LAM ID Module Tests >> Maker Flow   >> TC_01_02: Attempt to create a duplicate user and verify system response.
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:56:3

# Error details

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "popup"
============================================================
    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:59:12
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import LAM_LoginPage from "../pages/lamlogin.js";
   3 | let page;
   4 | let empId="testmail14";
   5 | let generatedEmail = `${empId}@ICICIBANK.com`;
   6 |
   7 | ////tr[td//span[@id="Active"]]//i[@class="dropdown-toggle fa fa-caret-down pl-10"]
   8 |
   9 |
   10 | test.describe('LAM ID Module Tests', () => {
   11 |   
   12 |   test.describe('Maker Flow  ', () => {
   13 |     test.beforeEach(async ({ page }) => {
   14 |       const lamMaker = new LAM_LoginPage(page);
   15 |       await page.goto('https://cdi-r3.finwyze.com');
   16 |       await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
   17 |     });
   18 |     test('TC_01_01:Successfully create a new user as Maker.', async ({ page }) => {
   19 |       page = await Promise.all([
   20 |               page.waitForEvent("popup"), 
   21 |               page.locator('//a[text()="View Task"]').click(), 
   22 |               ]).then(([newPage]) => newPage);
   23 |               await page.waitForLoadState()
   24 |     
   25 |       const lamPopup = new LAM_LoginPage(page);
   26 |       await lamPopup.AddUser("Arunachalam", "9080365952");
   27 |       await page.locator('//input[@id="internal_user_employeeId"]').fill(empId);
   28 |       await new Promise(resolve => setTimeout(resolve, 1000));
   29 |       await page.locator('//input[@id="internal_user_emailAddress"]').fill(generatedEmail);
   30 |       await new Promise(resolve => setTimeout(resolve, 2000));
   31 |       await page.locator('.ng-input > input').first().click();
   32 |       await page.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chennai');
   33 |       await page.getByText('Chennai Main Branch').click();
   34 |       await page.locator('#internal_user_applications').getByRole('textbox').click();
   35 |       await page.getByText('USER MANAGEMENT').click();
   36 |       await page.locator('#internal_user_roles').getByRole('textbox').click();
   37 |       await page.getByText('LAM ID Maker', { exact: true }).click();
   38 |       await new Promise(resolve => setTimeout(resolve, 2000));
   39 |       await page.locator('//button[@id="internal_user_submit"]').click();
   40 |       await new Promise(resolve => setTimeout(resolve, 5000));
   41 |       const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
   42 |       await new Promise(resolve => setTimeout(resolve, 500));
   43 |       const toastText = await successToast.textContent();
   44 |       console.log("Toast Message:", toastText?.trim());
   45 |       await expect(successToast).toHaveText("Task Created Successfully");
   46 |       
   47 |
   48 |     });
   49 |     });
   50 |   test.describe('Maker Flow  ', () => {
   51 |     test.beforeEach(async ({ page }) => {
   52 |       const lamMaker = new LAM_LoginPage(page);
   53 |       await page.goto('https://cdi-r3.finwyze.com');
   54 |       await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
   55 |     });
   56 |   test('TC_01_02: Attempt to create a duplicate user and verify system response.', async({page})=>{
   57 |
   58 |     page = await Promise.all([
>  59 |       page.waitForEvent("popup"), 
      |            ^ Error: page.waitForEvent: Target page, context or browser has been closed
   60 |       page.locator('//a[text()="View Task"]').click(), 
   61 |       ]).then(([newPage]) => newPage);
   62 |       await page.waitForLoadState()
   63 |
   64 |       const lamPopup = new LAM_LoginPage(page);
   65 |       await lamPopup.AddUser("Arunachalam", "9080365952");
   66 |       await page.locator('//input[@id="internal_user_employeeId"]').fill(empId);
   67 |       await new Promise(resolve => setTimeout(resolve, 1000));
   68 |       await page.locator('//input[@id="internal_user_emailAddress"]').fill(generatedEmail);
   69 |       await new Promise(resolve => setTimeout(resolve, 2000));
   70 |       await page.locator('.ng-input > input').first().click();
   71 |       await page.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chennai');
   72 |       await page.getByText('Chennai Main Branch').click();
   73 |       await page.locator('#internal_user_applications').getByRole('textbox').click();
   74 |       await page.getByText('USER MANAGEMENT').click();
   75 |       await page.locator('#internal_user_roles').getByRole('textbox').click();
   76 |       await page.getByText('LAM ID Maker', { exact: true }).click();
   77 |       await new Promise(resolve => setTimeout(resolve, 2000));
   78 |       await page.locator('//button[@id="internal_user_submit"]').click();
   79 |       await new Promise(resolve => setTimeout(resolve, 5000)); 
   80 |       const duplicateUserPopup = page.locator('div.toast-title').filter({ hasText: 'Task is already exist in checker queue' });
   81 |       await new Promise(resolve => setTimeout(resolve, 500));
   82 |       const toastTextDuplcate = await duplicateUserPopup.textContent();
   83 |       console.log("Toast Message:", toastTextDuplcate?.trim());
   84 |       await expect(duplicateUserPopup).toHaveText("Task is already exist in checker queue");
   85 |
   86 |     });
   87 |     });
   88 |   test.describe('Checker Flow', () => {
   89 |     test.beforeEach(async ({ page }) => {
   90 |       const lamChecker = new LAM_LoginPage(page);
   91 |       await page.goto('https://cdi-r3.finwyze.com');
   92 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
   93 |     });
   94 |     test('TC_01_03: Reject the user creation task as Checker.', async ({ page }) => {
   95 |       await new Promise(resolve => setTimeout(resolve, 3000));
   96 |           page = await Promise.all([
   97 |             page.waitForEvent("popup"), 
   98 |             page.locator('//a[text()="View Task"]').click(), 
   99 |             ]).then(([newPage]) => newPage);
  100 |             await page.waitForLoadState();
  101 |             await new Promise(resolve => setTimeout(resolve, 3000));
  102 |       await page.locator('//input[@id="search"]').fill(generatedEmail);  
  103 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  104 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  105 |       await new Promise(resolve => setTimeout(resolve, 1000));
  106 |       await page.locator('#task_internal_user_comments').click();
  107 |       await new Promise(resolve => setTimeout(resolve, 2000));
  108 |       await page.locator('#task_internal_user_comments').fill('Reject');
  109 |       await new Promise(resolve => setTimeout(resolve, 1000));
  110 |       await page.getByRole('button', { name: 'Reject' }).click();
  111 |       await new Promise(resolve => setTimeout(resolve, 2000));
  112 |       const successToast = page.getByRole('alert', { name: 'Task Rejected Successfully' });
  113 |       await new Promise(resolve => setTimeout(resolve, 500));
  114 |       const toastText = await successToast.textContent();
  115 |       console.log("Toast Message:", toastText?.trim());
  116 |       await expect(successToast).toHaveText("Task Rejected Successfully");
  117 |       
  118 |     });
  119 |     });
  120 |   test.describe('Maker Flow  ', () => {
  121 |     test.beforeEach(async ({ page }) => {
  122 |       const lamChecker = new LAM_LoginPage(page);
  123 |       await page.goto('https://cdi-r3.finwyze.com');
  124 |       await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  125 |     });
  126 |     test('TC_01_04: Resubmit the rejected task as Maker.', async ({ page }) => {
  127 |       await new Promise(resolve => setTimeout(resolve, 3000));
  128 |           page = await Promise.all([
  129 |             page.waitForEvent("popup"), 
  130 |             page.locator('//a[text()="View Task"]').click(), 
  131 |             ]).then(([newPage]) => newPage);
  132 |             await page.waitForLoadState();
  133 |             await new Promise(resolve => setTimeout(resolve, 3000));
  134 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  135 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  136 |       await new Promise(resolve => setTimeout(resolve, 2000));
  137 |       await page.locator('//button[@id="Re-submit Task"]').click();
  138 |       await new Promise(resolve => setTimeout(resolve, 1000));
  139 |       await page.locator('#internal_user_comment').click();
  140 |       await new Promise(resolve => setTimeout(resolve, 2000));
  141 |       await page.locator('#internal_user_comment').fill('Resubmit the task');
  142 |       await new Promise(resolve => setTimeout(resolve, 1000));
  143 |       await page.locator('//button[@id="internal_user_submit"]').click();
  144 |       await new Promise(resolve => setTimeout(resolve, 2000));
  145 |       const successToast = page.getByRole('alert', { name: 'Task Re-submitted Successfully' });
  146 |       await new Promise(resolve => setTimeout(resolve, 500));
  147 |       const toastText = await successToast.textContent();
  148 |       console.log("Toast Message:", toastText?.trim());
  149 |       await expect(successToast).toHaveText("Task Re-submitted Successfully");
  150 |     });
  151 |     });
  152 |   test.describe('Checker Flow', () => {
  153 |     test.beforeEach(async ({ page }) => {
  154 |       const lamChecker = new LAM_LoginPage(page);
  155 |       await page.goto('https://cdi-r3.finwyze.com');
  156 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  157 |     });
  158 |     test('TC_01_05: Approve the user creation task as Checker.', async ({ page }) => {
  159 |       await new Promise(resolve => setTimeout(resolve, 3000));
```