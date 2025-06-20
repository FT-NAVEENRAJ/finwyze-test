export default class LAM_LoginPage{
    constructor(page) {
      this.page = page;

      this.emailInput = page.locator('//input[@type="email"]');
      this.clickEmailNextbuttton = page.locator('//input[@id="idSIButton9"]');
      this.passwordInput = page.getByPlaceholder("Password");
      this.signinButton = page.locator('//input[@value="Sign in"]');
      this.staySignIn = page.locator('//input[@type="submit"]');
      
      this.viewTaskHypelink = page.locator('//a[text()="View Task"]');
      this.clickUserButton= page.locator('//button[@id="users"]');
      this.clickAddUserButton = page.locator('//button[text()="Add User "]');
      this.enterFulName = page.locator('//input[@id="internal_user_fullName"]');
      this.enterEmployeeId = page.locator('//input[@id="internal_user_employeeId"]');
      this.enterEmailAddress = page.locator('//input[@id="internal_user_emailAddress"]');
      this.enterMobileNumber = page.locator('//input[@id="internal_user_mobileNumber"]');
      this.enterLocation = page.locator('(//input[@type="text"])[5]');
      this.selectApplicationAccess = page.locator('//ng-select[@id="internal_user_applications"]');
      this.selectUserRoles = page.locator('//ng-select[@id="internal_user_roles"]');
      this.clickSaveButton = page.locator('//button[@id="internal_user_submit"]');

      // Checker
      this.clickTaskID = page.getByRole('row', { name: 'NEW TR25040900442 09-04-2025' }).locator('#dropdown');
      this.clickAction = page.getByRole('button', { name: ' Approve/Reject' });
      this.clickApproveReject = page.locator('#task_internal_user_comments');
      this.enterCommants = page.getByRole('button', { name: 'Approve' });
      


    } 
    
    async loginLamMaker(email, password) {
      await this.emailInput.waitFor();
      await this.emailInput.fill(email);
      await this.clickEmailNextbuttton.click();
      await this.passwordInput.fill(password);
      await this.signinButton.click();
      await this.staySignIn.click();
    }
    async loginLamChecker(email, password) {
        await this.emailInput.waitFor();
        await this.emailInput.fill(email);
        await this.clickEmailNextbuttton.click();
        await this.passwordInput.fill(password);
        await this.signinButton.click();
        await this.staySignIn.click();
      }
      async clickUser(){
        await new Promise(resolve => setTimeout(resolve, 5000));
        await new Promise(resolve => setTimeout(resolve, 2500));
        await this.clickUserButton.click();
        await new Promise(resolve => setTimeout(resolve,1000));

      }
      async AddUser(Name, mobileNumber,) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        //await this.viewTaskHypelink.click();
        await new Promise(resolve => setTimeout(resolve, 2500));
        await this.clickUserButton.click();
        await new Promise(resolve => setTimeout(resolve,1000));
        await this.clickAddUserButton.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.enterFulName.fill(Name);
        // // await this.enterEmployeeId.fill(empID);
        // // let generatedEmail = `${empID}@ICICIBANK.com`.toLowerCase();

        // // // let generatedEmail = email;
        // // // if (empID.toLowerCase() === "Vinayan") {
        // // //     generatedEmail = `${empID}@ICICIBANK.com`; 
        // // // }
        // // await new Promise(resolve => setTimeout(resolve, 1000));
        // // await this.enterEmailAddress.fill(generatedEmail);
        // console.log(generatedEmail);
        await this.enterMobileNumber.fill(mobileNumber);
        await new Promise(resolve => setTimeout(resolve, 2000));
       // await this.selectApplicationAccess.click();
      //  await page2.locator('.ng-input > input').first().click();
      //  await page2.locator('ng-select').filter({ hasText: 'No items found' }).getByRole('textbox').fill('chenn');
      //  await page2.getByText('Chennai Main Branch').click();

      //  await page2.locator('#internal_user_applications').getByRole('textbox').click();
      //  await page2.getByText('USER MANAGEMENT').click();
      //  await page2.locator('#internal_user_roles').getByRole('textbox').click();
      //  await page2.getByText('LAM ID Maker', { exact: true }).click();

      //  // await page.waitForLoadState();
      //   // await this.selectApplicationAccess.selectOption("USER MANAGEMENT");

      //   // await this.selectUserRoles.selectOption("LAM ID MAKER");
      //   await new Promise(resolve => setTimeout(resolve, 2000));
      //   await this.clickSaveButton.click();

      }

  
   
  }
  