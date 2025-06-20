# Test info

- Name: LAM ID Module Tests >> Checker Flow >> TC_01_05: Approve the user creation task as Checker.
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:158:5

# Error details

```
Error: locator.click: Test timeout of 100000ms exceeded.
Call log:
  - waiting for locator('xpath=(//i[@id="dropdown"])[1]')

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:167:54
```

# Page snapshot

```yaml
- text: 
- heading "Internal User Management" [level=5]
- heading "537" [level=5]
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
  160 |           page = await Promise.all([
  161 |             page.waitForEvent("popup"), 
  162 |             page.locator('//a[text()="View Task"]').click(), 
  163 |             ]).then(([newPage]) => newPage);
  164 |             await page.waitForLoadState();
  165 |             await new Promise(resolve => setTimeout(resolve, 3000));
  166 |       await page.locator('//input[@id="search"]').fill(generatedEmail); 
> 167 |       await page.locator('(//i[@id="dropdown"])[1]').click();
      |                                                      ^ Error: locator.click: Test timeout of 100000ms exceeded.
  168 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  169 |       await new Promise(resolve => setTimeout(resolve, 1000));
  170 |       await page.locator('#task_internal_user_comments').click();
  171 |       await new Promise(resolve => setTimeout(resolve, 2000));
  172 |       await page.locator('#task_internal_user_comments').fill('Approve');
  173 |       await new Promise(resolve => setTimeout(resolve, 1000));
  174 |       await page.getByRole('button', { name: 'Approve' }).click();
  175 |       await new Promise(resolve => setTimeout(resolve, 2000));
  176 |       const successToast = page.getByRole('alert', { name: 'Task Approved Successfully' });
  177 |       await new Promise(resolve => setTimeout(resolve, 500));
  178 |       const toastText = await successToast.textContent();
  179 |       console.log("Toast Message:", toastText?.trim());
  180 |       await expect(successToast).toHaveText("Task Approved Successfully");
  181 |     });
  182 |     });
  183 |   
  184 |
  185 | //Scenario 2 : Edit the user to task
  186 |
  187 | test.describe('Maker Flow  ',()=>{
  188 |   test.beforeEach(async ({ page }) => {
  189 |     const lamMaker = new LAM_LoginPage(page);
  190 |     await page.goto('https://cdi-r3.finwyze.com');
  191 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  192 |     });
  193 |   test('TC_02_01: Edit the existing user to update the data as a Maker. ', async ({ page }) => {
  194 |     page = await Promise.all([
  195 |             page.waitForEvent("popup"), 
  196 |             page.locator('//a[text()="View Task"]').click(), 
  197 |             ]).then(([newPage]) => newPage);
  198 |             await page.waitForLoadState()
  199 |   
  200 |     const lamPopup = new LAM_LoginPage(page);
  201 |     await lamPopup.clickUser();
  202 |     await new Promise(resolve => setTimeout(resolve, 2000));
  203 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  204 |     await new Promise(resolve => setTimeout(resolve, 2000));
  205 |     await page.locator('//tr[td//span[@id="Inactive"]]//i[@class="dropdown-toggle fa fa-caret-down pl-10"]').click();
  206 |     await page.locator('//button[@id="Edit"]').click();
  207 |     const phoneNumber = page.locator('//input[@id="internal_user_mobileNumber"]');
  208 |     phoneNumber.click();
  209 |     await new Promise(resolve => setTimeout(resolve, 1000));
  210 |     await phoneNumber.press('Control+A');
  211 |     await phoneNumber.press('Backspace'); 
  212 |     await new Promise(resolve => setTimeout(resolve, 1000));
  213 |     await phoneNumber.fill('8344575135');
  214 |     await page.keyboard.press('Tab');
  215 |     await new Promise(resolve => setTimeout(resolve, 3000));
  216 |     await page.locator('//button[@id="internal_user_submit"]').click();
  217 |       await new Promise(resolve => setTimeout(resolve, 5000));
  218 |       const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
  219 |       await new Promise(resolve => setTimeout(resolve, 500));
  220 |       const toastText = await successToast.textContent();
  221 |       console.log("Toast Message:", toastText?.trim());
  222 |       await expect(successToast).toHaveText("Task Created Successfully");
  223 |     });
  224 |     });
  225 | test.describe('Checker Flow', () => {
  226 |     test.beforeEach(async ({ page }) => {
  227 |       const lamChecker = new LAM_LoginPage(page);
  228 |       await page.goto('https://cdi-r3.finwyze.com');
  229 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  230 |     });
  231 |     test('TC_02_02: Reject the user edit task as Checker.', async ({ page }) => {
  232 |       await new Promise(resolve => setTimeout(resolve, 3000));
  233 |           page = await Promise.all([
  234 |             page.waitForEvent("popup"), 
  235 |             page.locator('//a[text()="View Task"]').click(), 
  236 |             ]).then(([newPage]) => newPage);
  237 |             await page.waitForLoadState();
  238 |             await new Promise(resolve => setTimeout(resolve, 3000));
  239 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  240 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  241 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  242 |       await new Promise(resolve => setTimeout(resolve, 1000));
  243 |       await page.locator('#task_internal_user_comments').click();
  244 |       await new Promise(resolve => setTimeout(resolve, 2000));
  245 |       await page.locator('#task_internal_user_comments').fill('Reject');
  246 |       await new Promise(resolve => setTimeout(resolve, 1000));
  247 |       await page.getByRole('button', { name: 'Reject' }).click();
  248 |       await new Promise(resolve => setTimeout(resolve, 2000));
  249 |       const successToast = page.getByRole('alert', { name: 'Task Rejected Successfully' });
  250 |       await new Promise(resolve => setTimeout(resolve, 500));
  251 |       const toastText = await successToast.textContent();
  252 |       console.log("Toast Message:", toastText?.trim());
  253 |       await expect(successToast).toHaveText("Task Rejected Successfully");
  254 |     });
  255 |     });
  256 |   test.describe('Maker Flow  ', () => {
  257 |     test.beforeEach(async ({ page }) => {
  258 |       const lamChecker = new LAM_LoginPage(page);
  259 |       await page.goto('https://cdi-r3.finwyze.com');
  260 |       await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  261 |     });
  262 |     test('TC_02_03 (Retry): Resubmit the rejected edit task as Maker.', async ({ page }) => {
  263 |       await new Promise(resolve => setTimeout(resolve, 3000));
  264 |           page = await Promise.all([
  265 |             page.waitForEvent("popup"), 
  266 |             page.locator('//a[text()="View Task"]').click(), 
  267 |             ]).then(([newPage]) => newPage);
```