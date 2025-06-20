export default class NomineeDetails {
    constructor(page) {
      this.page = page;
      this.clickAddNominee = page.locator('//span[@id="addNominee"]');
      this.enterFirstName = page.locator('//input[@id="firstName"]');
      this.enterMiddleName = page.locator('//input[@id="middleName"]');
      this.enterLastName = page.locator('//input[@id="lastName"]');
      this.selectRalationshipInvestor = page.locator('//select[@id="relationshipType"]');
      this.enterDOB = page.locator('//input[@id="dob"]');
      this.enterAddresLine1 = page.locator('//input[@id="addressLine1"]');
      this.enterAddressLine2 = page.locator('//input[@id="addressLine2"]');
      this.enterAddressLine3 = page.locator('//input[@id="addressLine3"]');
      this.selectCountry =  page.locator('#country');
      this.enterPincode = page.locator('#pinCode');
      this.enterMobileNumber = page.getByPlaceholder("Enter Mobile Number");
      this.enterEmailAddress = page.getByPlaceholder("Enter E-mail Address");
      this.selectProofType = page.locator('//select[@id="proofofType"]');
      this.enterProofNumber = page.getByPlaceholder("Proof Number");
      this.addNomineeButton = page.locator('//button[@id="addNominee"]');
      this.clickNomineeProceed = page.locator('//button[@id="Proceed"]');
// Application Nominee details

      this.selectYes = page.locator('//input[@id="YES"]');
      this.clickAddIcon = page.locator('//span[@id="add"]');
      this.selectNominee = page.locator('(//input[@id="isSelected"])[1]');
      this.enterAllocation = page.locator('(//input[@id="allocation"])[1]');
      this.selectNominee1 = page.locator('(//input[@id="isSelected"])[2]');
      this.enterAllocation1 = page.locator('(//input[@id="allocation"])[2]');
      this.clickAddNomineeButton = page.locator('//button[@id="add Nominee"]');
      this.saveNomineeButton = page.locator('//button[@id="save Nominee"]');
    


    }

    async applicationNomineeSelection(){
      await new Promise(resolve => setTimeout(resolve, 500));
      await this.selectYes.check();
      await new Promise(resolve => setTimeout(resolve, 500));
      await this.clickAddIcon.click();
      await new Promise(resolve => setTimeout(resolve, 500));
      await this.selectNominee.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.enterAllocation.fill("100");
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.selectNominee1.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.enterAllocation1.fill("30");
      await new Promise(resolve => setTimeout(resolve,10500));
      await this.clickAddNomineeButton.click();
      await new Promise(resolve => setTimeout(resolve, 500));
      await this.saveNomineeButton.click();

    }
    async addNominee(firstName,lastName, dob, address1, address2,pinCode, mobileNumber,emailAddress,proofNumber) {

      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.clickAddNominee.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.enterFirstName.fill(firstName);
      await this.enterLastName.fill(lastName);
      await this.selectRalationshipInvestor.selectOption("SISTER");
      await this.enterDOB.fill(dob);
      await this.enterAddresLine1.fill(address1);
      await this.enterAddressLine2.fill(address2);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.selectCountry.waitFor();
      await this.selectCountry.selectOption({ label: 'India' });
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.enterPincode.click();
      await this.enterPincode.fill(pinCode);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.enterPincode.press('Tab');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.enterMobileNumber.fill(mobileNumber);
      await this.enterEmailAddress.fill(emailAddress);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.selectProofType.click();
      await this.selectProofType.selectOption({ label: 'Proof of Identity' });
      await this.enterProofNumber.fill(proofNumber);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.addNomineeButton.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.clickNomineeProceed.click();
    }
  }
  