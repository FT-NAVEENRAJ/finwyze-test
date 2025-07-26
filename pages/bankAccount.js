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

      //BANK Journey - Bank Account opening

      this.selectSMSFirstHolder = page.locator('//input[@id="YES"][@ng-reflect-form-control-name="firstInvestor"]');
      this.enterMobileNumber = page.locator('//input[@id="mobileNumber"]');
      this.enterEmailAddressOne = page.locator('//input[@formcontrolname="emailAddressBankAcc"]');
      this.selectFrequencyofBankAccountStatement = page.locator('//input[@id="daily"]');
      this.clickBankRiskProfile = page.locator('//a[@id="Disclosure Pending"]');
      this.selectEducation = page.locator('//select[@id="education"]');
      this.selectOccupation = page.locator('//select[@id="occupation"]');
      this.selectNumberofYearExperience = page.locator('//select[@formcontrolname="yearsInBusiness"]');
      this.selectGrossAnnualIncome = page.locator('//select[@formcontrolname="grossIncome"]');
      this.selectAnualIncomeTurnover = page.locator('//select[@id="feeType"]');
      this.enterTypeofIndustry = page.locator('//input[@formcontrolname="industryType"]');
      this.enterCode = page.locator('//input[@formcontrolname="code"]');
      this.selectSourseofFund = page.locator('//select[@id="sourceFunds"]');
      this.clickSaveBankRiskProfile = page.locator('//button[text()="Save"]');

        // Bank Nominee Details
      
      this.selectBankNomineeYes = page.locator('//input[@id="YES"][@formcontrolname="nomineeExists"]');
      this.clickIcon = page.locator('//span[@id="add"]');
      this.selectNominee = page.locator('//input[@id="isSelected"]');
      this.enterAllocation = page.locator('//input[@id="allocation"]');
      this.clickAddNominee = page.locator('//button[@id="add Nominee"]');
      this.clickBankAccountOpeningProceed = page.locator('//button[@id="Proceed"]');
      
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
    async completeBankAccountOpening(){
      await this.selectSMSFirstHolder.check();
      await this.enterMobileNumber.fill("9344872104");
      await this.enterEmailAddressOne.fill("TEST@GMAIL.COM");
      await this.selectFrequencyofBankAccountStatement.check();

    }
    async bankRiskProfile(education,occupation,years,grossIncome,annualTurnOver,industry,code,sourseFund){
      await this.clickBankRiskProfile.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.selectEducation.selectOption(education);
      await this.selectOccupation.selectOption(occupation);
      await this.selectNumberofYearExperience.selectOption(years);
      await this.selectGrossAnnualIncome.selectOption(grossIncome);
      await this.selectAnualIncomeTurnover.selectOption(annualTurnOver);
      await this.enterTypeofIndustry.fill(industry);
      await this.enterCode.fill(code);
      await this.selectSourseofFund.selectOption(sourseFund);
      await this.clickSaveBankRiskProfile.click();

    }
    async bankNomineeDetails(){
      // await this.selectBankNomineeYes.check();
      // await new Promise(resolve => setTimeout(resolve, 500));
      // await this.clickIcon.click();
      // await new Promise(resolve => setTimeout(resolve, 1000));
      // await this.selectNominee.nth(0).check();
      // await this.enterAllocation.nth(0).fill("100");
      // await new Promise(resolve => setTimeout(resolve, 500));
      // await this.clickAddNominee.click();
      await this.clickBankAccountOpeningProceed.click();

    }
  }
  