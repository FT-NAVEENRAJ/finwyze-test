export default class CustodyMaker{
    constructor(page) {
      this.page = page;
      this.search = page.locator('//input[@id="search"]');
      this.taskId = page.locator('//a[@id="taskNo"]');
      this.selectSupportingInformation = page.locator('(//select[@class="ft-select"])[2]');
      this.enterReferenceNumber = page.locator('//input[@id="referenceId"]');
      this.enterDate = page.locator('//input[@id="Date"]');
      this.selectAMLCheckStatus = page.locator('//input[@id="amlStatus"][@value="PASS"]');
      this.clickDocumentUpload = page.locator('//a[@id="Upload"]');
      this.selectAMLStatus = page.locator('//input[@id="consent"]');
      this.saveButttonAMLCheck = page.locator('//button[@id="Save"][text()="Save"]');
      this.enterComments = page.locator('//textarea[@id="Comments"]');
      this.clickSaveButton = page.locator('//a[text()=" Save "]');
      this.clickApprove = page.locator('//button[@id="Approve"]');
      this.clickReject = page.locator('//button[@id="Reject"]');


    }

    async custodyMakerApprove(){
      await this.taskId.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.selectSupportingInformation.selectOption("AML Check");
      await this.enterReferenceNumber.fill("1234567890");
      await this.enterDate.fill("11-12-2013");
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.selectAMLCheckStatus.check();
      await this.clickDocumentUpload.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.page.setInputFiles('//input[@id="pdfFileInput"]', 'Files/Sample.pdf');
      await this.page.locator('//button[@id="upload"]').click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.selectAMLStatus.check();
      await this.saveButttonAMLCheck.click();
      await this.enterComments.fill("Approve");
      await this.clickSaveButton.click();
      await this.clickApprove.click();

    }

    async custodyChekerApprove(){
      await this.enterComments.fill("Approve");
      await this.clickSaveButton.click();
      await this.clickApprove.click();

    }
}