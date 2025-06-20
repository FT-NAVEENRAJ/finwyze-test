# Test info

- Name: LAM ID Module Tests >> Checker Flow >> TC_01_03: Reject the user creation task as Checker.
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:110:5

# Error details

```
Error: page.waitForEvent: Test timeout of 100000ms exceeded.
=========================== logs ===========================
waiting for event "popup"
============================================================
    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:113:18
```

# Page snapshot

```yaml
- heading "You Don't Have Access To The Application" [level=3]
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
   13 |     test.beforeEach(async ({ page }) => {
   14 |       const lamMaker = new LAM_LoginPage(page);
   15 |       await page.goto('https://cdi-r3.finwyze.com');
   16 |       await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
   17 |     });
   18 |
   19 |     test('TC_01_01: Successfully create a new user as Maker.', async ({ page }) => {
   20 |       page = await Promise.all([
   21 |               page.waitForEvent("popup"), 
   22 |               page.locator('//a[text()="View Task"]').click(), 
   23 |               ]).then(([newPage]) => newPage);
   24 |               await page.waitForLoadState()
   25 |     
   26 |       const lamPopup = new LAM_LoginPage(page);
   27 |       await lamPopup.AddUser("Arunachalam", "9080365952");
   28 |       await page.locator('//input[@id="internal_user_employeeId"]').fill(empId);
   29 |       await new Promise(resolve => setTimeout(resolve, 1000));
   30 |       await page.locator('//input[@id="internal_user_emailAddress"]').fill(generatedEmail);
   31 |       await new Promise(resolve => setTimeout(resolve, 2000));
   32 |       await page.locator('.ng-input > input').first().click();
   33 |       await page.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chennai');
   34 |       await page.getByText('Chennai Main Branch').click();
   35 |       await page.locator('#internal_user_applications').getByRole('textbox').click();
   36 |       await page.getByText('USER MANAGEMENT').click();
   37 |       await page.locator('#internal_user_roles').getByRole('textbox').click();
   38 |       await page.getByText('LAM ID Maker', { exact: true }).click();
   39 |       await new Promise(resolve => setTimeout(resolve, 2000));
   40 |       await page.locator('//button[@id="internal_user_submit"]').click();
   41 |       await new Promise(resolve => setTimeout(resolve, 5000));
   42 |       const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
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
   54 |       await page.goto('https://cdi-r3.finwyze.com');
   55 |       await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
   56 |     });
   57 |
   58 |   test('TC_01_02: Attempt to create a duplicate user and verify system response.', async({page})=>{
   59 |
   60 |     page = await Promise.all([
   61 |       page.waitForEvent("popup"), 
   62 |       page.locator('//a[text()="View Task"]').click(), 
   63 |       ]).then(([newPage]) => newPage);
   64 |       await page.waitForLoadState()
   65 |
   66 |       const lamPopup = new LAM_LoginPage(page);
   67 |       await lamPopup.AddUser("Arunachalam", "9080365952");
   68 |       await page.locator('//input[@id="internal_user_employeeId"]').fill(empId);
   69 |       await new Promise(resolve => setTimeout(resolve, 1000));
   70 |       await page.locator('//input[@id="internal_user_emailAddress"]').fill(generatedEmail);
   71 |       await new Promise(resolve => setTimeout(resolve, 2000));
   72 |       await page.locator('.ng-input > input').first().click();
   73 |       await page.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chennai');
   74 |       await page.getByText('Chennai Main Branch').click();
   75 |       await page.locator('#internal_user_applications').getByRole('textbox').click();
   76 |       await page.getByText('USER MANAGEMENT').click();
   77 |       await page.locator('#internal_user_roles').getByRole('textbox').click();
   78 |       await page.getByText('LAM ID Maker', { exact: true }).click();
   79 |       await new Promise(resolve => setTimeout(resolve, 2000));
   80 |       await page.locator('//button[@id="internal_user_submit"]').click();
   81 |       await new Promise(resolve => setTimeout(resolve, 5000)); 
   82 |
   83 |       // const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
   84 |       // await new Promise(resolve => setTimeout(resolve, 500));
   85 |       // const toastText = await successToast.textContent();
   86 |       // console.log("Success Toast Message:", toastText?.trim());
   87 |       // await expect(successToast).toHaveText("Task Created Successfully");
   88 |       
   89 |       const duplicateUserPopup = page.locator('div.toast-title').filter({ hasText: 'Task is already exist in checker queue' });
   90 |       await new Promise(resolve => setTimeout(resolve, 500));
   91 |       const toastTextDuplcate = await duplicateUserPopup.textContent();
   92 |       console.log("Success Toast Message:", toastTextDuplcate?.trim());
   93 |      // console.log("Email address validation should be displayed in the popup message");
   94 |       // const toastText = await duplicateUserPopup.textContent();
   95 |       // console.log("Toast Message:", toastText?.trim());
   96 |       await expect(duplicateUserPopup).toHaveText("Task is already exist in checker queue");
   97 |
   98 |
   99 |
  100 |   });
  101 | });
  102 |
  103 |   test.describe('Checker Flow', () => {
  104 |     test.beforeEach(async ({ page }) => {
  105 |       const lamChecker = new LAM_LoginPage(page);
  106 |       await page.goto('https://cdi-r3.finwyze.com');
  107 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  108 |     });
  109 |
  110 |     test('TC_01_03: Reject the user creation task as Checker.', async ({ page }) => {
  111 |       await new Promise(resolve => setTimeout(resolve, 3000));
  112 |           page = await Promise.all([
> 113 |             page.waitForEvent("popup"), 
      |                  ^ Error: page.waitForEvent: Test timeout of 100000ms exceeded.
  114 |             page.locator('//a[text()="View Task"]').click(), 
  115 |             ]).then(([newPage]) => newPage);
  116 |             await page.waitForLoadState();
  117 |             await new Promise(resolve => setTimeout(resolve, 3000));
  118 |
  119 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  120 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  121 |       await new Promise(resolve => setTimeout(resolve, 1000));
  122 |       await page.locator('#task_internal_user_comments').click();
  123 |       await new Promise(resolve => setTimeout(resolve, 2000));
  124 |       await page.locator('#task_internal_user_comments').fill('Reject');
  125 |       await new Promise(resolve => setTimeout(resolve, 1000));
  126 |       await page.getByRole('button', { name: 'Reject' }).click();
  127 |       await new Promise(resolve => setTimeout(resolve, 2000));
  128 |     });
  129 |   });
  130 |
  131 |
  132 |   test.describe('Maker Flow', () => {
  133 |     test.beforeEach(async ({ page }) => {
  134 |       const lamChecker = new LAM_LoginPage(page);
  135 |       await page.goto('https://cdi-r3.finwyze.com');
  136 |       await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  137 |     });
  138 |
  139 |     test('TC_01_04 (Retry): Resubmit the rejected task as Maker.', async ({ page }) => {
  140 |       await new Promise(resolve => setTimeout(resolve, 3000));
  141 |           page = await Promise.all([
  142 |             page.waitForEvent("popup"), 
  143 |             page.locator('//a[text()="View Task"]').click(), 
  144 |             ]).then(([newPage]) => newPage);
  145 |             await page.waitForLoadState();
  146 |             await new Promise(resolve => setTimeout(resolve, 3000));
  147 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  148 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  149 |       await new Promise(resolve => setTimeout(resolve, 2000));
  150 |       await page.locator('//button[@id="Re-submit Task"]').click();
  151 |       await new Promise(resolve => setTimeout(resolve, 1000));
  152 |       await page.locator('#internal_user_comment').click();
  153 |       await new Promise(resolve => setTimeout(resolve, 2000));
  154 |       await page.locator('#internal_user_comment').fill('Resubit the task');
  155 |       await new Promise(resolve => setTimeout(resolve, 1000));
  156 |       await page.locator('//button[@id="internal_user_submit"]').click();
  157 |       await new Promise(resolve => setTimeout(resolve, 2000));
  158 |     });
  159 |   });
  160 |
  161 |   test.describe('Checker Flow', () => {
  162 |     test.beforeEach(async ({ page }) => {
  163 |       const lamChecker = new LAM_LoginPage(page);
  164 |       await page.goto('https://cdi-r3.finwyze.com');
  165 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  166 |     });
  167 |
  168 |     test('TC_01_05 (Approval): Approve the user creation task as Checker.', async ({ page }) => {
  169 |       await new Promise(resolve => setTimeout(resolve, 3000));
  170 |           page = await Promise.all([
  171 |             page.waitForEvent("popup"), 
  172 |             page.locator('//a[text()="View Task"]').click(), 
  173 |             ]).then(([newPage]) => newPage);
  174 |             await page.waitForLoadState();
  175 |             await new Promise(resolve => setTimeout(resolve, 3000));
  176 |
  177 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  178 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  179 |       await new Promise(resolve => setTimeout(resolve, 1000));
  180 |       await page.locator('#task_internal_user_comments').click();
  181 |       await new Promise(resolve => setTimeout(resolve, 2000));
  182 |       await page.locator('#task_internal_user_comments').fill('Approve');
  183 |       await new Promise(resolve => setTimeout(resolve, 1000));
  184 |       await page.getByRole('button', { name: 'Approve' }).click();
  185 |       await new Promise(resolve => setTimeout(resolve, 2000));
  186 |     });
  187 |   });
  188 |
  189 |   // test.describe('Checker Flow',()=>{
  190 |   //   test.beforeEach(async ({ page }) => {
  191 |   //     const lamChecker = new LAM_LoginPage(page);
  192 |   //     await page.goto('https://cdi-r3.finwyze.com');
  193 |   //     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  194 |   //   });
  195 |   //   test("TC_05_01: Reject Task for custody Checker",async({})=>{
  196 |   //     await new Promise(resolve => setTimeout(resolve, 3000));
  197 |   //     page = await Promise.all([
  198 |   //       page.waitForEvent("popup"), 
  199 |   //       page.locator('//a[text()="View Task"]').click(), 
  200 |   //       ]).then(([newPage]) => newPage);
  201 |   //       await page.waitForLoadState();
  202 |   //       await new Promise(resolve => setTimeout(resolve, 3000));
  203 |   //     await page.locator('//input[@id="search"]').fill(generatedEmail);
  204 |   //     await page.locator('//i[@id="dropdown"]').click();
  205 |   //     await page.locator('//button[@id="Activate/Deactivate"]').click();
  206 |   //     await page.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  207 |   //     await page.locator('//button[@id="task_activate_Reject"]').click();
  208 |   //     await new Promise(resolve => setTimeout(resolve, 2000));
  209 |   //   });
  210 |   
  211 |   // test.describe('Maker Flow',()=>{
  212 |   //   test.beforeEach(async({page})=>{
  213 |   //     const lamMaker = new LAM_LoginPage(page);
```