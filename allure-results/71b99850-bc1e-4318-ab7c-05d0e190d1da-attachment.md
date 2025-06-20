# Test info

- Name: Checker Flow >> TC_01_02:Approve user as Checker
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:110:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://cdi-r5.finwyze.com/", waiting until "load"

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:106:18
```

# Test source

```ts
   6 |
   7 |
   8 |
   9 |
   10 | test.describe('LAM ID Module Tests', () => {
   11 |   
   12 |   test.describe('Maker Flow', () => {
   13 |     test.beforeAll(async ({ page }) => {
   14 |       const lamMaker = new LAM_LoginPage(page);
   15 |       await page.goto('https://cdi-r5.finwyze.com');
   16 |       await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
   17 |
   18 |       test('TC_01_01: Create user as Maker', async ({ page }) => {
   19 |         // page = await Promise.all([
   20 |         //         page.waitForEvent("popup"), 
   21 |         //         page.locator('//a[text()="View Task"]').click(), 
   22 |         //         ]).then(([newPage]) => newPage);
   23 |         //         await page.waitForLoadState()
   24 |       
   25 |         const lamPopup = new LAM_LoginPage(page);
   26 |         await lamPopup.AddUser("Arunachalam", "9080365952");
   27 |         await page.locator('//input[@id="internal_user_employeeId"]').fill(empId);
   28 |         await new Promise(resolve => setTimeout(resolve, 1000));
   29 |         await page.locator('//input[@id="internal_user_emailAddress"]').fill(generatedEmail);
   30 |         await new Promise(resolve => setTimeout(resolve, 2000));
   31 |         await page.locator('.ng-input > input').first().click();
   32 |         await page.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chennai');
   33 |         await page.getByText('Chennai Main Branch').click();
   34 |         await page.locator('#internal_user_applications').getByRole('textbox').click();
   35 |         await page.getByText('USER MANAGEMENT').click();
   36 |         await page.locator('#internal_user_roles').getByRole('textbox').click();
   37 |         await page.getByText('LAM ID Maker', { exact: true }).click();
   38 |         await new Promise(resolve => setTimeout(resolve, 2000));
   39 |         await page.locator('//button[@id="internal_user_submit"]').click();
   40 |         await new Promise(resolve => setTimeout(resolve, 5000));
   41 |         const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
   42 |         await new Promise(resolve => setTimeout(resolve, 500));
   43 |         const toastText = await successToast.textContent();
   44 |         console.log("Success Toast Message:", toastText?.trim());
   45 |         await expect(successToast).toHaveText("Task Created Successfully");
   46 |         
   47 |   
   48 |       });
   49 |
   50 |     });
   51 |
   52 |    
   53 |   });
   54 |   // test.describe('Maker Flow', () => {
   55 |   //   // test.beforeEach(async ({ page }) => {
   56 |   //   //   const lamMaker = new LAM_LoginPage(page);
   57 |   //   //   await page.goto('https://cdi-r5.finwyze.com');
   58 |   //   //   await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
   59 |   //   // });
   60 |
   61 |   test('TC_01_02: Create a Duplicate User for Maker', async({page})=>{
   62 |
   63 |     // page = await Promise.all([
   64 |     //   page.waitForEvent("popup"), 
   65 |     //   page.locator('//a[text()="View Task"]').click(), 
   66 |     //   ]).then(([newPage]) => newPage);
   67 |     //   await page.waitForLoadState()
   68 |
   69 |       const lamPopup = new LAM_LoginPage(page);
   70 |       await lamPopup.AddUser("Arunachalam", "9080365952");
   71 |       await page.locator('//input[@id="internal_user_employeeId"]').fill(empId);
   72 |       await new Promise(resolve => setTimeout(resolve, 1000));
   73 |       await page.locator('//input[@id="internal_user_emailAddress"]').fill(generatedEmail);
   74 |       await new Promise(resolve => setTimeout(resolve, 2000));
   75 |       await page.locator('.ng-input > input').first().click();
   76 |       await page.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chennai');
   77 |       await page.getByText('Chennai Main Branch').click();
   78 |       await page.locator('#internal_user_applications').getByRole('textbox').click();
   79 |       await page.getByText('USER MANAGEMENT').click();
   80 |       await page.locator('#internal_user_roles').getByRole('textbox').click();
   81 |       await page.getByText('LAM ID Maker', { exact: true }).click();
   82 |       await new Promise(resolve => setTimeout(resolve, 2000));
   83 |       await page.locator('//button[@id="internal_user_submit"]').click();
   84 |       await new Promise(resolve => setTimeout(resolve, 5000)); 
   85 |
   86 |       // const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
   87 |       // await new Promise(resolve => setTimeout(resolve, 500));
   88 |       // const toastText = await successToast.textContent();
   89 |       // console.log("Success Toast Message:", toastText?.trim());
   90 |       // await expect(successToast).toHaveText("Task Created Successfully");
   91 |       
   92 |       const duplicateUserPopup = page.locator('div.toast-title').filter({ hasText: 'Task is already exist in checker queue' });
   93 |       await new Promise(resolve => setTimeout(resolve, 500));
   94 |       const toastTextDuplcate = await duplicateUserPopup.textContent();
   95 |       console.log("Success Toast Message:", toastTextDuplcate?.trim());
   96 |      // console.log("Email address validation should be displayed in the popup message");
   97 |       // const toastText = await duplicateUserPopup.textContent();
   98 |       // console.log("Toast Message:", toastText?.trim());
   99 |       await expect(duplicateUserPopup).toHaveText("Task is already exist in checker queue");
  100 |
  101 |
  102 |
  103 |   });
  104 | });
  105 |
> 106 |   test.describe('Checker Flow', () => {
      |                  ^ Error: page.goto: Target page, context or browser has been closed
  107 |     test.beforeEach(async ({ page }) => {
  108 |       const lamChecker = new LAM_LoginPage(page);
  109 |       await page.goto('https://cdi-r5.finwyze.com');
  110 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  111 |     });
  112 |
  113 |     test('TC_01_02:Approve user as Checker', async ({ page }) => {
  114 |       await new Promise(resolve => setTimeout(resolve, 3000));
  115 |           // page = await Promise.all([
  116 |           //   page.waitForEvent("popup"), 
  117 |           //   page.locator('//a[text()="View Task"]').click(), 
  118 |           //   ]).then(([newPage]) => newPage);
  119 |           //   await page.waitForLoadState();
  120 |           //   await new Promise(resolve => setTimeout(resolve, 3000));
  121 |
  122 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  123 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  124 |       await new Promise(resolve => setTimeout(resolve, 1000));
  125 |       await page.locator('#task_internal_user_comments').click();
  126 |       await new Promise(resolve => setTimeout(resolve, 2000));
  127 |       await page.locator('#task_internal_user_comments').fill('APPROVE');
  128 |       await new Promise(resolve => setTimeout(resolve, 1000));
  129 |       await page.getByRole('button', { name: 'Approve' }).click();
  130 |       await new Promise(resolve => setTimeout(resolve, 2000));
  131 |     });
  132 |   });
  133 |
  134 |   // test.describe('Checker Flow',()=>{
  135 |   //   test.beforeEach(async ({ page }) => {
  136 |   //     const lamChecker = new LAM_LoginPage(page);
  137 |   //     await page.goto('https://cdi-r5.finwyze.com');
  138 |   //     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  139 |   //   });
  140 |     // test("TC_05_01: Reject Task for custody Checker",async({})=>{
  141 |     //   await new Promise(resolve => setTimeout(resolve, 3000));
  142 |     //   // // page = await Promise.all([
  143 |     //   // //   page.waitForEvent("popup"), 
  144 |     //   // //   page.locator('//a[text()="View Task"]').click(), 
  145 |     //   // //   ]).then(([newPage]) => newPage);
  146 |     //   //   await page.waitForLoadState();
  147 |     //     await new Promise(resolve => setTimeout(resolve, 3000));
  148 |     //   await page.locator('//input[@id="search"]').fill(generatedEmail);
  149 |     //   await page.locator('//i[@id="dropdown"]').click();
  150 |     //   await page.locator('//button[@id="Activate/Deactivate"]').click();
  151 |     //   await page.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  152 |     //   await page.locator('//button[@id="task_activate_Reject"]').click();
  153 |     //   await new Promise(resolve => setTimeout(resolve, 2000));
  154 |     // });
  155 |   
  156 |   // test.describe('Maker Flow',()=>{
  157 |   //   test.beforeEach(async({page})=>{
  158 |   //     const lamMaker = new LAM_LoginPage(page);
  159 |   //     await page.goto('https://cdi-r5.finwyze.com');
  160 |   //     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  161 |   //   });
  162 |   
  163 |   //   test('TC_05_02: Update the details to click Resubmit the task for Maker ', async ({}) => {
  164 |   //     page = await Promise.all([
  165 |   //       page.waitForEvent("popup"), 
  166 |   //       page.locator('//a[text()="View Task"]').click(), 
  167 |   //       ]).then(([newPage]) => newPage);
  168 |   //       await page.waitForLoadState();
  169 |   //       await new Promise(resolve => setTimeout(resolve, 3000));
  170 |   
  171 |   //       await page.locator('//input[@id="search"]').fill(generatedEmail);
  172 |   //       await page.locator('//i[@id="dropdown"]').click();
  173 |   //       await page.locator('//button[@id="Re-submit Task"]').click();
  174 |   //       await page.locator('//textarea[@id="internal_user_comment"]').fill("Details to  the User");
  175 |   //       await page.locator('//button[@id="internal_user_submit"]').click();
  176 |   //       await new Promise(resolve => setTimeout(resolve, 2000));
  177 |   
  178 |   //   });
  179 |   
  180 |   // });
  181 |   //});
  182 |
  183 | //Scenario 2
  184 |
  185 | // test.describe('Maker Flow',()=>{
  186 | //   test.beforeEach(async ({ page }) => {
  187 | //     const lamMaker = new LAM_LoginPage(page);
  188 | //     await page.goto('https://cdi-r5.finwyze.com');
  189 | //     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  190 | //   });
  191 |
  192 | //   test('TC_02_01: Edit user as Maker ', async ({ page }) => {
  193 | //     page = await Promise.all([
  194 | //             page.waitForEvent("popup"), 
  195 | //             page.locator('//a[text()="View Task"]').click(), 
  196 | //             ]).then(([newPage]) => newPage);
  197 | //             await page.waitForLoadState()
  198 |   
  199 | //     const lamPopup = new LAM_LoginPage(page);
  200 | //     await lamPopup.clickUser();
  201 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  202 | //     await page.locator('//input[@id="search"]').fill(generatedEmail);
  203 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  204 | //     await page.locator('//i[@id="dropdown"]').click();
  205 | //     await page.locator('//button[@id="Edit"]').click();
  206 | //     const phoneNumber = page.locator('//input[@id="internal_user_mobileNumber"]');
```