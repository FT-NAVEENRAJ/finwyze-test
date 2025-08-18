export default class AdditionalDetails{
    constructor(page){

// Risk Profile Pending

this.clickRiskProfileHyperlink = page.locator('//a[@id="Risk Profile pending"]');
this.selectQuestion1 =page.locator('#RISK_FILED_5');
this.selectQuestion2 =page.locator('#RISK_FILED_13_OPTION_2RISK_FILED_130');
this.selectQuestion3 =page.locator('#RISK_FILED_12_OPTION_1RISK_FILED_120');
this.selectQuestion4 =page.locator('#RISK_FILED_11_OPTION_3RISK_FILED_110');
this.selectQuestion5 =page.locator('#RISK_FILED_10_OPTION_3RISK_FILED_100');
this.selectQuestion6 =page.locator('#RISK_FILED_9_OPTION_4RISK_FILED_90');
this.selectQuestion7 =page.locator('#RISK_FILED_8_OPTION_3RISK_FILED_80');
this.selectQuestion8 =page.locator('#RISK_FILED_7_OPTION_2RISK_FILED_70');
this.selectQuestion9 =page.locator('#RISK_FILED_6_OPTION_2RISK_FILED_60');
this.selectQuestion10 =page.locator('#RISK_FILED_3_OPTION_2RISK_FILED_30');
this.selectQuestion11 =page.locator('#RISK_FILED_1');
this.selectQuestion12 =page.locator('#RISK_FILED_4');
this.selectQuestion13 =page.locator('#RISK_FILED_2');
this.clickRiskProceed = page.locator('(//button[@id="Proceed"])[2]');
this.clickProceed = page.locator('//button[@id="Proceed"]');

//Disclosure of Interest

this.clickHyperlinkDisclosure = page.locator('//a[@id="Disclosure Pending"]');
this.question_one = page.locator('(//input[@type="radio"])[6]');
this.question_two = page.locator('(//input[@type="radio"])[8]');

    }

async addRiskQuestion(){
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.clickRiskProfileHyperlink.click();
    await new Promise(resolve => setTimeout(resolve, 3000));
    await this.selectQuestion1.selectOption('OPTION_2');
    await this.selectQuestion2.check();
    await this.selectQuestion3.check();
    await this.selectQuestion4.check();
    await this.selectQuestion5.check();
    await this.selectQuestion6.check();
    await this.selectQuestion7.check();
    await this.selectQuestion8.check();
    await this.selectQuestion9.check();
    await this.selectQuestion10.check();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.selectQuestion11.selectOption('OPTION_2');
    await this.selectQuestion12.selectOption('OPTION_2');
    await this.selectQuestion13.selectOption('OPTION_3');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.clickRiskProceed.click();
    
}
async addRiskQuestion2() {
    // First Holder
    await this.clickRiskProfileHyperlink.click();
    await this.selectQuestion1.first().selectOption('OPTION_2');
    await this.selectQuestion2.first().check();
    await this.selectQuestion3.first().check();
    await this.selectQuestion4.first().check();
    await this.selectQuestion5.first().check();
    await this.selectQuestion6.first().check();
    await this.selectQuestion7.first().check();
    await this.selectQuestion8.first().check();
    await this.selectQuestion9.first().check();
    await this.selectQuestion10.first().check();
    await this.selectQuestion11.first().selectOption('OPTION_2');
    await this.selectQuestion12.first().selectOption('OPTION_2');
    await this.selectQuestion13.first().selectOption('OPTION_3');

    // Second Holder
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.selectQuestion1.nth(1).selectOption('OPTION_2');
    await this.selectQuestion2.nth(1).check();
    await this.selectQuestion3.nth(1).check();
    await this.selectQuestion4.nth(1).check();
    await this.selectQuestion5.nth(1).check();
    await this.selectQuestion6.nth(1).check();
    await this.selectQuestion7.nth(1).check();
    await this.selectQuestion8.nth(1).check();
    await this.selectQuestion9.nth(1).check();
    await this.selectQuestion10.nth(1).check();
    await this.selectQuestion11.nth(1).selectOption('OPTION_2');
    await this.selectQuestion12.nth(1).selectOption('OPTION_2');
    await this.selectQuestion13.nth(1).selectOption('OPTION_3');

    // Proceed
    await this.clickRiskProceed.click();
}


async disclosure(){
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.clickHyperlinkDisclosure.click();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.question_one.check();
    await this.question_two.check();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.clickRiskProceed.click();
}

async proceedLimitsandSecurities(){
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.clickProceed.click();
}
}