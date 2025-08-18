export default class ApplicationBasicInformationPopup {
    constructor(page) {
        this.page = page;
        this.clickNewApplication = page.getByText('New Application');
        this.selectInvestorType = page.locator('//select[@id="InvestorType"]');
        this.selectResidentialType = page.locator('//select[@formcontrolname="residentialType"]');
        this.selectApplicationType = page.locator('//select[@id="ApplicationType"]');
        this.selectInvestor = page.locator('//select[@id="noOfInvestor"]');
        this.selectApplicationMode = page.locator('//select[@id="ApplicationMode"]');
        this.selectJurisdictionOfStampPaper = page.locator('//select[@id="jurisdiction"]');
        this.selectDistributorForInvestment = page.locator('//input[@value="NO"]');
        this.clickProceed = page.getByText('Proceed');
    }

    async applicationBasicInformationPopup(number) {
        await this.clickNewApplication.click();
        await new Promise(resolve => setTimeout(resolve, 3000));
        // await this.selectInvestorType.selectOption("INDIVIDUAL");
        // await this.selectResidentialType.selectOption("RESIDENT");
        await this.selectApplicationType.selectOption("DEMAT+PMS");//DEMAT+PMS+BANK
        await this.selectApplicationMode.selectOption("DIGITAL");
        await this.selectJurisdictionOfStampPaper.selectOption("MAHARASHTRA");
        await this.selectDistributorForInvestment.check();
        await this.selectInvestor.selectOption(number);
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.clickProceed.click();
    }
    async applicationBasicInformationPopupBank() {
        await this.clickNewApplication.click();
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.selectInvestorType.selectOption("INDIVIDUAL");
        await this.selectResidentialType.selectOption("RESIDENT");
        await this.selectApplicationType.selectOption("DEMAT+PMS+BANK");
        await this.selectApplicationMode.selectOption("DIGITAL");
        await this.selectJurisdictionOfStampPaper.selectOption("MAHARASHTRA");
        await this.selectDistributorForInvestment.check();
        await this.selectInvestor.selectOption("1");
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.clickProceed.click();
    }

    async applicationBasicInformationPopupDemat(noOfInvestor) {
        await this.clickNewApplication.click();
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.selectInvestorType.selectOption("INDIVIDUAL");
        await this.selectResidentialType.selectOption("RESIDENT");
        await this.selectApplicationType.selectOption("DEMAT");
        await this.selectApplicationMode.selectOption("DIGITAL");
       // await this.selectJurisdictionOfStampPaper.selectOption("TELANGANA");
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.selectDistributorForInvestment.check();
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.selectInvestor.selectOption(noOfInvestor);
        await new Promise(resolve => setTimeout(resolve, 3000));
        await this.clickProceed.click();
    }
}
