export default class OccupationPage {
    constructor(page) {
      this.page = page;
      this.selectGrossAnnualIncome = page.locator("#gross");
      this.enterGrossOn = page.getByPlaceholder('DD-MM-YYYY').nth(0);
      this.selectSourseofFund =  page.locator("#sourceOfFund");
      this.selectEducationQualifictaion = page.locator("#educationQualification");
      this.enterNetWorth = page.locator("#netWorth");
      this.enterNetAsOn = page.locator('//input[@id="asOnNetWorth"]');
      this.enterAnyOtherInformation =page.locator('//input[@id="otherInformation"]');
      this.enterBriefDetailsofOccupation = page.locator('//input[@id="briefOccupationDetails"]');
      this.selectOccupationIndustry = page.locator("#occupationType");
      this.enterInvestmentExperienceinCapitalMarket = page.locator('//input[@id="experienceInCapitalMarket"]');
      this.selectPoliticallyExposed = page.locator("#politicallyExposed");
      this.selectEmployementStatus =  page.locator("#employeeStatus");
      this.clickOccupationProceed = page.getByRole('button', { name: 'Proceed' });
    }
    async occupationDetails(grossOnDate, netWorth, netOn, info, brief, exp) {
      await new Promise(resolve => setTimeout(resolve, 3000));
      await this.selectGrossAnnualIncome.waitFor();
      await this.selectGrossAnnualIncome.selectOption("ABOVE 1 CR");
      await new Promise(resolve => setTimeout(resolve, 400));
      await this.enterGrossOn.fill(grossOnDate);
      await this.selectSourseofFund.waitFor();
      await this.selectSourseofFund.selectOption("SAVINGS");
      await this.selectEducationQualifictaion.waitFor();
      await this.selectEducationQualifictaion.selectOption("UNDERGRADUATE");
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.enterNetWorth.fill(netWorth);
      await new Promise(resolve => setTimeout(resolve, 400));
      await this.enterNetAsOn.fill(netOn);
      await new Promise(resolve => setTimeout(resolve, 400));
      await this.enterAnyOtherInformation.fill(info);
      await new Promise(resolve => setTimeout(resolve, 400));
      await this.enterBriefDetailsofOccupation.fill(brief);
      await this.selectOccupationIndustry.waitFor();
      await this.selectOccupationIndustry.selectOption("AGRICULTURIST");
      await new Promise(resolve => setTimeout(resolve, 400));
      await this.enterInvestmentExperienceinCapitalMarket.fill(exp);
      await new Promise(resolve => setTimeout(resolve, 400));
      await this.selectPoliticallyExposed.nth(2).check();
      await this.selectEmployementStatus.nth(2).check();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.clickOccupationProceed.click();

    }
}
 