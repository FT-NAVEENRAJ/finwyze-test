export default class AMCReviewer{
    constructor(page) {
      this.page = page;

     
      this.taskId = page.locator('//a[@id="taskNo"]');
      this.selectSupportingInformation = page.locator('(//select[@class="ft-select"])[2]');
      this.selectAMLCheck = page.locator('//input[@id="amlStatus"]');
      this.saveButttonAMLCheck = page.locator('//button[@id="Save"][text()="Save"]');
      this.enterComments = page.locator('//textarea[@id="Comments"]');
      this.clickSaveButton = page.locator('//a[text()=" Save "]');
      this.clickApprove = page.locator('//button[@id="Approve"]');
      this.clickReject = page.locator('//button[@id="Reject"]');

      
    }
    async amcManagerApprove(){
      await this.taskId.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.selectSupportingInformation.selectOption("AML Check");
      await this.selectAMLCheck.check();
      await this.saveButttonAMLCheck.click();
      await this.enterComments.fill("Approve");
      await this.clickSaveButton.click();
      await this.clickApprove.click();

    }

    
}
