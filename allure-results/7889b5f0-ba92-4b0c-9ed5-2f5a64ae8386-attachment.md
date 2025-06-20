# Test info

- Name: LAM ID Module Tests >> Maker Flow >> TC_04_01: Deactivate an active user as Maker.
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:460:3

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[contains(@class,"dropdown-toggle")]')

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:472:72
```

# Test source

```ts
  372 | //       await new Promise(resolve => setTimeout(resolve, 1000));
  373 | //       await page.locator('#task_internal_user_comments').click();
  374 | //       await new Promise(resolve => setTimeout(resolve, 2000));
  375 | //       await page.locator('#task_internal_user_comments').fill('Reject');
  376 | //       await new Promise(resolve => setTimeout(resolve, 1000));
  377 | //       await page.getByRole('button', { name: 'Reject' }).click();
  378 | //       await new Promise(resolve => setTimeout(resolve, 2000));
  379 | //       const successToast = page.getByRole('alert', { name: 'Task Rejected Successfully' });
  380 | //       await new Promise(resolve => setTimeout(resolve, 500));
  381 | //       const toastText = await successToast.textContent();
  382 | //       console.log("Toast Message:", toastText?.trim());
  383 | //       await expect(successToast).toHaveText("Task Rejected Successfully");
  384 | //     });
  385 | //     });
  386 |
  387 | //  test.describe('Maker Flow  ', () => {
  388 | //     test.beforeEach(async ({ page }) => {
  389 | //       const lamChecker = new LAM_LoginPage(page);
  390 | //       await page.goto('https://cdi-r3.finwyze.com');
  391 | //       await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  392 | //     });
  393 | //     test('TC_03_03 (Retry): Resubmit the rejected inactive task as Maker.', async ({ page }) => {
  394 | //       await new Promise(resolve => setTimeout(resolve, 3000));
  395 | //           page = await Promise.all([
  396 | //             page.waitForEvent("popup"), 
  397 | //             page.locator('//a[text()="View Task"]').click(), 
  398 | //             ]).then(([newPage]) => newPage);
  399 | //             await page.waitForLoadState();
  400 | //             await new Promise(resolve => setTimeout(resolve, 3000));
  401 | //       await page.locator('//input[@id="search"]').fill(generatedEmail);
  402 | //       await new Promise(resolve => setTimeout(resolve, 3000));
  403 | //       await page.locator('(//i[@id="dropdown"])[1]').click();
  404 | //       await new Promise(resolve => setTimeout(resolve, 2000));
  405 | //       await page.getByRole('button', { name: ' Re-submit Task' }).click();
  406 | //       await page.locator('#internal_user_comments').click();
  407 | //       await page.locator('#internal_user_comments').fill('RESUBIT THE TASK FOR ACTIVATe');
  408 | //       await page.getByRole('button', { name: 'Re-Submit' }).click();
  409 | //       const successToast = page.getByRole('alert', { name: 'Task Re-submitted Successfully' });
  410 | //       await new Promise(resolve => setTimeout(resolve, 500));
  411 | //       const toastText = await successToast.textContent();
  412 | //       console.log("Toast Message:", toastText?.trim());
  413 | //       await expect(successToast).toHaveText("Task Re-submitted Successfully");
  414 | //       await new Promise(resolve => setTimeout(resolve, 2000));
  415 | //     });
  416 | //     });
  417 |
  418 | test.describe('Checker Flow', () => {
  419 |   test.beforeEach(async ({ page }) => {
  420 |     const lamChecker = new LAM_LoginPage(page);
  421 |     await page.goto('https://cdi-r3.finwyze.com');
  422 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  423 |   });
  424 |
  425 |   test('TC_03_04: Approve the user activation task as Checker.', async ({ page }) => {
  426 |     await new Promise(resolve => setTimeout(resolve, 3000));
  427 |         page = await Promise.all([
  428 |           page.waitForEvent("popup"), 
  429 |           page.locator('//a[text()="View Task"]').click(), 
  430 |           ]).then(([newPage]) => newPage);
  431 |           await page.waitForLoadState();
  432 |           await new Promise(resolve => setTimeout(resolve, 3000));
  433 |  await page.locator('//input[@id="search"]').fill(generatedEmail);
  434 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  435 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  436 |     await new Promise(resolve => setTimeout(resolve, 1000));
  437 |     await page.locator('#task_internal_user_comments').click();
  438 |     await new Promise(resolve => setTimeout(resolve, 2000));
  439 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  440 |     await new Promise(resolve => setTimeout(resolve, 1000));
  441 |     await page.getByRole('button', { name: 'Approve' }).click();
  442 |     await new Promise(resolve => setTimeout(resolve, 2000));
  443 |     const successToast = page.getByRole('alert', { name: 'Task Approved Successfully' });
  444 |     await new Promise(resolve => setTimeout(resolve, 500));
  445 |     const toastText = await successToast.textContent();
  446 |     console.log("Toast Message:", toastText?.trim());
  447 |     await expect(successToast).toHaveText("Task Approved Successfully");
  448 |   });
  449 | });
  450 |
  451 | // Scenario 4" Deactivate User
  452 |
  453 | test.describe('Maker Flow',()=>{
  454 |   test.beforeEach(async ({ page }) => {
  455 |     const lamMaker = new LAM_LoginPage(page);
  456 |     await page.goto('https://cdi-r3.finwyze.com');
  457 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  458 |   });
  459 |
  460 |   test('TC_04_01: Deactivate an active user as Maker.', async ({ page }) => {
  461 |     page = await Promise.all([
  462 |             page.waitForEvent("popup"), 
  463 |             page.locator('//a[text()="View Task"]').click(), 
  464 |             ]).then(([newPage]) => newPage);
  465 |             await page.waitForLoadState()
  466 |   
  467 |     const lamPopup = new LAM_LoginPage(page);
  468 |     await lamPopup.clickUser();
  469 |     await new Promise(resolve => setTimeout(resolve, 2000));
  470 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  471 |     await new Promise(resolve => setTimeout(resolve, 2000));
> 472 |     await page.locator('//button[contains(@class,"dropdown-toggle")]').click();
      |                                                                        ^ Error: locator.click: Target page, context or browser has been closed
  473 |     await page.locator('//button[@id="Activate/Deactivate"]').click();
  474 |     await page.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  475 |     await page.locator('//button[@id="internal_user_submit"]').click();
  476 |     await new Promise(resolve => setTimeout(resolve, 2000));
  477 |      const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
  478 |       await new Promise(resolve => setTimeout(resolve, 500));
  479 |       const toastText = await successToast.textContent();
  480 |       console.log("Toast Message:", toastText?.trim());
  481 |       await expect(successToast).toHaveText("Task Created Successfully");
  482 |
  483 |   });
  484 |   
  485 | });
  486 |
  487 | test.describe('Checker Flow', () => {
  488 |     test.beforeEach(async ({ page }) => {
  489 |       const lamChecker = new LAM_LoginPage(page);
  490 |       await page.goto('https://cdi-r3.finwyze.com');
  491 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  492 |     });
  493 |     test('TC_03_02: Reject the user active task as Checker.', async ({ page }) => {
  494 |       await new Promise(resolve => setTimeout(resolve, 3000));
  495 |           page = await Promise.all([
  496 |             page.waitForEvent("popup"), 
  497 |             page.locator('//a[text()="View Task"]').click(), 
  498 |             ]).then(([newPage]) => newPage);
  499 |             await page.waitForLoadState();
  500 |             await new Promise(resolve => setTimeout(resolve, 3000));
  501 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  502 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  503 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  504 |       await new Promise(resolve => setTimeout(resolve, 1000));
  505 |       await page.locator('#task_internal_user_comments').click();
  506 |       await new Promise(resolve => setTimeout(resolve, 2000));
  507 |       await page.locator('#task_internal_user_comments').fill('Reject');
  508 |       await new Promise(resolve => setTimeout(resolve, 1000));
  509 |       await page.getByRole('button', { name: 'Reject' }).click();
  510 |       await new Promise(resolve => setTimeout(resolve, 2000));
  511 |       const successToast = page.getByRole('alert', { name: 'Task Rejected Successfully' });
  512 |       await new Promise(resolve => setTimeout(resolve, 500));
  513 |       const toastText = await successToast.textContent();
  514 |       console.log("Toast Message:", toastText?.trim());
  515 |       await expect(successToast).toHaveText("Task Rejected Successfully");
  516 |     });
  517 |     });
  518 |
  519 |  test.describe('Maker Flow  ', () => {
  520 |     test.beforeEach(async ({ page }) => {
  521 |       const lamChecker = new LAM_LoginPage(page);
  522 |       await page.goto('https://cdi-r3.finwyze.com');
  523 |       await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  524 |     });
  525 |     test('TC_03_03 (Retry): Resubmit the rejected active task as Maker.', async ({ page }) => {
  526 |       await new Promise(resolve => setTimeout(resolve, 3000));
  527 |           page = await Promise.all([
  528 |             page.waitForEvent("popup"), 
  529 |             page.locator('//a[text()="View Task"]').click(), 
  530 |             ]).then(([newPage]) => newPage);
  531 |             await page.waitForLoadState();
  532 |             await new Promise(resolve => setTimeout(resolve, 3000));
  533 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  534 |       await new Promise(resolve => setTimeout(resolve, 3000));
  535 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  536 |       await new Promise(resolve => setTimeout(resolve, 2000));
  537 |       await page.getByRole('button', { name: ' Re-submit Task' }).click();
  538 |       await page.locator('#internal_user_comments').click();
  539 |       await page.locator('#internal_user_comments').fill('RESUBIT THE TASK FOR ACTIVATe');
  540 |       await page.getByRole('button', { name: 'Re-Submit' }).click();
  541 |       const successToast = page.getByRole('alert', { name: 'Task Re-submitted Successfully' });
  542 |       await new Promise(resolve => setTimeout(resolve, 500));
  543 |       const toastText = await successToast.textContent();
  544 |       console.log("Toast Message:", toastText?.trim());
  545 |       await expect(successToast).toHaveText("Task Re-submitted Successfully");
  546 |       await new Promise(resolve => setTimeout(resolve, 2000));
  547 |     });
  548 |     });
  549 |
  550 | test.describe('Checker Flow', () => {
  551 |   test.beforeEach(async ({ page }) => {
  552 |     const lamChecker = new LAM_LoginPage(page);
  553 |     await page.goto('https://cdi-r3.finwyze.com');
  554 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  555 |   });
  556 |
  557 |   test('TC_04_02: Approve the user deactivation task as Checker.r', async ({ page }) => {
  558 |     await new Promise(resolve => setTimeout(resolve, 3000));
  559 |         page = await Promise.all([
  560 |           page.waitForEvent("popup"), 
  561 |           page.locator('//a[text()="View Task"]').click(), 
  562 |           ]).then(([newPage]) => newPage);
  563 |           await page.waitForLoadState();
  564 |           await new Promise(resolve => setTimeout(resolve, 3000));
  565 |
  566 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  567 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  568 |     await new Promise(resolve => setTimeout(resolve, 1000));
  569 |     await page.locator('#task_internal_user_comments').click();
  570 |     await new Promise(resolve => setTimeout(resolve, 2000));
  571 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  572 |     await new Promise(resolve => setTimeout(resolve, 1000));
```