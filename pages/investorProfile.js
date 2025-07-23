export default class InvestorDetails{
    constructor(page){
   
        this.page =page;
        this.modeofOperation = page.locator('(//input[@id="Jointly"])[1]');
        this.enterFirstHolderPAN = page.locator('//input[@id="search one"]');
        this.enterSecondHolderPAN = page.locator('//input[@id="search two"]');
        this.enterThirdHolderPAN = page.locator('//input[@id="search three"]');
        this.clickGoIconFirst = page.locator('(//span[text()="arrow_forward"])[1]');
        this.clickGoIconSecond = page.locator('//span[@id="investorPanCheck two"]');
        this.clickGoIconThird = page.locator('(//span[text()="arrow_forward"])[3]');
        this.clickFetchKYCFirstHolder = page.locator('//a[@id="FETCH one"]');
        this.clickFetchKYCSecondHolder = page.locator('//a[@id="FETCH two"]');
        this.clickFetchKYCThirdHolder = page.locator('//a[@id="FETCH three"]');
        this.clickModeofConsent = page.locator('//input[@formcontrolname="mode"]');
        this.clickUpload = page.locator('//button[@id="upload"]');
        this.pdfUploadFile = page.locator('//input[@id="pdfupload"]');
        this.firstHolderOccupationDetails = page.locator('//a[@id="occupationForm one"]');
        this.TwoHolderOccupationDetails = page.locator('//a[@id="occupationForm two"]');
        this.ThreeHolderOccupationDetails = page.locator('//a[@id="occupationForm three"]');
        this.firstHolderFatcaDetails = page.locator('[id="fatcaPending one"]');
        this.secondHolderFatcaDetails = page.locator('[id="fatcaPending two"]');
        this.thirdHolderFatcaDetails = page.locator('[id="fatcaPending three"]');
        this.occupationDetailsProceed = page.getByRole('button', { name: 'Proceed' });


    }

    async operationMode(){
       if (await this.modeofOperation.isVisible() && await this.modeofOperation.isEnabled()) {
       await this.modeofOperation.click();
       }
       else {
       console.log("Mode of operation button is either hidden or disabled");
}

    }
    async investorProfileFirstHolder(pan1){
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.enterFirstHolderPAN.click();
        await this.enterFirstHolderPAN.fill(pan1);
        await this.clickGoIconFirst.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.clickFetchKYCFirstHolder.click();


    }

    async investorProfileSecondHolder(pan2){
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.enterSecondHolderPAN.click();
        await this.enterSecondHolderPAN.fill(pan2);
        await this.clickGoIconSecond.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.clickFetchKYCSecondHolder.click();


    }

     async investorProfileThirdHolder(pan3){
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.enterThirdHolderPAN.click();
        await this.enterThirdHolderPAN.fill(pan3);
        await this.clickGoIconThird.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.clickFetchKYCThirdHolder.click();


    }
    async occupationDetailsfirst(){
        await this.firstHolderOccupationDetails.click();
        await this.occupationDetailsProceed.click();
    }

    async occupationDetailsSecond(){
        await this.TwoHolderOccupationDetails.click();
        await this.occupationDetailsProceed.click();
    }

    async occupationDetailsThird(){
        await this.ThreeHolderOccupationDetails.click();
        await this.occupationDetailsProceed.click();
    }

     async fatcaDetailsfirst(){
        await this.firstHolderFatcaDetails.click();
    }

    async fatcaDetailsSecond(){
        await this.secondHolderFatcaDetails.click();
    }

    async fatcaDetailsThird(){
        await this.thirdHolderFatcaDetails.click();
    }
}
