export default class InvestorProfile {
    constructor(page) {
        this.page = page;
        this.enterPan = page.getByRole('textbox', { name: 'PAN' });
        this.enterDOB = page.getByRole('textbox', { name: 'DD-MM-YYYY' });
        this.enterFirstname = page.getByRole('textbox', { name: 'Enter First Name' });
        this.enterMiddleName = page.getByRole('textbox', { name: 'Enter Middle Name' });
        this.enterLastName = page.getByRole('textbox', { name: 'Enter Last Name' });
        this.selectGender = page.locator("#gender");
        this.enterMobileNumber = page.getByRole('textbox', { name: 'Enter Mobile Name' });
        this.enterEmailAddress = page.getByRole('textbox', { name: 'Enter E-mail Address' });
        this.proceedAddInvestor = page.getByRole("button", { name: "Proceed" });
        this.proceedBasicDetails = page.getByRole('button', { name: 'Next' });
    }

    async investorBasicDetails(pan,dob,firstName, lastName, mobileNumber, emailAddress) {
        await this.page.waitForTimeout(2000);
        await this.enterPan.fill(pan);
        await this.enterDOB.fill(dob)
        await this.enterFirstname.fill(firstName);
        await this.enterLastName.fill(lastName);
        await new Promise(resolve => setTimeout(resolve, 500));
        await this.selectGender.selectOption("MALE");
        await this.enterMobileNumber.fill(mobileNumber);
        await new Promise(resolve => setTimeout(resolve, 500));
        await this.enterEmailAddress.fill(emailAddress);
        await new Promise(resolve => setTimeout(resolve, 500));
        await this.proceedAddInvestor.click();
        await this.proceedBasicDetails.click();
    }
}
