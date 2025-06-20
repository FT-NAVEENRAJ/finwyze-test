# Test info

- Name: LAM ID Module Tests >> Checker Flow >> TC_02_02: Reject the user edit task as Checker.
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:231:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('xpath=(//i[@id="dropdown"])[1]')

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:240:54
```

# Test source

```ts
  140 |       await page.locator('#internal_user_comment').fill('Resubmit the task');
  141 |       await new Promise(resolve => setTimeout(resolve, 1000));
  142 |       await page.locator('//button[@id="internal_user_submit"]').click();
  143 |       await new Promise(resolve => setTimeout(resolve, 2000));
  144 |       const successToast = page.getByRole('alert', { name: 'Task Re-submitted Successfully' });
  145 |       await new Promise(resolve => setTimeout(resolve, 500));
  146 |       const toastText = await successToast.textContent();
  147 |       console.log("Toast Message:", toastText?.trim());
  148 |       await expect(successToast).toHaveText("Task Re-submitted Successfully");
  149 |     });
  150 |     });
  151 |   test.describe('Checker Flow', () => {
  152 |     test.beforeEach(async ({ page }) => {
  153 |       const lamChecker = new LAM_LoginPage(page);
  154 |       await page.goto('https://cdi-r3.finwyze.com');
  155 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  156 |     });
  157 |     test('TC_01_05: Approve the user creation task as Checker.', async ({ page }) => {
  158 |       await new Promise(resolve => setTimeout(resolve, 3000));
  159 |           page = await Promise.all([
  160 |             page.waitForEvent("popup"), 
  161 |             page.locator('//a[text()="View Task"]').click(), 
  162 |             ]).then(([newPage]) => newPage);
  163 |             await page.waitForLoadState();
  164 |             await new Promise(resolve => setTimeout(resolve, 3000));
  165 |       await page.locator('//input[@id="search"]').fill(generatedEmail); 
  166 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  167 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  168 |       await new Promise(resolve => setTimeout(resolve, 1000));
  169 |       await page.locator('#task_internal_user_comments').click();
  170 |       await new Promise(resolve => setTimeout(resolve, 2000));
  171 |       await page.locator('#task_internal_user_comments').fill('Approve');
  172 |       await new Promise(resolve => setTimeout(resolve, 1000));
  173 |       await page.getByRole('button', { name: 'Approve' }).click();
  174 |       await new Promise(resolve => setTimeout(resolve, 2000));
  175 |       const successToast = page.getByRole('alert', { name: 'Task Approved Successfully' });
  176 |       await new Promise(resolve => setTimeout(resolve, 500));
  177 |       const toastText = await successToast.textContent();
  178 |       console.log("Toast Message:", toastText?.trim());
  179 |       await expect(successToast).toHaveText("Task Approved Successfully");
  180 |     });
  181 |     });
  182 |   
  183 |
  184 | //Scenario 2 : Edit the user to task
  185 |
  186 | test.describe('Maker Flow  ',()=>{
  187 |   test.beforeEach(async ({ page }) => {
  188 |     const lamMaker = new LAM_LoginPage(page);
  189 |     await page.goto('https://cdi-r3.finwyze.com');
  190 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  191 |     });
  192 |   test('TC_02_01: Edit the existing user to update the data as a Maker. ', async ({ page }) => {
  193 |     page = await Promise.all([
  194 |             page.waitForEvent("popup"), 
  195 |             page.locator('//a[text()="View Task"]').click(), 
  196 |             ]).then(([newPage]) => newPage);
  197 |             await page.waitForLoadState()
  198 |   
  199 |     const lamPopup = new LAM_LoginPage(page);
  200 |     await lamPopup.clickUser();
  201 |     await new Promise(resolve => setTimeout(resolve, 2000));
  202 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  203 |     await new Promise(resolve => setTimeout(resolve, 2000));
  204 |     await page.locator('//tr[td//span[@id="Inactive"]]//i[@class="dropdown-toggle fa fa-caret-down pl-10"]').click();
  205 |     await page.locator('//button[@id="Edit"]').click();
  206 |     const phoneNumber = page.locator('//input[@id="internal_user_mobileNumber"]');
  207 |     phoneNumber.click();
  208 |     await new Promise(resolve => setTimeout(resolve, 1000));
  209 |     await phoneNumber.press('Control+A');
  210 |     await phoneNumber.press('Backspace'); 
  211 |     await new Promise(resolve => setTimeout(resolve, 1000));
  212 |     await phoneNumber.fill('8344575135');
  213 |     await page.keyboard.press('Tab');
  214 |     await new Promise(resolve => setTimeout(resolve, 3000));
  215 |     await page.locator('//button[@id="internal_user_submit"]').click();
  216 |       await new Promise(resolve => setTimeout(resolve, 5000));
  217 |       const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
  218 |       await new Promise(resolve => setTimeout(resolve, 500));
  219 |       const toastText = await successToast.textContent();
  220 |       console.log("Toast Message:", toastText?.trim());
  221 |       await expect(successToast).toHaveText("Task Created Successfully");
  222 |     });
  223 |     });
  224 | test.describe('Checker Flow', () => {
  225 |     test.beforeEach(async ({ page }) => {
  226 |       const lamChecker = new LAM_LoginPage(page);
  227 |       await page.goto('https://cdi-r3.finwyze.com');
  228 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  229 |     });
  230 |     test('TC_02_02: Reject the user edit task as Checker.', async ({ page }) => {
  231 |       await new Promise(resolve => setTimeout(resolve, 3000));
  232 |           page = await Promise.all([
  233 |             page.waitForEvent("popup"), 
  234 |             page.locator('//a[text()="View Task"]').click(), 
  235 |             ]).then(([newPage]) => newPage);
  236 |             await page.waitForLoadState();
  237 |             await new Promise(resolve => setTimeout(resolve, 3000));
  238 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  239 |       await page.locator('(//i[@id="dropdown"])[1]').click();
> 240 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
      |                                                      ^ Error: locator.click: Target page, context or browser has been closed
  241 |       await new Promise(resolve => setTimeout(resolve, 1000));
  242 |       await page.locator('#task_internal_user_comments').click();
  243 |       await new Promise(resolve => setTimeout(resolve, 2000));
  244 |       await page.locator('#task_internal_user_comments').fill('Reject');
  245 |       await new Promise(resolve => setTimeout(resolve, 1000));
  246 |       await page.getByRole('button', { name: 'Reject' }).click();
  247 |       await new Promise(resolve => setTimeout(resolve, 2000));
  248 |       const successToast = page.getByRole('alert', { name: 'Task Rejected Successfully' });
  249 |       await new Promise(resolve => setTimeout(resolve, 500));
  250 |       const toastText = await successToast.textContent();
  251 |       console.log("Toast Message:", toastText?.trim());
  252 |       await expect(successToast).toHaveText("Task Rejected Successfully");
  253 |     });
  254 |     });
  255 |   test.describe('Maker Flow  ', () => {
  256 |     test.beforeEach(async ({ page }) => {
  257 |       const lamChecker = new LAM_LoginPage(page);
  258 |       await page.goto('https://cdi-r3.finwyze.com');
  259 |       await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  260 |     });
  261 |     test('TC_02_03 (Retry): Resubmit the rejected edit task as Maker.', async ({ page }) => {
  262 |       await new Promise(resolve => setTimeout(resolve, 3000));
  263 |           page = await Promise.all([
  264 |             page.waitForEvent("popup"), 
  265 |             page.locator('//a[text()="View Task"]').click(), 
  266 |             ]).then(([newPage]) => newPage);
  267 |             await page.waitForLoadState();
  268 |             await new Promise(resolve => setTimeout(resolve, 3000));
  269 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  270 |       await new Promise(resolve => setTimeout(resolve, 3000));
  271 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  272 |       await new Promise(resolve => setTimeout(resolve, 2000));
  273 |       await page.locator('//button[@id="Re-submit Task"]').click();
  274 |       await new Promise(resolve => setTimeout(resolve, 1000));
  275 |       await page.locator('#internal_user_comment').click();
  276 |       await new Promise(resolve => setTimeout(resolve, 2000));
  277 |       await page.locator('#internal_user_comment').fill('Resubit the task');
  278 |       await new Promise(resolve => setTimeout(resolve, 1000));
  279 |       await page.locator('//button[@id="internal_user_submit"]').click();
  280 |       await new Promise(resolve => setTimeout(resolve, 2000));
  281 |       const successToast = page.getByRole('alert', { name: 'Task Re-submitted Successfully' });
  282 |       await new Promise(resolve => setTimeout(resolve, 500));
  283 |       const toastText = await successToast.textContent();
  284 |       console.log("Toast Message:", toastText?.trim());
  285 |       await expect(successToast).toHaveText("Task Re-submitted Successfully");
  286 |     });
  287 |     });
  288 | test.describe('Checker Flow', () => {
  289 |   test.beforeEach(async ({ page }) => {
  290 |     const lamChecker = new LAM_LoginPage(page);
  291 |     await page.goto('https://cdi-r3.finwyze.com');
  292 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  293 |     });
  294 |   test('TC_02_04: (Approval): Approve the user edit task as Checker.', async ({ page }) => {
  295 |     await new Promise(resolve => setTimeout(resolve, 3000));
  296 |         page = await Promise.all([
  297 |           page.waitForEvent("popup"), 
  298 |           page.locator('//a[text()="View Task"]').click(), 
  299 |           ]).then(([newPage]) => newPage);
  300 |           await page.waitForLoadState();
  301 |           await new Promise(resolve => setTimeout(resolve, 3000));
  302 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  303 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  304 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  305 |     await new Promise(resolve => setTimeout(resolve, 1000));
  306 |     await page.locator('#task_internal_user_comments').click();
  307 |     await new Promise(resolve => setTimeout(resolve, 2000));
  308 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  309 |     await new Promise(resolve => setTimeout(resolve, 1000));
  310 |     await page.getByRole('button', { name: 'Approve' }).click();
  311 |     await new Promise(resolve => setTimeout(resolve, 2000));
  312 |     const successToast = page.getByRole('alert', { name: 'Task Approved Successfully' });
  313 |     await new Promise(resolve => setTimeout(resolve, 500));
  314 |     const toastText = await successToast.textContent();
  315 |     console.log("Toast Message:", toastText?.trim());
  316 |     await expect(successToast).toHaveText("Task Approved Successfully");
  317 |     });
  318 |     });
  319 |
  320 |
  321 | //Scenario 3 : Activate User
  322 | test.describe('Maker Flow',()=>{
  323 |   test.beforeEach(async ({ page }) => {
  324 |     const lamMaker = new LAM_LoginPage(page);
  325 |     await page.goto('https://cdi-r3.finwyze.com');
  326 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  327 |   });
  328 |
  329 |   test('TC_03_01: Activate an inactive user as Maker. ', async ({ page }) => {
  330 |     page = await Promise.all([
  331 |             page.waitForEvent("popup"), 
  332 |             page.locator('//a[text()="View Task"]').click(), 
  333 |             ]).then(([newPage]) => newPage);
  334 |             await page.waitForLoadState()
  335 |   
  336 |     const lamPopup = new LAM_LoginPage(page);
  337 |     await lamPopup.clickUser();
  338 |     await new Promise(resolve => setTimeout(resolve, 2000));
  339 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  340 |     await new Promise(resolve => setTimeout(resolve, 2000));
```