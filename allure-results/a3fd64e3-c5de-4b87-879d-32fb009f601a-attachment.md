# Test info

- Name: LAM ID Module Tests >> Maker Flow   >> TC_01_04 (Retry): Resubmit the rejected task as Maker.
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:132:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://cdi-r3.finwyze.com/", waiting until "load"

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:129:18
```

# Test source

```ts
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
   44 |       console.log("Success Toast Message:", toastText?.trim());
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
   59 |       page.waitForEvent("popup"), 
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
   80 |
   81 |       // const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
   82 |       // await new Promise(resolve => setTimeout(resolve, 500));
   83 |       // const toastText = await successToast.textContent();
   84 |       // console.log("Success Toast Message:", toastText?.trim());
   85 |       // await expect(successToast).toHaveText("Task Created Successfully");
   86 |       
   87 |       const duplicateUserPopup = page.locator('div.toast-title').filter({ hasText: 'Task is already exist in checker queue' });
   88 |       await new Promise(resolve => setTimeout(resolve, 500));
   89 |       const toastTextDuplcate = await duplicateUserPopup.textContent();
   90 |       console.log("Success Toast Message:", toastTextDuplcate?.trim());
   91 |      // console.log("Email address validation should be displayed in the popup message");
   92 |       // const toastText = await duplicateUserPopup.textContent();
   93 |       // console.log("Toast Message:", toastText?.trim());
   94 |       await expect(duplicateUserPopup).toHaveText("Task is already exist in checker queue");
   95 |
   96 |
   97 |
   98 |     });
   99 |     });
  100 |   test.describe('Checker Flow', () => {
  101 |     test.beforeEach(async ({ page }) => {
  102 |       const lamChecker = new LAM_LoginPage(page);
  103 |       await page.goto('https://cdi-r3.finwyze.com');
  104 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  105 |     });
  106 |     test('TC_01_03: Reject the user creation task as Checker.', async ({ page }) => {
  107 |       await new Promise(resolve => setTimeout(resolve, 3000));
  108 |           page = await Promise.all([
  109 |             page.waitForEvent("popup"), 
  110 |             page.locator('//a[text()="View Task"]').click(), 
  111 |             ]).then(([newPage]) => newPage);
  112 |             await page.waitForLoadState();
  113 |             await new Promise(resolve => setTimeout(resolve, 3000));
  114 |       await page.locator('//input[@id="search"]').fill('KISHOREEKUMAR213@ICICIBANK.COM');  
  115 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  116 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  117 |       await new Promise(resolve => setTimeout(resolve, 1000));
  118 |       await page.locator('#task_internal_user_comments').click();
  119 |       await new Promise(resolve => setTimeout(resolve, 2000));
  120 |       await page.locator('#task_internal_user_comments').fill('Reject');
  121 |       await new Promise(resolve => setTimeout(resolve, 1000));
  122 |       await page.getByRole('button', { name: 'Reject' }).click();
  123 |       await new Promise(resolve => setTimeout(resolve, 2000));
  124 |     });
  125 |     });
  126 |   test.describe('Maker Flow  ', () => {
  127 |     test.beforeEach(async ({ page }) => {
  128 |       const lamChecker = new LAM_LoginPage(page);
> 129 |       await page.goto('https://cdi-r3.finwyze.com');
      |                  ^ Error: page.goto: Target page, context or browser has been closed
  130 |       await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  131 |     });
  132 |     test('TC_01_04 (Retry): Resubmit the rejected task as Maker.', async ({ page }) => {
  133 |       await new Promise(resolve => setTimeout(resolve, 3000));
  134 |           page = await Promise.all([
  135 |             page.waitForEvent("popup"), 
  136 |             page.locator('//a[text()="View Task"]').click(), 
  137 |             ]).then(([newPage]) => newPage);
  138 |             await page.waitForLoadState();
  139 |             await new Promise(resolve => setTimeout(resolve, 3000));
  140 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  141 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  142 |       await new Promise(resolve => setTimeout(resolve, 2000));
  143 |       await page.locator('//button[@id="Re-submit Task"]').click();
  144 |       await new Promise(resolve => setTimeout(resolve, 1000));
  145 |       await page.locator('#internal_user_comment').click();
  146 |       await new Promise(resolve => setTimeout(resolve, 2000));
  147 |       await page.locator('#internal_user_comment').fill('Resubit the task');
  148 |       await new Promise(resolve => setTimeout(resolve, 1000));
  149 |       await page.locator('//button[@id="internal_user_submit"]').click();
  150 |       await new Promise(resolve => setTimeout(resolve, 2000));
  151 |     });
  152 |     });
  153 |   test.describe('Checker Flow', () => {
  154 |     test.beforeEach(async ({ page }) => {
  155 |       const lamChecker = new LAM_LoginPage(page);
  156 |       await page.goto('https://cdi-r3.finwyze.com');
  157 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  158 |     });
  159 |     test('TC_01_05 (Approval): Approve the user creation task as Checker.', async ({ page }) => {
  160 |       await new Promise(resolve => setTimeout(resolve, 3000));
  161 |           page = await Promise.all([
  162 |             page.waitForEvent("popup"), 
  163 |             page.locator('//a[text()="View Task"]').click(), 
  164 |             ]).then(([newPage]) => newPage);
  165 |             await page.waitForLoadState();
  166 |             await new Promise(resolve => setTimeout(resolve, 3000));
  167 |       await page.locator('//input[@id="search"]').fill(generatedEmail); 
  168 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  169 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  170 |       await new Promise(resolve => setTimeout(resolve, 1000));
  171 |       await page.locator('#task_internal_user_comments').click();
  172 |       await new Promise(resolve => setTimeout(resolve, 2000));
  173 |       await page.locator('#task_internal_user_comments').fill('Approve');
  174 |       await new Promise(resolve => setTimeout(resolve, 1000));
  175 |       await page.getByRole('button', { name: 'Approve' }).click();
  176 |       await new Promise(resolve => setTimeout(resolve, 2000));
  177 |     });
  178 |     });
  179 |   
  180 |   // test.describe('Checker Flow',()=>{
  181 |   //   test.beforeEach(async ({ page }) => {
  182 |   //     const lamChecker = new LAM_LoginPage(page);
  183 |   //     await page.goto('https://cdi-r3.finwyze.com');
  184 |   //     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  185 |   //   });
  186 |   //   test("TC_05_01: Reject Task for custody Checker",async({})=>{
  187 |   //     await new Promise(resolve => setTimeout(resolve, 3000));
  188 |   //     page = await Promise.all([
  189 |   //       page.waitForEvent("popup"), 
  190 |   //       page.locator('//a[text()="View Task"]').click(), 
  191 |   //       ]).then(([newPage]) => newPage);
  192 |   //       await page.waitForLoadState();
  193 |   //       await new Promise(resolve => setTimeout(resolve, 3000));
  194 |   //     await page.locator('//input[@id="search"]').fill(generatedEmail);
  195 |   //     await page.locator('//i[@id="dropdown"]').click();
  196 |   //     await page.locator('//button[@id="Activate/Deactivate"]').click();
  197 |   //     await page.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  198 |   //     await page.locator('//button[@id="task_activate_Reject"]').click();
  199 |   //     await new Promise(resolve => setTimeout(resolve, 2000));
  200 |   //   });
  201 |   
  202 |   // test.describe('Maker Flow',()=>{
  203 |   //   test.beforeEach(async({page})=>{
  204 |   //     const lamMaker = new LAM_LoginPage(page);
  205 |   //     await page.goto('https://cdi-r3.finwyze.com');
  206 |   //     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  207 |   //   });
  208 |   
  209 |   //   test('TC_05_02: Update the details to click Resubmit the task for Maker ', async ({}) => {
  210 |   //     page = await Promise.all([
  211 |   //       page.waitForEvent("popup"), 
  212 |   //       page.locator('//a[text()="View Task"]').click(), 
  213 |   //       ]).then(([newPage]) => newPage);
  214 |   //       await page.waitForLoadState();
  215 |   //       await new Promise(resolve => setTimeout(resolve, 3000));
  216 |   
  217 |   //       await page.locator('//input[@id="search"]').fill(generatedEmail);
  218 |   //       await page.locator('//i[@id="dropdown"]').click();
  219 |   //       await page.locator('//button[@id="Re-submit Task"]').click();
  220 |   //       await page.locator('//textarea[@id="internal_user_comment"]').fill("Details to  the User");
  221 |   //       await page.locator('//button[@id="internal_user_submit"]').click();
  222 |   //       await new Promise(resolve => setTimeout(resolve, 2000));
  223 |   
  224 |   //   });
  225 |   
  226 |   // });
  227 |   //});
  228 |
  229 | //Scenario 2
```