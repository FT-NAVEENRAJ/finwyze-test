# Test info

- Name: LAM ID Module Tests >> Checker Flow >> TC_01_02:Approve user as Checker
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:110:5

# Error details

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "popup"
============================================================
    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:113:18
```

# Test source

```ts
   13 |     test.beforeEach(async ({ page }) => {
   14 |       const lamMaker = new LAM_LoginPage(page);
   15 |       await page.goto('https://cdi-r3.finwyze.com');
   16 |       await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
   17 |     });
   18 |
   19 |     test('TC_01_01: Create user as Maker', async ({ page }) => {
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
   58 |   test('TC_01_02: Create a Duplicate User for Maker', async({page})=>{
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
  106 |       await page.goto('https://cdi-r5.finwyze.com');
  107 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  108 |     });
  109 |
  110 |     test('TC_01_02:Approve user as Checker', async ({ page }) => {
  111 |       await new Promise(resolve => setTimeout(resolve, 3000));
  112 |           page = await Promise.all([
> 113 |             page.waitForEvent("popup"), 
      |                  ^ Error: page.waitForEvent: Target page, context or browser has been closed
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
  124 |       await page.locator('#task_internal_user_comments').fill('APPROVE');
  125 |       await new Promise(resolve => setTimeout(resolve, 1000));
  126 |       await page.getByRole('button', { name: 'Approve' }).click();
  127 |       await new Promise(resolve => setTimeout(resolve, 2000));
  128 |     });
  129 |   });
  130 |
  131 |   // test.describe('Checker Flow',()=>{
  132 |   //   test.beforeEach(async ({ page }) => {
  133 |   //     const lamChecker = new LAM_LoginPage(page);
  134 |   //     await page.goto('https://cdi-r5.finwyze.com');
  135 |   //     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  136 |   //   });
  137 |     // test("TC_05_01: Reject Task for custody Checker",async({})=>{
  138 |     //   await new Promise(resolve => setTimeout(resolve, 3000));
  139 |     //   // // page = await Promise.all([
  140 |     //   // //   page.waitForEvent("popup"), 
  141 |     //   // //   page.locator('//a[text()="View Task"]').click(), 
  142 |     //   // //   ]).then(([newPage]) => newPage);
  143 |     //   //   await page.waitForLoadState();
  144 |     //     await new Promise(resolve => setTimeout(resolve, 3000));
  145 |     //   await page.locator('//input[@id="search"]').fill(generatedEmail);
  146 |     //   await page.locator('//i[@id="dropdown"]').click();
  147 |     //   await page.locator('//button[@id="Activate/Deactivate"]').click();
  148 |     //   await page.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  149 |     //   await page.locator('//button[@id="task_activate_Reject"]').click();
  150 |     //   await new Promise(resolve => setTimeout(resolve, 2000));
  151 |     // });
  152 |   
  153 |   // test.describe('Maker Flow',()=>{
  154 |   //   test.beforeEach(async({page})=>{
  155 |   //     const lamMaker = new LAM_LoginPage(page);
  156 |   //     await page.goto('https://cdi-r5.finwyze.com');
  157 |   //     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  158 |   //   });
  159 |   
  160 |   //   test('TC_05_02: Update the details to click Resubmit the task for Maker ', async ({}) => {
  161 |   //     page = await Promise.all([
  162 |   //       page.waitForEvent("popup"), 
  163 |   //       page.locator('//a[text()="View Task"]').click(), 
  164 |   //       ]).then(([newPage]) => newPage);
  165 |   //       await page.waitForLoadState();
  166 |   //       await new Promise(resolve => setTimeout(resolve, 3000));
  167 |   
  168 |   //       await page.locator('//input[@id="search"]').fill(generatedEmail);
  169 |   //       await page.locator('//i[@id="dropdown"]').click();
  170 |   //       await page.locator('//button[@id="Re-submit Task"]').click();
  171 |   //       await page.locator('//textarea[@id="internal_user_comment"]').fill("Details to  the User");
  172 |   //       await page.locator('//button[@id="internal_user_submit"]').click();
  173 |   //       await new Promise(resolve => setTimeout(resolve, 2000));
  174 |   
  175 |   //   });
  176 |   
  177 |   // });
  178 |   //});
  179 |
  180 | //Scenario 2
  181 |
  182 | // test.describe('Maker Flow',()=>{
  183 | //   test.beforeEach(async ({ page }) => {
  184 | //     const lamMaker = new LAM_LoginPage(page);
  185 | //     await page.goto('https://cdi-r5.finwyze.com');
  186 | //     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  187 | //   });
  188 |
  189 | //   test('TC_02_01: Edit user as Maker ', async ({ page }) => {
  190 | //     page = await Promise.all([
  191 | //             page.waitForEvent("popup"), 
  192 | //             page.locator('//a[text()="View Task"]').click(), 
  193 | //             ]).then(([newPage]) => newPage);
  194 | //             await page.waitForLoadState()
  195 |   
  196 | //     const lamPopup = new LAM_LoginPage(page);
  197 | //     await lamPopup.clickUser();
  198 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  199 | //     await page.locator('//input[@id="search"]').fill(generatedEmail);
  200 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  201 | //     await page.locator('//i[@id="dropdown"]').click();
  202 | //     await page.locator('//button[@id="Edit"]').click();
  203 | //     const phoneNumber = page.locator('//input[@id="internal_user_mobileNumber"]');
  204 | //     phoneNumber.click();
  205 | //     await new Promise(resolve => setTimeout(resolve, 1000));
  206 | //     await phoneNumber.press('Control+A');
  207 | //     await phoneNumber.press('Backspace'); 
  208 | //     await phoneNumber.fill('9080378965');
  209 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  210 | //     await page.locator('//button[@id="internal_user_submit"]').click();
  211 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  212 | //   });
  213 |   
```