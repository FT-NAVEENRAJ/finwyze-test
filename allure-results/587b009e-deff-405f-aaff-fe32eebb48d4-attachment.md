# Test info

- Name: LAM ID Module Tests >> Maker Flow   >> TC_03_03 (Retry): Resubmit the rejected active task as Maker.
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:538:5

# Error details

```
Error: locator.textContent: Test timeout of 100000ms exceeded.
Call log:
  - waiting for getByRole('alert', { name: 'Task Re-submitted Successfully' })

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:556:44
```

# Page snapshot

```yaml
- text: 
- heading "Internal User Management" [level=5]
- heading "98" [level=5]
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
  472 |      await new Promise(resolve => setTimeout(resolve, 2000));
  473 |      await page.locator('//tr[td//span[@id="Active"]]//i[@class="dropdown-toggle fa fa-caret-down pl-10"]').click();
  474 |      await page.locator('//button[@id="Activate/Deactivate"]').click();
  475 |      await page.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  476 |      await page.locator('//button[@id="internal_user_submit"]').click();
  477 |      await new Promise(resolve => setTimeout(resolve, 2000));
  478 |      const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
  479 |       await new Promise(resolve => setTimeout(resolve, 500));
  480 |       const toastText = await successToast.textContent();
  481 |       console.log("Toast Message:", toastText?.trim());
  482 |       await expect(successToast).toHaveText("Task Created Successfully");
  483 |
  484 |
  485 |     // await page.locator('//button[contains(@class,"dropdown-toggle")]').click();
  486 |     // await page.locator('//button[@id="Activate/Deactivate"]').click();
  487 |     // await page.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  488 |     // await page.locator('//button[@id="internal_user_submit"]').click();
  489 |     // await new Promise(resolve => setTimeout(resolve, 2000));
  490 |     //  const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
  491 |     //   await new Promise(resolve => setTimeout(resolve, 500));
  492 |     //   const toastText = await successToast.textContent();
  493 |     //   console.log("Toast Message:", toastText?.trim());
  494 |     //   await expect(successToast).toHaveText("Task Created Successfully");
  495 |
  496 |   });
  497 |   
  498 | });
  499 |
  500 | test.describe('Checker Flow', () => {
  501 |     test.beforeEach(async ({ page }) => {
  502 |       const lamChecker = new LAM_LoginPage(page);
  503 |       await page.goto('https://cdi-r3.finwyze.com');
  504 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  505 |     });
  506 |     test('TC_03_02: Reject the user active task as Checker.', async ({ page }) => {
  507 |       await new Promise(resolve => setTimeout(resolve, 3000));
  508 |           page = await Promise.all([
  509 |             page.waitForEvent("popup"), 
  510 |             page.locator('//a[text()="View Task"]').click(), 
  511 |             ]).then(([newPage]) => newPage);
  512 |             await page.waitForLoadState();
  513 |             await new Promise(resolve => setTimeout(resolve, 3000));
  514 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  515 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  516 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  517 |       await new Promise(resolve => setTimeout(resolve, 1000));
  518 |       await page.locator('#task_internal_user_comments').click();
  519 |       await new Promise(resolve => setTimeout(resolve, 2000));
  520 |       await page.locator('#task_internal_user_comments').fill('Reject');
  521 |       await new Promise(resolve => setTimeout(resolve, 1000));
  522 |       await page.getByRole('button', { name: 'Reject' }).click();
  523 |       await new Promise(resolve => setTimeout(resolve, 2000));
  524 |       const successToast = page.getByRole('alert', { name: 'Task Rejected Successfully' });
  525 |       await new Promise(resolve => setTimeout(resolve, 500));
  526 |       const toastText = await successToast.textContent();
  527 |       console.log("Toast Message:", toastText?.trim());
  528 |       await expect(successToast).toHaveText("Task Rejected Successfully");
  529 |     });
  530 |     });
  531 |
  532 |  test.describe('Maker Flow  ', () => {
  533 |     test.beforeEach(async ({ page }) => {
  534 |       const lamChecker = new LAM_LoginPage(page);
  535 |       await page.goto('https://cdi-r3.finwyze.com');
  536 |       await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  537 |     });
  538 |     test('TC_03_03 (Retry): Resubmit the rejected active task as Maker.', async ({ page }) => {
  539 |       await new Promise(resolve => setTimeout(resolve, 3000));
  540 |           page = await Promise.all([
  541 |             page.waitForEvent("popup"), 
  542 |             page.locator('//a[text()="View Task"]').click(), 
  543 |             ]).then(([newPage]) => newPage);
  544 |             await page.waitForLoadState();
  545 |             await new Promise(resolve => setTimeout(resolve, 3000));
  546 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  547 |       await new Promise(resolve => setTimeout(resolve, 3000));
  548 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  549 |       await new Promise(resolve => setTimeout(resolve, 2000));
  550 |       await page.getByRole('button', { name: ' Re-submit Task' }).click();
  551 |       await page.locator('#internal_user_comments').click();
  552 |       await page.locator('#internal_user_comments').fill('RESUBIT THE TASK FOR ACTIVATe');
  553 |       await page.getByRole('button', { name: 'Re-Submit' }).click();
  554 |       const successToast = page.getByRole('alert', { name: 'Task Re-submitted Successfully' });
  555 |       await new Promise(resolve => setTimeout(resolve, 500));
> 556 |       const toastText = await successToast.textContent();
      |                                            ^ Error: locator.textContent: Test timeout of 100000ms exceeded.
  557 |       console.log("Toast Message:", toastText?.trim());
  558 |       await expect(successToast).toHaveText("Task Re-submitted Successfully");
  559 |       await new Promise(resolve => setTimeout(resolve, 2000));
  560 |     });
  561 |     });
  562 |
  563 | test.describe('Checker Flow', () => {
  564 |   test.beforeEach(async ({ page }) => {
  565 |     const lamChecker = new LAM_LoginPage(page);
  566 |     await page.goto('https://cdi-r3.finwyze.com');
  567 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  568 |   });
  569 |
  570 |   test('TC_04_02: Approve the user deactivation task as Checker.r', async ({ page }) => {
  571 |     await new Promise(resolve => setTimeout(resolve, 3000));
  572 |         page = await Promise.all([
  573 |           page.waitForEvent("popup"), 
  574 |           page.locator('//a[text()="View Task"]').click(), 
  575 |           ]).then(([newPage]) => newPage);
  576 |           await page.waitForLoadState();
  577 |           await new Promise(resolve => setTimeout(resolve, 3000));
  578 |
  579 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  580 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  581 |     await new Promise(resolve => setTimeout(resolve, 1000));
  582 |     await page.locator('#task_internal_user_comments').click();
  583 |     await new Promise(resolve => setTimeout(resolve, 2000));
  584 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  585 |     await new Promise(resolve => setTimeout(resolve, 1000));
  586 |     await page.getByRole('button', { name: 'Approve' }).click();
  587 |     await new Promise(resolve => setTimeout(resolve, 2000));
  588 |   });
  589 | });
  590 |
  591 |
  592 |  });
  593 |
  594 |
  595 |
```