# Test info

- Name: LAM ID Module Tests >> Checker Flow >> TC_02_02: Reject the user edit task as Checker.
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:268:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('xpath=(//i[@id="dropdown"])[1]')

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:277:54
```

# Test source

```ts
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
  230 |
  231 | test.describe('Maker Flow  ',()=>{
  232 |   test.beforeEach(async ({ page }) => {
  233 |     const lamMaker = new LAM_LoginPage(page);
  234 |     await page.goto('https://cdi-r3.finwyze.com');
  235 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  236 |     });
  237 |   test('TC_02_01: Edit the existing user to update the data as a Maker. ', async ({ page }) => {
  238 |     page = await Promise.all([
  239 |             page.waitForEvent("popup"), 
  240 |             page.locator('//a[text()="View Task"]').click(), 
  241 |             ]).then(([newPage]) => newPage);
  242 |             await page.waitForLoadState()
  243 |   
  244 |     const lamPopup = new LAM_LoginPage(page);
  245 |     await lamPopup.clickUser();
  246 |     await new Promise(resolve => setTimeout(resolve, 2000));
  247 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  248 |     await new Promise(resolve => setTimeout(resolve, 2000));
  249 |     await page.locator('//i[@id="dropdown"]').click();
  250 |     await page.locator('//button[@id="Edit"]').click();
  251 |     const phoneNumber = page.locator('//input[@id="internal_user_mobileNumber"]');
  252 |     phoneNumber.click();
  253 |     await new Promise(resolve => setTimeout(resolve, 1000));
  254 |     await phoneNumber.press('Control+A');
  255 |     await phoneNumber.press('Backspace'); 
  256 |     await phoneNumber.fill('9080365951');
  257 |     await new Promise(resolve => setTimeout(resolve, 3000));
  258 |     await page.locator('//button[@id="internal_user_submit"]').click();
  259 |       await new Promise(resolve => setTimeout(resolve, 5000));
  260 |       const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
  261 |       await new Promise(resolve => setTimeout(resolve, 500));
  262 |       const toastText = await successToast.textContent();
  263 |       console.log("Success Toast Message:", toastText?.trim());
  264 |       await expect(successToast).toHaveText("Task Created Successfully");
  265 |     });
  266 |     });
  267 | test.describe('Checker Flow', () => {
  268 |     test.beforeEach(async ({ page }) => {
  269 |       const lamChecker = new LAM_LoginPage(page);
  270 |       await page.goto('https://cdi-r3.finwyze.com');
  271 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  272 |     });
  273 |     test('TC_02_02: Reject the user edit task as Checker.', async ({ page }) => {
  274 |       await new Promise(resolve => setTimeout(resolve, 3000));
  275 |           page = await Promise.all([
  276 |             page.waitForEvent("popup"), 
> 277 |             page.locator('//a[text()="View Task"]').click(), 
      |                                                      ^ Error: locator.click: Test ended.
  278 |             ]).then(([newPage]) => newPage);
  279 |             await page.waitForLoadState();
  280 |             await new Promise(resolve => setTimeout(resolve, 3000));
  281 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  282 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  283 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  284 |       await new Promise(resolve => setTimeout(resolve, 1000));
  285 |       await page.locator('#task_internal_user_comments').click();
  286 |       await new Promise(resolve => setTimeout(resolve, 2000));
  287 |       await page.locator('#task_internal_user_comments').fill('Reject');
  288 |       await new Promise(resolve => setTimeout(resolve, 1000));
  289 |       await page.getByRole('button', { name: 'Reject' }).click();
  290 |       await new Promise(resolve => setTimeout(resolve, 2000));
  291 |     });
  292 |     });
  293 |   test.describe('Maker Flow  ', () => {
  294 |     test.beforeEach(async ({ page }) => {
  295 |       const lamChecker = new LAM_LoginPage(page);
  296 |       await page.goto('https://cdi-r3.finwyze.com');
  297 |       await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  298 |     });
  299 |     test('TC_02_03 (Retry): Resubmit the rejected edit task as Maker.', async ({ page }) => {
  300 |       await new Promise(resolve => setTimeout(resolve, 3000));
  301 |           page = await Promise.all([
  302 |             page.waitForEvent("popup"), 
  303 |             page.locator('//a[text()="View Task"]').click(), 
  304 |             ]).then(([newPage]) => newPage);
  305 |             await page.waitForLoadState();
  306 |             await new Promise(resolve => setTimeout(resolve, 3000));
  307 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  308 |       await new Promise(resolve => setTimeout(resolve, 3000));
  309 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  310 |       await new Promise(resolve => setTimeout(resolve, 2000));
  311 |       await page.locator('//button[@id="Re-submit Task"]').click();
  312 |       await new Promise(resolve => setTimeout(resolve, 1000));
  313 |       await page.locator('#internal_user_comment').click();
  314 |       await new Promise(resolve => setTimeout(resolve, 2000));
  315 |       await page.locator('#internal_user_comment').fill('Resubit the task');
  316 |       await new Promise(resolve => setTimeout(resolve, 1000));
  317 |       await page.locator('//button[@id="internal_user_submit"]').click();
  318 |       await new Promise(resolve => setTimeout(resolve, 2000));
  319 |     });
  320 |     });
  321 | test.describe('Checker Flow', () => {
  322 |   test.beforeEach(async ({ page }) => {
  323 |     const lamChecker = new LAM_LoginPage(page);
  324 |     await page.goto('https://cdi-r3.finwyze.com');
  325 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  326 |     });
  327 |   test('TC_02_04: (Approval): Approve the user edit task as Checker.', async ({ page }) => {
  328 |     await new Promise(resolve => setTimeout(resolve, 3000));
  329 |         page = await Promise.all([
  330 |           page.waitForEvent("popup"), 
  331 |           page.locator('//a[text()="View Task"]').click(), 
  332 |           ]).then(([newPage]) => newPage);
  333 |           await page.waitForLoadState();
  334 |           await new Promise(resolve => setTimeout(resolve, 3000));
  335 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  336 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  337 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  338 |     await new Promise(resolve => setTimeout(resolve, 1000));
  339 |     await page.locator('#task_internal_user_comments').click();
  340 |     await new Promise(resolve => setTimeout(resolve, 2000));
  341 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  342 |     await new Promise(resolve => setTimeout(resolve, 1000));
  343 |     await page.getByRole('button', { name: 'Approve' }).click();
  344 |     await new Promise(resolve => setTimeout(resolve, 2000));
  345 |     });
  346 |     });
  347 |
  348 |
  349 | //Scenario 3 : Activate User
  350 | test.describe('Maker Flow',()=>{
  351 |   test.beforeEach(async ({ page }) => {
  352 |     const lamMaker = new LAM_LoginPage(page);
  353 |     await page.goto('https://cdi-r3.finwyze.com');
  354 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  355 |   });
  356 |
  357 |   test('TC_03_01: Activate an inactive user as Maker. ', async ({ page }) => {
  358 |     page = await Promise.all([
  359 |             page.waitForEvent("popup"), 
  360 |             page.locator('//a[text()="View Task"]').click(), 
  361 |             ]).then(([newPage]) => newPage);
  362 |             await page.waitForLoadState()
  363 |   
  364 |     const lamPopup = new LAM_LoginPage(page);
  365 |     await lamPopup.clickUser();
  366 |     await new Promise(resolve => setTimeout(resolve, 2000));
  367 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  368 |     await new Promise(resolve => setTimeout(resolve, 2000));
  369 |     await page.locator('//i[@id="dropdown"]').click();
  370 |     await page.locator('//button[@id="Activate/Deactivate"]').click();
  371 |     await page.locator('//textarea[@id="internal_user_comment"]').fill("Activate the User");
  372 |     await page.locator('//button[@id="internal_user_submit"]').click();
  373 |     await new Promise(resolve => setTimeout(resolve, 2000));
  374 |   });
  375 |   
  376 | });
  377 | test.describe('Checker Flow', () => {
```