export default class BankAccountDetails  {
    constructor(page) {
      this.page = page;
      this.addBankAccount = page.locator('//span[text()="add"]');
      this.selectAccountType = page.locator('//select[@id="accountType"]');
      this.enterAccountNumber = page.getByPlaceholder("Enter Account Number");
      this.enterIFSCcode = page.getByPlaceholder("Enter IFSC Code");
      this.enterMICRNumber = page.getByPlaceholder("Enter MICR Code");
      this.enterBankName = page.locator('//input[@id="bankName"]');
      this.enterbankBranch = page.locator('//input[@id="branchName"]');
      this.clickSaveButton = page.locator('//button[@id="save"]');
      this.proceedBankAccount = page.locator('//button[@id="Proceed"]');
      this.proceedBankAccount1 = page.locator('//button[@id="proceed"]');
      
      // Application Bank Account Selection

      this.selectBankAccount = page.locator('(//input[@id="isSelected"])[1]');
      
    }
   
    async addBankDetails(accNo, ifsc, micr, bankName, bankbranch) {
        
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.addBankAccount.click();
      await new Promise(resolve => setTimeout(resolve, 500));
      await this.selectAccountType.selectOption("CURRENT");
      await this.enterAccountNumber.fill(accNo);
      await this.enterIFSCcode.fill(ifsc);
      await this.enterMICRNumber.fill(micr);
      await this.enterBankName.fill(bankName);
      await this.enterbankBranch.fill(bankbranch);
      await this.clickSaveButton.scrollIntoViewIfNeeded();
      await this.clickSaveButton.click();
      await this.proceedBankAccount.click();
    }

    async selectBankAccountDetails(){
      await new Promise(resolve => setTimeout(resolve, 500));
      await this.addBankAccount.click();
      await this.selectBankAccount.check();
      await this.clickSaveButton.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.proceedBankAccount1.click();
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  