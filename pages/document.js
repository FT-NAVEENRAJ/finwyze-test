
export default class DocumentUpload {
    constructor(page) {
      this.page = page;
      this.clickAddDocument = page.locator('//span[text()="add"]');
      this.selectDocumentType = page.locator('//select[@formcontrolname="sourceType"]');
      this.clickBegin = page.locator('//button[text()="Begin"]');
      this.clickImageUpload = page.locator('//button[text()=" Upload "]');
      this.enterDocumentName =  page.getByRole('textbox', { name: 'Enter Document Number' });
      this.uploadDocumentClick = page.locator('(//button[@type="button"])[6]');
      this.upload = page.getByRole('button', { name: 'Upload' });
      this.clickDocumentProceed = page.locator('//button[text()="Proceed"]');
      this.popupHeader = page.locator('//h5[contains(@class, "popup-heading")]');


    // Application Document Select

      this.addDocumentIcon = page.locator('//span[@id="addDocumentModal"]');
      this.clickPan = page.locator('//label[contains(text(), "PAN")]/preceding-sibling::input[@type="checkbox"]');
      this.selectCheck = page.locator('(//label[contains(text(), "Bank Account Proof")]/preceding-sibling::input[@type="checkbox"])[1]');
      this.clickSaveButton = page.locator('//button[@id="save"]');
      this.clickProceedButton = page.locator('//button[@id="proceed"]');
      this.selectCancelChecque = page.locator('(//label[contains(text(), "Cancelled Cheque ")]/preceding-sibling::input[@type="checkbox"])[1]');
      
      //Cancelled Cheque  

  

    // demat add document
    this.addDocumentIconDemat = page.locator('//span[text()="add"]');
    this.clickSaveButtonDemat = page.locator('//button[text()="Save"]');
    this.clickProceedButtonDemat = page.locator('//button[text()="Proceed"]');

      
    }

    async documentUploadDemat(){
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.addDocumentIconDemat.click();
      await this.clickPan.check();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.clickSaveButtonDemat.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.clickProceedButtonDemat.click();
    }

    async documentUpload(){
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.addDocumentIcon.click();
     // await this.selectCancelChecque.check();
      await this.clickPan.check();
      await this.selectCheck.check();
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.clickSaveButton.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.clickProceedButton.click();
    }
  
    async uploadDocument(docName) {

      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.clickAddDocument.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.selectDocumentType.selectOption("Nominee Proof");
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.page.locator('(//input[@type="file"])[2]').setInputFiles('Files/image.png');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.clickImageUpload.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.enterDocumentName.fill(docName);
      await this.page.waitForTimeout(2000);
      // if (await this.uploadDocumentClick.isVisible() && await this.uploadDocumentClick.isEnabled()) {
      //   await this.uploadDocumentClick.click();
 ;
 this.selectCheck = page.locator('(//label[contains(text(), "Bank Account Proof")]/preceding-sibling::input[@type="checkbox"])[1]');
 this.clickSaveButton = page.locator('//button[@id="save"]');
 this.clickProceedButton = page.locator('//button[@id="proceed"]');      
      // } else {
      //   await new Promise(resolve => setTimeout(resolve, 1000));
      //   await this.selectDocumentType.selectOption(" Nominee Proof");
      //   await new Promise(resolve => setTimeout(resolve, 1000));
      //   await this.uploadDocumentClick.click();
      //   console.log("Upload Document button is not available or not enabled.");
      // }

      await this.upload.click();
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.selectDocumentType.selectOption("PAN");
      await new Promise(resolve => setTimeout(resolve, 1000));
      await this.uploadDocumentClick.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.clickDocumentProceed.click();

    }
  }
  