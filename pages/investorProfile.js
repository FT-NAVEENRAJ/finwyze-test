export default class InvestorDetails{
    constructor(page){
   
        this.page =page;
        this.enterPAN = page.locator('//input[@id="search one"]');
        this.clickGoIcon = page.locator('//span[text()="arrow_forward"]');
        this.clickFetchKYC = page.locator('//a[@id="FETCH one"]');
        this.clickModeofConsent = page.locator('//input[@formcontrolname="mode"]');
        this.clickUpload = page.locator('//button[@id="upload"]');
        this.pdfUploadFile = page.locator('//input[@id="pdfupload"]');





    }

    async ip(pan){
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.enterPAN.click();
        await this.enterPAN.fill(pan);
        await this.clickGoIcon.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.clickFetchKYC.click();
      //  await new Promise(resolve => setTimeout(resolve, 20000));
        // await page2.locator('#//div[@class="modal-content"]');
        // const document = page2.locator('[id="mode\\ DOCUMENT"]');
        // await expect(document).toBeVisible();


        // await new Promise(resolve => setTimeout(resolve, 2000));
        // await page2.locator('[id="mode\\ DOCUMENT"]').check();
        // await page2.locator('#kycfame').contentFrame().getByRole('button', { name: 'Upload' }).click();
        // await page2.locator('#kycfame').contentFrame().getByRole('button', { name: 'Upload' }).setInputFiles('Files/Sample.pdf');
        // await page2.locator('#kycfame').contentFrame().getByRole('button', { name: 'Proceed' }).click();
        // await page2.locator('#kycfame').contentFrame().locator('(//input[@id="mode DOCUMENT"])').check();
        // await page2.locator('#kycfame').contentFrame().getByRole('button', { name: 'Upload' }).click();
        // await page2.locator('#kycfame').contentFrame().getByRole('button', { name: 'Upload' }).setInputFiles('');
        // await page2.locator('#kycfame').contentFrame().getByRole('button', { name: 'Proceed' }).click();
        // await page2.locator('#kycfame').contentFrame().getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
        // await page2.locator('#kycfame').contentFrame().getByRole('button', { name: 'Proceed' }).click();
        





        //await page.locator('//iframe[@id="kycfame"]');
        //await page.frameLocator('iframe#kycfame');
       // await expect(this.clickModeofConsent).toBeVisible();
        // await new Promise(resolve => setTimeout(resolve, 2000));
        // await this.clickModeofConsent.click();

        // await new Promise(resolve => setTimeout(resolve, 2000));
        // await this.pdfUploadFile.setInputFiles('Files\Sample.pdf');
        // await new Promise(resolve => setTimeout(resolve, 15000));

    }
}