# Test info

- Name: LAM ID Module Tests >> Maker Flow >> TC_01_01: Create user as Maker
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:19:5

# Error details

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "popup"
============================================================
    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:21:20
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import LAM_LoginPage from "../pages/lamlogin.js";
   3 | let page, page2;
   4 | let empId="KishoreeKumar01";
   5 | let generatedEmail = `${empId}@ICICIBANK.com`;
   6 |
   7 |
   8 |
   9 |
   10 | test.describe('LAM ID Module Tests', () => {
   11 |   
   12 |   test.describe('Maker Flow', () => {
   13 |     test.beforeEach(async ({ page }) => {
   14 |       const lamMaker = new LAM_LoginPage(page);
   15 |       await page.goto('https://cdi-r5.finwyze.com');
   16 |       await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
   17 |     });
   18 |
   19 |     test('TC_01_01: Create user as Maker', async ({ page }) => {
   20 |       page2 = await Promise.all([
>  21 |               page.waitForEvent("popup"), 
      |                    ^ Error: page.waitForEvent: Target page, context or browser has been closed
   22 |               page.locator('//a[text()="View Task"]').click(), 
   23 |               ]).then(([newPage]) => newPage);
   24 |               await page2.waitForLoadState()
   25 |     
   26 |       const lamPopup = new LAM_LoginPage(page2);
   27 |       await lamPopup.AddUser("Arunachalam", "9080365952");
   28 |       await page2.locator('//input[@id="internal_user_employeeId"]').fill(empId);
   29 |       await new Promise(resolve => setTimeout(resolve, 1000));
   30 |       await page2.locator('//input[@id="internal_user_emailAddress"]').fill(generatedEmail);
   31 |       await new Promise(resolve => setTimeout(resolve, 2000));
   32 |       await page2.locator('.ng-input > input').first().click();
   33 |       await page2.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chennai');
   34 |       await page2.getByText('Chennai Main Branch').click();
   35 |       await page2.locator('#internal_user_applications').getByRole('textbox').click();
   36 |       await page2.getByText('USER MANAGEMENT').click();
   37 |       await page2.locator('#internal_user_roles').getByRole('textbox').click();
   38 |       await page2.getByText('LAM ID Maker', { exact: true }).click();
   39 |       await new Promise(resolve => setTimeout(resolve, 2000));
   40 |       await page2.locator('//button[@id="internal_user_submit"]').click();
   41 |       await new Promise(resolve => setTimeout(resolve, 5000));
   42 |       const successToast = page2.getByRole('alert', { name: 'Task Created Successfully' });
   43 |       await new Promise(resolve => setTimeout(resolve, 500));
   44 |       const toastText = await successToast.textContent();
   45 |       console.log("Success Toast Message:", toastText?.trim());
   46 |       await expect(successToast).toHaveText("Task Created Successfully");
   47 |       
   48 |
   49 |     });
   50 |   });
   51 |   test.describe('Maker Flow', () => {
   52 |     test.beforeEach(async ({ page }) => {
   53 |       const lamMaker = new LAM_LoginPage(page);
   54 |       await page.goto('https://cdi-r5.finwyze.com');
   55 |       await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
   56 |     });
   57 |
   58 |   test('TC_01_02: Create a Duplicate User for Maker', async({page})=>{
   59 |
   60 |     page2 = await Promise.all([
   61 |       page.waitForEvent("popup"), 
   62 |       page.locator('//a[text()="View Task"]').click(), 
   63 |       ]).then(([newPage]) => newPage);
   64 |       await page2.waitForLoadState()
   65 |
   66 |       const lamPopup = new LAM_LoginPage(page2);
   67 |       await lamPopup.AddUser("Arunachalam", "9080365952");
   68 |       await page2.locator('//input[@id="internal_user_employeeId"]').fill(empId);
   69 |       await new Promise(resolve => setTimeout(resolve, 1000));
   70 |       await page2.locator('//input[@id="internal_user_emailAddress"]').fill(generatedEmail);
   71 |       await new Promise(resolve => setTimeout(resolve, 2000));
   72 |       await page2.locator('.ng-input > input').first().click();
   73 |       await page2.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chenn');
   74 |       await page2.getByText('Chennai Main Branch').click();
   75 |       await page2.locator('#internal_user_applications').getByRole('textbox').click();
   76 |       await page2.getByText('USER MANAGEMENT').click();
   77 |       await page2.locator('#internal_user_roles').getByRole('textbox').click();
   78 |       await page2.getByText('LAM ID Maker', { exact: true }).click();
   79 |       await new Promise(resolve => setTimeout(resolve, 2000));
   80 |       await page2.locator('//button[@id="internal_user_submit"]').click();
   81 |       await new Promise(resolve => setTimeout(resolve, 5000)); 
   82 |       const duplicateUserPopup = page2.getByRole('alert', { name: 'Task is already exist in checker queue' });
   83 |       await new Promise(resolve => setTimeout(resolve, 500));
   84 |      // console.log("Email address validation should be displayed in the popup message");
   85 |       // const toastText = await duplicateUserPopup.textContent();
   86 |       // console.log("Toast Message:", toastText?.trim());
   87 |       await expect(duplicateUserPopup).toHaveText("Task is already exist in checker queue");
   88 |
   89 |
   90 |
   91 |   });
   92 | });
   93 |
   94 |   test.describe('Checker Flow', () => {
   95 |     test.beforeEach(async ({ page }) => {
   96 |       const lamChecker = new LAM_LoginPage(page);
   97 |       await page.goto('https://cdi-r5.finwyze.com');
   98 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
   99 |     });
  100 |
  101 |     test('TC_01_02:Approve user as Checker', async ({ page }) => {
  102 |       await new Promise(resolve => setTimeout(resolve, 3000));
  103 |           page2 = await Promise.all([
  104 |             page.waitForEvent("popup"), 
  105 |             page.locator('//a[text()="View Task"]').click(), 
  106 |             ]).then(([newPage]) => newPage);
  107 |             await page2.waitForLoadState();
  108 |             await new Promise(resolve => setTimeout(resolve, 3000));
  109 |
  110 |       await page2.locator('(//i[@id="dropdown"])[1]').click();
  111 |       await page2.getByRole('button', { name: ' Approve/Reject' }).click();
  112 |       await new Promise(resolve => setTimeout(resolve, 1000));
  113 |       await page2.locator('#task_internal_user_comments').click();
  114 |       await new Promise(resolve => setTimeout(resolve, 2000));
  115 |       await page2.locator('#task_internal_user_comments').fill('APPROVE');
  116 |       await new Promise(resolve => setTimeout(resolve, 1000));
  117 |       await page2.getByRole('button', { name: 'Approve' }).click();
  118 |       await new Promise(resolve => setTimeout(resolve, 2000));
  119 |     });
  120 |   });
  121 |
```