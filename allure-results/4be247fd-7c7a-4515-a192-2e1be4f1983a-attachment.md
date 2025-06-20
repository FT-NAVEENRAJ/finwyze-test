# Test info

- Name: Maker Flow >> TC_04_01: Deactive user as Maker 
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:369:3

# Error details

```
Error: locator.click: Test timeout of 100000ms exceeded.
Call log:
  - waiting for locator('//i[@id="dropdown"]')

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:381:47
```

# Page snapshot

```yaml
- text: 
- heading "Internal User Management" [level=5]
- heading "52" [level=5]
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
  281 |   test('TC_02_02:Approve Edit user as Checker', async ({ page }) => {
  282 |     await new Promise(resolve => setTimeout(resolve, 3000));
  283 |         page = await Promise.all([
  284 |           page.waitForEvent("popup"), 
  285 |           page.locator('//a[text()="View Task"]').click(), 
  286 |           ]).then(([newPage]) => newPage);
  287 |           await page.waitForLoadState();
  288 |           await new Promise(resolve => setTimeout(resolve, 3000));
  289 |
  290 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  291 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  292 |     await new Promise(resolve => setTimeout(resolve, 1000));
  293 |     await page.locator('#task_internal_user_comments').click();
  294 |     await new Promise(resolve => setTimeout(resolve, 2000));
  295 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  296 |     await new Promise(resolve => setTimeout(resolve, 1000));
  297 |     await page.getByRole('button', { name: 'Approve' }).click();
  298 |     await new Promise(resolve => setTimeout(resolve, 2000));
  299 |   });
  300 |
  301 | });
  302 |
  303 |
  304 | //Scenario 3 : Activate User
  305 | test.describe('Maker Flow',()=>{
  306 |   test.beforeEach(async ({ page }) => {
  307 |     const lamMaker = new LAM_LoginPage(page);
  308 |     await page.goto('https://cdi-r3.finwyze.com');
  309 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  310 |   });
  311 |
  312 |   test('TC_03_01: Active user as Maker ', async ({ page }) => {
  313 |     page = await Promise.all([
  314 |             page.waitForEvent("popup"), 
  315 |             page.locator('//a[text()="View Task"]').click(), 
  316 |             ]).then(([newPage]) => newPage);
  317 |             await page.waitForLoadState()
  318 |   
  319 |     const lamPopup = new LAM_LoginPage(page);
  320 |     await lamPopup.clickUser();
  321 |     await new Promise(resolve => setTimeout(resolve, 2000));
  322 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  323 |     await new Promise(resolve => setTimeout(resolve, 2000));
  324 |     await page.locator('//i[@id="dropdown"]').click();
  325 |     await page.locator('//button[@id="Activate/Deactivate"]').click();
  326 |     await page.locator('//textarea[@id="internal_user_comment"]').fill("Activate the User");
  327 |     await page.locator('//button[@id="internal_user_submit"]').click();
  328 |     await new Promise(resolve => setTimeout(resolve, 2000));
  329 |   });
  330 |   
  331 | });
  332 | test.describe('Checker Flow', () => {
  333 |   test.beforeEach(async ({ page }) => {
  334 |     const lamChecker = new LAM_LoginPage(page);
  335 |     await page.goto('https://cdi-r3.finwyze.com');
  336 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  337 |   });
  338 |
  339 |   test('TC_03_02:Approve Activate user as Checker', async ({ page }) => {
  340 |     await new Promise(resolve => setTimeout(resolve, 3000));
  341 |         page = await Promise.all([
  342 |           page.waitForEvent("popup"), 
  343 |           page.locator('//a[text()="View Task"]').click(), 
  344 |           ]).then(([newPage]) => newPage);
  345 |           await page.waitForLoadState();
  346 |           await new Promise(resolve => setTimeout(resolve, 3000));
  347 |  await page.locator('//input[@id="search"]').fill(generatedEmail);
  348 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  349 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  350 |     await new Promise(resolve => setTimeout(resolve, 1000));
  351 |     await page.locator('#task_internal_user_comments').click();
  352 |     await new Promise(resolve => setTimeout(resolve, 2000));
  353 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  354 |     await new Promise(resolve => setTimeout(resolve, 1000));
  355 |     await page.getByRole('button', { name: 'Approve' }).click();
  356 |     await new Promise(resolve => setTimeout(resolve, 2000));
  357 |   });
  358 | });
  359 |
  360 | // Scenario 4" Deactivate User
  361 |
  362 | test.describe('Maker Flow',()=>{
  363 |   test.beforeEach(async ({ page }) => {
  364 |     const lamMaker = new LAM_LoginPage(page);
  365 |     await page.goto('https://cdi-r3.finwyze.com');
  366 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  367 |   });
  368 |
  369 |   test('TC_04_01: Deactive user as Maker ', async ({ page }) => {
  370 |     page = await Promise.all([
  371 |             page.waitForEvent("popup"), 
  372 |             page.locator('//a[text()="View Task"]').click(), 
  373 |             ]).then(([newPage]) => newPage);
  374 |             await page.waitForLoadState()
  375 |   
  376 |     const lamPopup = new LAM_LoginPage(page);
  377 |     await lamPopup.clickUser();
  378 |     await new Promise(resolve => setTimeout(resolve, 2000));
  379 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  380 |     await new Promise(resolve => setTimeout(resolve, 2000));
> 381 |     await page.locator('//i[@id="dropdown"]').click();
      |                                               ^ Error: locator.click: Test timeout of 100000ms exceeded.
  382 |     await page.locator('//button[@id="Activate/Deactivate"]').click();
  383 |     await page.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  384 |     await page.locator('//button[@id="internal_user_submit"]').click();
  385 |     await new Promise(resolve => setTimeout(resolve, 2000));
  386 |   });
  387 |   
  388 | });
  389 | test.describe('Checker Flow', () => {
  390 |   test.beforeEach(async ({ page }) => {
  391 |     const lamChecker = new LAM_LoginPage(page);
  392 |     await page.goto('https://cdi-r3.finwyze.com');
  393 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  394 |   });
  395 |
  396 |   test('TC_04_02:Approve Deactivate user as Checker', async ({ page }) => {
  397 |     await new Promise(resolve => setTimeout(resolve, 3000));
  398 |         page = await Promise.all([
  399 |           page.waitForEvent("popup"), 
  400 |           page.locator('//a[text()="View Task"]').click(), 
  401 |           ]).then(([newPage]) => newPage);
  402 |           await page.waitForLoadState();
  403 |           await new Promise(resolve => setTimeout(resolve, 3000));
  404 |
  405 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  406 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  407 |     await new Promise(resolve => setTimeout(resolve, 1000));
  408 |     await page.locator('#task_internal_user_comments').click();
  409 |     await new Promise(resolve => setTimeout(resolve, 2000));
  410 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  411 |     await new Promise(resolve => setTimeout(resolve, 1000));
  412 |     await page.getByRole('button', { name: 'Approve' }).click();
  413 |     await new Promise(resolve => setTimeout(resolve, 2000));
  414 |   });
  415 | });
  416 | test.describe('Checker Flow',()=>{
  417 |   test.beforeEach(async ({ page }) => {
  418 |     const lamChecker = new LAM_LoginPage(page);
  419 |     await page.goto('https://cdi-r3.finwyze.com');
  420 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  421 |   });
  422 |   test("TC_05_01: Reject Task for custody Checker",async({})=>{
  423 |     await new Promise(resolve => setTimeout(resolve, 3000));
  424 |     page = await Promise.all([
  425 |       page.waitForEvent("popup"), 
  426 |       page.locator('//a[text()="View Task"]').click(), 
  427 |       ]).then(([newPage]) => newPage);
  428 |       await page.waitForLoadState();
  429 |       await new Promise(resolve => setTimeout(resolve, 3000));
  430 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  431 |     await page.locator('//i[@id="dropdown"]').click();
  432 |     await page.locator('//button[@id="Activate/Deactivate"]').click();
  433 |     await page.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  434 |     await page.locator('//button[@id="task_activate_Reject"]').click();
  435 |     await new Promise(resolve => setTimeout(resolve, 2000));
  436 |   });
  437 |
  438 | test.describe('Maker Flow',()=>{
  439 |   test.beforeEach(async({page})=>{
  440 |     const lamMaker = new LAM_LoginPage(page);
  441 |     await page.goto('https://cdi-r3.finwyze.com');
  442 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  443 |   });
  444 |
  445 |   test('TC_05_02: Update the details to click Resubmit the task for Maker ', async ({}) => {
  446 |     page = await Promise.all([
  447 |       page.waitForEvent("popup"), 
  448 |       page.locator('//a[text()="View Task"]').click(), 
  449 |       ]).then(([newPage]) => newPage);
  450 |       await page.waitForLoadState();
  451 |       await new Promise(resolve => setTimeout(resolve, 3000));
  452 |
  453 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  454 |       await page.locator('//i[@id="dropdown"]').click();
  455 |       await page.locator('//button[@id="Re-submit Task"]').click();
  456 |       await page.locator('//textarea[@id="internal_user_comment"]').fill("Details to  the User");
  457 |       await page.locator('//button[@id="internal_user_submit"]').click();
  458 |       await new Promise(resolve => setTimeout(resolve, 2000));
  459 |
  460 |   });
  461 |
  462 | });
  463 | });
  464 |
  465 |
  466 |
  467 |
  468 |
  469 |
  470 |
  471 |
  472 |
  473 |
  474 |
  475 |
  476 |
  477 |
  478 | // test.describe('TS_01: Lam Id Maker Test Cases', () => {
  479 |
  480 | //   test.beforeAll(async ({ browser }) => {
  481 | //     const context = await browser.newContext();
```