import { test, expect } from '@playwright/test';
import LAM_LoginPage from "../pages/lamlogin.js";
let page;
let empId="test11";
let generatedEmail = `${empId}@ICICIBANK.com`;



test.describe('LAM ID Module Tests', () => {
  
  test.describe('Maker Flow  ', () => {
    test.beforeEach(async ({ page }) => {
      const lamMaker = new LAM_LoginPage(page);
      await page.goto('https://cdi-r3.finwyze.com');
      await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
    });
    test('TC_01_01:Successfully create a new user as Maker.', async ({ page }) => {
      page = await Promise.all([
              page.waitForEvent("popup"), 
              page.locator('//a[text()="View Task"]').click(), 
              ]).then(([newPage]) => newPage);
              await page.waitForLoadState()
    
      const lamPopup = new LAM_LoginPage(page);
      await lamPopup.AddUser("Arunachalam", "9080365952");
      await page.locator('//input[@id="internal_user_employeeId"]').fill(empId);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.locator('//input[@id="internal_user_emailAddress"]').fill(generatedEmail);
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('.ng-input > input').first().click();
      await page.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chennai');
      await page.getByText('Chennai Main Branch').click();
      await page.locator('#internal_user_applications').getByRole('textbox').click();
      await page.getByText('USER MANAGEMENT').click();
      await page.locator('#internal_user_roles').getByRole('textbox').click();
      await page.getByText('LAM ID Maker', { exact: true }).click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('//button[@id="internal_user_submit"]').click();
      await new Promise(resolve => setTimeout(resolve, 5000));
      const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Created Successfully");
      

    });
    });
  test.describe('Maker Flow  ', () => {
    test.beforeEach(async ({ page }) => {
      const lamMaker = new LAM_LoginPage(page);
      await page.goto('https://cdi-r3.finwyze.com');
      await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
    });
  test('TC_01_02: Attempt to create a duplicate user and verify system response.', async({page})=>{

    page = await Promise.all([
      page.waitForEvent("popup"), 
      page.locator('//a[text()="View Task"]').click(), 
      ]).then(([newPage]) => newPage);
      await page.waitForLoadState()

      const lamPopup = new LAM_LoginPage(page);
      await lamPopup.AddUser("Arunachalam", "9080365952");
      await page.locator('//input[@id="internal_user_employeeId"]').fill(empId);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.locator('//input[@id="internal_user_emailAddress"]').fill(generatedEmail);
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('.ng-input > input').first().click();
      await page.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chennai');
      await page.getByText('Chennai Main Branch').click();
      await page.locator('#internal_user_applications').getByRole('textbox').click();
      await page.getByText('USER MANAGEMENT').click();
      await page.locator('#internal_user_roles').getByRole('textbox').click();
      await page.getByText('LAM ID Maker', { exact: true }).click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('//button[@id="internal_user_submit"]').click();
      await new Promise(resolve => setTimeout(resolve, 5000)); 
      const duplicateUserPopup = page.locator('div.toast-title').filter({ hasText: 'Task is already exist in checker queue' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastTextDuplcate = await duplicateUserPopup.textContent();
      console.log("Toast Message:", toastTextDuplcate?.trim());
      await expect(duplicateUserPopup).toHaveText("Task is already exist in checker queue");

    });
    });
  test.describe('Checker Flow', () => {
    test.beforeEach(async ({ page }) => {
      const lamChecker = new LAM_LoginPage(page);
      await page.goto('https://cdi-r3.finwyze.com');
      await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
    });
    test('TC_01_03: Reject the user creation task as Checker.', async ({ page }) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
          page = await Promise.all([
            page.waitForEvent("popup"), 
            page.locator('//a[text()="View Task"]').click(), 
            ]).then(([newPage]) => newPage);
            await page.waitForLoadState();
            await new Promise(resolve => setTimeout(resolve, 3000));
      await page.locator('//input[@id="search"]').fill(generatedEmail);  
      await page.locator('(//i[@id="dropdown"])[1]').click();
      await page.getByRole('button', { name: ' Approve/Reject' }).click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.locator('#task_internal_user_comments').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('#task_internal_user_comments').fill('Reject');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.getByRole('button', { name: 'Reject' }).click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      const successToast = page.getByRole('alert', { name: 'Task Rejected Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Rejected Successfully");
      
    });
    });
  test.describe('Maker Flow  ', () => {
    test.beforeEach(async ({ page }) => {
      const lamChecker = new LAM_LoginPage(page);
      await page.goto('https://cdi-r3.finwyze.com');
      await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
    });
    test('TC_01_04: Resubmit the rejected task as Maker.', async ({ page }) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
          page = await Promise.all([
            page.waitForEvent("popup"), 
            page.locator('//a[text()="View Task"]').click(), 
            ]).then(([newPage]) => newPage);
            await page.waitForLoadState();
            await new Promise(resolve => setTimeout(resolve, 3000));
      await page.locator('//input[@id="search"]').fill(generatedEmail);
      await page.locator('(//i[@id="dropdown"])[1]').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('//button[@id="Re-submit Task"]').click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.locator('#internal_user_comment').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('#internal_user_comment').fill('Resubmit the task');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.locator('//button[@id="internal_user_submit"]').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      const successToast = page.getByRole('alert', { name: 'Task Re-submitted Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Re-submitted Successfully");
    });
    });
  test.describe('Checker Flow', () => {
    test.beforeEach(async ({ page }) => {
      const lamChecker = new LAM_LoginPage(page);
      await page.goto('https://cdi-r3.finwyze.com');
      await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
    });
    test('TC_01_05: Approve the user creation task as Checker.', async ({ page }) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
          page = await Promise.all([
            page.waitForEvent("popup"), 
            page.locator('//a[text()="View Task"]').click(), 
            ]).then(([newPage]) => newPage);
            await page.waitForLoadState();
            await new Promise(resolve => setTimeout(resolve, 3000));
      await page.locator('//input[@id="search"]').fill(generatedEmail); 
      await page.locator('(//i[@id="dropdown"])[1]').click();
      await page.getByRole('button', { name: ' Approve/Reject' }).click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.locator('#task_internal_user_comments').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('#task_internal_user_comments').fill('Approve');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.getByRole('button', { name: 'Approve' }).click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      const successToast = page.getByRole('alert', { name: 'Task Approved Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Approved Successfully");
    });
    });
  

//Scenario 2 : Edit the user to task

test.describe('Maker Flow  ',()=>{
  test.beforeEach(async ({ page }) => {
    const lamMaker = new LAM_LoginPage(page);
    await page.goto('https://cdi-r3.finwyze.com');
    await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
    });
  test('TC_02_01: Edit the existing user to update the data as a Maker. ', async ({ page }) => {
    page = await Promise.all([
            page.waitForEvent("popup"), 
            page.locator('//a[text()="View Task"]').click(), 
            ]).then(([newPage]) => newPage);
            await page.waitForLoadState()
  
    const lamPopup = new LAM_LoginPage(page);
    await lamPopup.clickUser();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.locator('//input[@id="search"]').fill(generatedEmail);
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.locator('//tr[td//span[@id="Inactive"]]//i[@class="dropdown-toggle fa fa-caret-down pl-10"]').click();
    await page.locator('//button[@id="Edit"]').click();
    const phoneNumber = page.locator('//input[@id="internal_user_mobileNumber"]');
    phoneNumber.click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await phoneNumber.press('Control+A');
    await phoneNumber.press('Backspace'); 
    await new Promise(resolve => setTimeout(resolve, 1000));
    await phoneNumber.fill('8344575135');
    await page.keyboard.press('Tab');
    await new Promise(resolve => setTimeout(resolve, 3000));
    await page.locator('//button[@id="internal_user_submit"]').click();
      await new Promise(resolve => setTimeout(resolve, 5000));
      const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Created Successfully");
    });
    });
test.describe('Checker Flow', () => {
    test.beforeEach(async ({ page }) => {
      const lamChecker = new LAM_LoginPage(page);
      await page.goto('https://cdi-r3.finwyze.com');
      await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
    });
    test('TC_02_02: Reject the user edit task as Checker.', async ({ page }) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
          page = await Promise.all([
            page.waitForEvent("popup"), 
            page.locator('//a[text()="View Task"]').click(), 
            ]).then(([newPage]) => newPage);
            await page.waitForLoadState();
            await new Promise(resolve => setTimeout(resolve, 3000));
      await page.locator('//input[@id="search"]').fill(generatedEmail);
      await page.locator('(//i[@id="dropdown"])[1]').click();
      await page.getByRole('button', { name: ' Approve/Reject' }).click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.locator('#task_internal_user_comments').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('#task_internal_user_comments').fill('Reject');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.getByRole('button', { name: 'Reject' }).click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      const successToast = page.getByRole('alert', { name: 'Task Rejected Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Rejected Successfully");
    });
    });
  test.describe('Maker Flow  ', () => {
    test.beforeEach(async ({ page }) => {
      const lamChecker = new LAM_LoginPage(page);
      await page.goto('https://cdi-r3.finwyze.com');
      await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
    });
    test('TC_02_03 (Retry): Resubmit the rejected edit task as Maker.', async ({ page }) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
          page = await Promise.all([
            page.waitForEvent("popup"), 
            page.locator('//a[text()="View Task"]').click(), 
            ]).then(([newPage]) => newPage);
            await page.waitForLoadState();
            await new Promise(resolve => setTimeout(resolve, 3000));
      await page.locator('//input[@id="search"]').fill(generatedEmail);
      await new Promise(resolve => setTimeout(resolve, 3000));
      await page.locator('(//i[@id="dropdown"])[1]').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('//button[@id="Re-submit Task"]').click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.locator('#internal_user_comment').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('#internal_user_comment').fill('Resubit the task');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.locator('//button[@id="internal_user_submit"]').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      const successToast = page.getByRole('alert', { name: 'Task Re-submitted Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Re-submitted Successfully");
    });
    });
test.describe('Checker Flow', () => {
  test.beforeEach(async ({ page }) => {
    const lamChecker = new LAM_LoginPage(page);
    await page.goto('https://cdi-r3.finwyze.com');
    await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
    });
  test('TC_02_04: (Approval): Approve the user edit task as Checker.', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
        page = await Promise.all([
          page.waitForEvent("popup"), 
          page.locator('//a[text()="View Task"]').click(), 
          ]).then(([newPage]) => newPage);
          await page.waitForLoadState();
          await new Promise(resolve => setTimeout(resolve, 3000));
    await page.locator('//input[@id="search"]').fill(generatedEmail);
    await page.locator('(//i[@id="dropdown"])[1]').click();
    await page.getByRole('button', { name: ' Approve/Reject' }).click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.locator('#task_internal_user_comments').click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.locator('#task_internal_user_comments').fill('APPROVE');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.getByRole('button', { name: 'Approve' }).click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    const successToast = page.getByRole('alert', { name: 'Task Approved Successfully' });
    await new Promise(resolve => setTimeout(resolve, 500));
    const toastText = await successToast.textContent();
    console.log("Toast Message:", toastText?.trim());
    await expect(successToast).toHaveText("Task Approved Successfully");
    });
    });


//Scenario 3 : Activate User
test.describe('Maker Flow',()=>{
  test.beforeEach(async ({ page }) => {
    const lamMaker = new LAM_LoginPage(page);
    await page.goto('https://cdi-r3.finwyze.com');
    await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  });

  test('TC_03_01: Activate an inactive user as Maker. ', async ({ page }) => {
    page = await Promise.all([
            page.waitForEvent("popup"), 
            page.locator('//a[text()="View Task"]').click(), 
            ]).then(([newPage]) => newPage);
            await page.waitForLoadState()
  
    const lamPopup = new LAM_LoginPage(page);
    await lamPopup.clickUser();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.locator('//input[@id="search"]').fill(generatedEmail);
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.locator('//tr[td//span[@id="Inactive"]]//i[@class="dropdown-toggle fa fa-caret-down pl-10"]').click();
    await page.locator('//button[@id="Activate/Deactivate"]').click();
    await page.locator('//textarea[@id="internal_user_comment"]').fill("Activate the User");
    await page.locator('//button[@id="internal_user_submit"]').click();
    await new Promise(resolve => setTimeout(resolve, 2000));
     const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Created Successfully");
  });
  
    });
test.describe('Checker Flow', () => {
    test.beforeEach(async ({ page }) => {
      const lamChecker = new LAM_LoginPage(page);
      await page.goto('https://cdi-r3.finwyze.com');
      await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
    });
    test('TC_03_02: Reject the user inactive task as Checker.', async ({ page }) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
          page = await Promise.all([
            page.waitForEvent("popup"), 
            page.locator('//a[text()="View Task"]').click(), 
            ]).then(([newPage]) => newPage);
            await page.waitForLoadState();
            await new Promise(resolve => setTimeout(resolve, 3000));
      await page.locator('//input[@id="search"]').fill(generatedEmail);
      await page.locator('(//i[@id="dropdown"])[1]').click();
      await page.getByRole('button', { name: ' Approve/Reject' }).click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.locator('#task_internal_user_comments').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('#task_internal_user_comments').fill('Reject');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.getByRole('button', { name: 'Reject' }).click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      const successToast = page.getByRole('alert', { name: 'Task Rejected Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Rejected Successfully");
    });
    });
 test.describe('Maker Flow  ', () => {
    test.beforeEach(async ({ page }) => {
      const lamChecker = new LAM_LoginPage(page);
      await page.goto('https://cdi-r3.finwyze.com');
      await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
    });
    test('TC_03_03: Resubmit the rejected inactive task as Maker.', async ({ page }) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
          page = await Promise.all([
            page.waitForEvent("popup"), 
            page.locator('//a[text()="View Task"]').click(), 
            ]).then(([newPage]) => newPage);
            await page.waitForLoadState();
            await new Promise(resolve => setTimeout(resolve, 3000));
      await page.locator('//input[@id="search"]').fill(generatedEmail);
      await new Promise(resolve => setTimeout(resolve, 3000));
      await page.locator('(//i[@id="dropdown"])[1]').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.getByRole('button', { name: ' Re-submit Task' }).click();
      await page.locator('#internal_user_comments').click();
      await page.locator('#internal_user_comments').fill('RESUBIT THE TASK FOR ACTIVATe');
      await page.getByRole('button', { name: 'Re-Submit' }).click();
      const successToast = page.getByRole('alert', { name: 'Task Re-submitted Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Re-submitted Successfully");
      await new Promise(resolve => setTimeout(resolve, 2000));
    });
    });
test.describe('Checker Flow', () => {
  test.beforeEach(async ({ page }) => {
    const lamChecker = new LAM_LoginPage(page);
    await page.goto('https://cdi-r3.finwyze.com');
    await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  });

  test('TC_03_04: Approve the user activation task as Checker.', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
        page = await Promise.all([
          page.waitForEvent("popup"), 
          page.locator('//a[text()="View Task"]').click(), 
          ]).then(([newPage]) => newPage);
          await page.waitForLoadState();
          await new Promise(resolve => setTimeout(resolve, 3000));
 await page.locator('//input[@id="search"]').fill(generatedEmail);
    await page.locator('(//i[@id="dropdown"])[1]').click();
    await page.getByRole('button', { name: ' Approve/Reject' }).click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.locator('#task_internal_user_comments').click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.locator('#task_internal_user_comments').fill('APPROVE');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.getByRole('button', { name: 'Approve' }).click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    const successToast = page.getByRole('alert', { name: 'Task Approved Successfully' });
    await new Promise(resolve => setTimeout(resolve, 500));
    const toastText = await successToast.textContent();
    console.log("Toast Message:", toastText?.trim());
    await expect(successToast).toHaveText("Task Approved Successfully");
  });
    });

// Scenario 4" Deactivate User

test.describe('Maker Flow',()=>{
  test.beforeEach(async ({ page }) => {
    const lamMaker = new LAM_LoginPage(page);
    await page.goto('https://cdi-r3.finwyze.com');
    await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  });

  test('TC_04_01: Deactivate an active user as Maker.', async ({ page }) => {
    page = await Promise.all([
            page.waitForEvent("popup"), 
            page.locator('//a[text()="View Task"]').click(), 
            ]).then(([newPage]) => newPage);
            await page.waitForLoadState()
  
    const lamPopup = new LAM_LoginPage(page);
    await lamPopup.clickUser();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.locator('//input[@id="search"]').fill(generatedEmail);
    await new Promise(resolve => setTimeout(resolve, 2000));
     await new Promise(resolve => setTimeout(resolve, 2000));
     await page.locator('//tr[td//span[@id="Active"]]//i[@class="dropdown-toggle fa fa-caret-down pl-10"]').click();
     await page.locator('//button[@id="Activate/Deactivate"]').click();
     await page.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
     await page.locator('//button[@id="internal_user_submit"]').click();
     await new Promise(resolve => setTimeout(resolve, 2000));
     const successToast = page.getByRole('alert', { name: 'Task Created Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Created Successfully");
  });
  
    });
test.describe('Checker Flow', () => {
    test.beforeEach(async ({ page }) => {
      const lamChecker = new LAM_LoginPage(page);
      await page.goto('https://cdi-r3.finwyze.com');
      await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
    });
    test('TC_04_02: Reject the user active task as Checker.', async ({ page }) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
          page = await Promise.all([
            page.waitForEvent("popup"), 
            page.locator('//a[text()="View Task"]').click(), 
            ]).then(([newPage]) => newPage);
            await page.waitForLoadState();
            await new Promise(resolve => setTimeout(resolve, 3000));
      await page.locator('//input[@id="search"]').fill(generatedEmail);
      await page.locator('(//i[@id="dropdown"])[1]').click();
      await page.getByRole('button', { name: ' Approve/Reject' }).click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.locator('#task_internal_user_comments').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.locator('#task_internal_user_comments').fill('Reject');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.getByRole('button', { name: 'Reject' }).click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      const successToast = page.getByRole('alert', { name: 'Task Rejected Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Rejected Successfully");
    });
    });
 test.describe('Maker Flow  ', () => {
    test.beforeEach(async ({ page }) => {
      const lamChecker = new LAM_LoginPage(page);
      await page.goto('https://cdi-r3.finwyze.com');
      await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
    });
    test('TC_04_03: Resubmit the rejected active task as Maker.', async ({ page }) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
          page = await Promise.all([
            page.waitForEvent("popup"), 
            page.locator('//a[text()="View Task"]').click(), 
            ]).then(([newPage]) => newPage);
            await page.waitForLoadState();
            await new Promise(resolve => setTimeout(resolve, 3000));
      await page.locator('//input[@id="search"]').fill(generatedEmail);
      await new Promise(resolve => setTimeout(resolve, 3000));
      await page.locator('(//i[@id="dropdown"])[1]').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.getByRole('button', { name: ' Re-submit Task' }).click();
      await page.locator('#internal_user_comments').click();
      await page.locator('#internal_user_comments').fill('RESUBIT THE TASK FOR ACTIVATe');
      await page.getByRole('button', { name: 'Re-Submit' }).click();
      const successToast = page.getByRole('alert', { name: 'Task Re-submitted Successfully' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const toastText = await successToast.textContent();
      console.log("Toast Message:", toastText?.trim());
      await expect(successToast).toHaveText("Task Re-submitted Successfully");
      await new Promise(resolve => setTimeout(resolve, 2000));
    });
    });
test.describe('Checker Flow', () => {
  test.beforeEach(async ({ page }) => {
    const lamChecker = new LAM_LoginPage(page);
    await page.goto('https://cdi-r3.finwyze.com');
    await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  });

  test('TC_04_04: Approve the user deactivation task as Checker.r', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
        page = await Promise.all([
          page.waitForEvent("popup"), 
          page.locator('//a[text()="View Task"]').click(), 
          ]).then(([newPage]) => newPage);
          await page.waitForLoadState();
          await new Promise(resolve => setTimeout(resolve, 3000));

    await page.locator('(//i[@id="dropdown"])[1]').click();
    await page.getByRole('button', { name: ' Approve/Reject' }).click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.locator('#task_internal_user_comments').click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.locator('#task_internal_user_comments').fill('APPROVE');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.getByRole('button', { name: 'Approve' }).click();
    await new Promise(resolve => setTimeout(resolve, 2000));
     const successToast = page.getByRole('alert', { name: 'Task Approved Successfully' });
    await new Promise(resolve => setTimeout(resolve, 500));
    const toastText = await successToast.textContent();
    console.log("Toast Message:", toastText?.trim());
    await expect(successToast).toHaveText("Task Approved Successfully");
  });
    });

 });


