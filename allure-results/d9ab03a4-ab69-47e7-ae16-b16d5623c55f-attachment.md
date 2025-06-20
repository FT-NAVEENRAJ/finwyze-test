# Test info

- Name: LAM ID Module Tests >> Maker Flow   >> TC_03_03 (Retry): Resubmit the rejected inactive task as Maker.
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:368:5

# Error details

```
Error: locator.click: Test timeout of 100000ms exceeded.
Call log:
  - waiting for locator('#internal_user_comment')

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:382:52
```

# Page snapshot

```yaml
- text: 
- heading "Internal User Management" [level=5]
- heading "86" [level=5]
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
  282 | //     await new Promise(resolve => setTimeout(resolve, 3000));
  283 | //         page = await Promise.all([
  284 | //           page.waitForEvent("popup"), 
  285 | //           page.locator('//a[text()="View Task"]').click(), 
  286 | //           ]).then(([newPage]) => newPage);
  287 | //           await page.waitForLoadState();
  288 | //           await new Promise(resolve => setTimeout(resolve, 3000));
  289 | //     await page.locator('//input[@id="search"]').fill(generatedEmail);
  290 | //     await page.locator('(//i[@id="dropdown"])[1]').click();
  291 | //     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  292 | //     await new Promise(resolve => setTimeout(resolve, 1000));
  293 | //     await page.locator('#task_internal_user_comments').click();
  294 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  295 | //     await page.locator('#task_internal_user_comments').fill('APPROVE');
  296 | //     await new Promise(resolve => setTimeout(resolve, 1000));
  297 | //     await page.getByRole('button', { name: 'Approve' }).click();
  298 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  299 | //     });
  300 | //     });
  301 |
  302 |
  303 | //Scenario 3 : Activate User
  304 | test.describe('Maker Flow',()=>{
  305 |   test.beforeEach(async ({ page }) => {
  306 |     const lamMaker = new LAM_LoginPage(page);
  307 |     await page.goto('https://cdi-r3.finwyze.com');
  308 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  309 |   });
  310 |
  311 |   test('TC_03_01: Activate an inactive user as Maker. ', async ({ page }) => {
  312 |     page = await Promise.all([
  313 |             page.waitForEvent("popup"), 
  314 |             page.locator('//a[text()="View Task"]').click(), 
  315 |             ]).then(([newPage]) => newPage);
  316 |             await page.waitForLoadState()
  317 |   
  318 |     const lamPopup = new LAM_LoginPage(page);
  319 |     await lamPopup.clickUser();
  320 |     await new Promise(resolve => setTimeout(resolve, 2000));
  321 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  322 |     await new Promise(resolve => setTimeout(resolve, 2000));
  323 |     await page.locator('//i[@id="dropdown"]').click();
  324 |     await page.locator('//button[@id="Activate/Deactivate"]').click();
  325 |     await page.locator('//textarea[@id="internal_user_comment"]').fill("Activate the User");
  326 |     await page.locator('//button[@id="internal_user_submit"]').click();
  327 |     await new Promise(resolve => setTimeout(resolve, 2000));
  328 |   });
  329 |   
  330 | });
  331 |
  332 |
  333 | test.describe('Checker Flow', () => {
  334 |     test.beforeEach(async ({ page }) => {
  335 |       const lamChecker = new LAM_LoginPage(page);
  336 |       await page.goto('https://cdi-r3.finwyze.com');
  337 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  338 |     });
  339 |     test('TC_03_02: Reject the user inactive task as Checker.', async ({ page }) => {
  340 |       await new Promise(resolve => setTimeout(resolve, 3000));
  341 |           page = await Promise.all([
  342 |             page.waitForEvent("popup"), 
  343 |             page.locator('//a[text()="View Task"]').click(), 
  344 |             ]).then(([newPage]) => newPage);
  345 |             await page.waitForLoadState();
  346 |             await new Promise(resolve => setTimeout(resolve, 3000));
  347 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  348 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  349 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  350 |       await new Promise(resolve => setTimeout(resolve, 1000));
  351 |       await page.locator('#task_internal_user_comments').click();
  352 |       await new Promise(resolve => setTimeout(resolve, 2000));
  353 |       await page.locator('#task_internal_user_comments').fill('Reject');
  354 |       await new Promise(resolve => setTimeout(resolve, 1000));
  355 |       await page.getByRole('button', { name: 'Reject' }).click();
  356 |       await new Promise(resolve => setTimeout(resolve, 2000));
  357 |     });
  358 |     });
  359 |
  360 |
  361 |
  362 |  test.describe('Maker Flow  ', () => {
  363 |     test.beforeEach(async ({ page }) => {
  364 |       const lamChecker = new LAM_LoginPage(page);
  365 |       await page.goto('https://cdi-r3.finwyze.com');
  366 |       await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  367 |     });
  368 |     test('TC_03_03 (Retry): Resubmit the rejected inactive task as Maker.', async ({ page }) => {
  369 |       await new Promise(resolve => setTimeout(resolve, 3000));
  370 |           page = await Promise.all([
  371 |             page.waitForEvent("popup"), 
  372 |             page.locator('//a[text()="View Task"]').click(), 
  373 |             ]).then(([newPage]) => newPage);
  374 |             await page.waitForLoadState();
  375 |             await new Promise(resolve => setTimeout(resolve, 3000));
  376 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  377 |       await new Promise(resolve => setTimeout(resolve, 3000));
  378 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  379 |       await new Promise(resolve => setTimeout(resolve, 2000));
  380 |       await page.locator('//button[@id="Re-submit Task"]').click();
  381 |       await new Promise(resolve => setTimeout(resolve, 1000));
> 382 |       await page.locator('#internal_user_comment').click();
      |                                                    ^ Error: locator.click: Test timeout of 100000ms exceeded.
  383 |       await new Promise(resolve => setTimeout(resolve, 2000));
  384 |       await page.locator('#internal_user_comment').click();
  385 |       await page.locator('#internal_user_comment').fill('Resubmit the task');
  386 |       await new Promise(resolve => setTimeout(resolve, 1000));
  387 |       await page.locator('//button[@id="internal_user_submit"]').click();
  388 |       await new Promise(resolve => setTimeout(resolve, 2000));
  389 |     });
  390 |     });
  391 |
  392 |
  393 |
  394 |
  395 |
  396 | test.describe('Checker Flow', () => {
  397 |   test.beforeEach(async ({ page }) => {
  398 |     const lamChecker = new LAM_LoginPage(page);
  399 |     await page.goto('https://cdi-r3.finwyze.com');
  400 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  401 |   });
  402 |
  403 |   test('TC_03_04: Approve the user activation task as Checker.', async ({ page }) => {
  404 |     await new Promise(resolve => setTimeout(resolve, 3000));
  405 |         page = await Promise.all([
  406 |           page.waitForEvent("popup"), 
  407 |           page.locator('//a[text()="View Task"]').click(), 
  408 |           ]).then(([newPage]) => newPage);
  409 |           await page.waitForLoadState();
  410 |           await new Promise(resolve => setTimeout(resolve, 3000));
  411 |  await page.locator('//input[@id="search"]').fill(generatedEmail);
  412 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  413 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  414 |     await new Promise(resolve => setTimeout(resolve, 1000));
  415 |     await page.locator('#task_internal_user_comments').click();
  416 |     await new Promise(resolve => setTimeout(resolve, 2000));
  417 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  418 |     await new Promise(resolve => setTimeout(resolve, 1000));
  419 |     await page.getByRole('button', { name: 'Approve' }).click();
  420 |     await new Promise(resolve => setTimeout(resolve, 2000));
  421 |   });
  422 | });
  423 |
  424 | // Scenario 4" Deactivate User
  425 |
  426 | // test.describe('Maker Flow',()=>{
  427 | //   test.beforeEach(async ({ page }) => {
  428 | //     const lamMaker = new LAM_LoginPage(page);
  429 | //     await page.goto('https://cdi-r3.finwyze.com');
  430 | //     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  431 | //   });
  432 |
  433 | //   test('TC_04_01: Deactivate an active user as Maker.', async ({ page }) => {
  434 | //     page = await Promise.all([
  435 | //             page.waitForEvent("popup"), 
  436 | //             page.locator('//a[text()="View Task"]').click(), 
  437 | //             ]).then(([newPage]) => newPage);
  438 | //             await page.waitForLoadState()
  439 |   
  440 | //     const lamPopup = new LAM_LoginPage(page);
  441 | //     await lamPopup.clickUser();
  442 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  443 | //     await page.locator('//input[@id="search"]').fill(generatedEmail);
  444 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  445 | //     await page.locator('//i[@id="dropdown"]').click();
  446 | //     await page.locator('//button[@id="Activate/Deactivate"]').click();
  447 | //     await page.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  448 | //     await page.locator('//button[@id="internal_user_submit"]').click();
  449 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  450 | //   });
  451 |   
  452 | // });
  453 | // test.describe('Checker Flow', () => {
  454 | //   test.beforeEach(async ({ page }) => {
  455 | //     const lamChecker = new LAM_LoginPage(page);
  456 | //     await page.goto('https://cdi-r3.finwyze.com');
  457 | //     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  458 | //   });
  459 |
  460 | //   test('TC_04_02: Approve the user deactivation task as Checker.r', async ({ page }) => {
  461 | //     await new Promise(resolve => setTimeout(resolve, 3000));
  462 | //         page = await Promise.all([
  463 | //           page.waitForEvent("popup"), 
  464 | //           page.locator('//a[text()="View Task"]').click(), 
  465 | //           ]).then(([newPage]) => newPage);
  466 | //           await page.waitForLoadState();
  467 | //           await new Promise(resolve => setTimeout(resolve, 3000));
  468 |
  469 | //     await page.locator('(//i[@id="dropdown"])[1]').click();
  470 | //     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  471 | //     await new Promise(resolve => setTimeout(resolve, 1000));
  472 | //     await page.locator('#task_internal_user_comments').click();
  473 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  474 | //     await page.locator('#task_internal_user_comments').fill('APPROVE');
  475 | //     await new Promise(resolve => setTimeout(resolve, 1000));
  476 | //     await page.getByRole('button', { name: 'Approve' }).click();
  477 | //     await new Promise(resolve => setTimeout(resolve, 2000));
  478 | //   });
  479 | // });
  480 | // test.describe('Checker Flow',()=>{
  481 | //   test.beforeEach(async ({ page }) => {
  482 | //     const lamChecker = new LAM_LoginPage(page);
```