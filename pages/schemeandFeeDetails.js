export default class SchemeFeeDetails {
    constructor(page) {

        this.selectSchemeName = page.locator('(//input[@id="isSelected"])[1]');
        this.selectInvestmentType = page.locator('(//select[@id="schemePlanType"])[1]');
        this.selectFeeType = page.locator('(//select[@id="feeType"])[1]');
        this.enterInvestmentAmount = page.locator('(//input[@id="aum"])[1]');
        this.schemeProceed = page.locator('//button[@id="proceed"]');
        this.stpHyperlink = page.locator('//a[@id="undefined_Pending"]');
        this.enterInvestmentAmount1 = page.locator('//input[@id="initialInvestmentAmount"]');
        this.enterInstallmentAmount = page.locator('//input[@id="installmentAmount"]');
        this.clickFeeStructureProceed = page.locator('//button[@id="Proceed"]');




         //Investment Tyoe =  LUMPSUM, STP
        // Fee Type = HYBRID, FIXED, VARIABLE


    }

    async selectSchemeandFeeDetails(amount){
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.selectSchemeName.check();
        await this.selectInvestmentType.selectOption("LUMPSUM");
        await this.selectFeeType.selectOption("FIXED");
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.enterInvestmentAmount.fill(amount);
        await this.schemeProceed.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.clickFeeStructureProceed.click();
        

    }
}