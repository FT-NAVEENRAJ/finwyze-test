import { expect } from '@playwright/test';

export default class InvstorModule{
    constructor(page) {
      this.page = page;
      this.enterPAN = page.locator('//input[@id="pan"][@placeholder="Enter Investor PAN ID"]');
      this.enterDOB = page.locator('//input[@id="datepicker"][@placeholder="DD-MM-YYYY"]');
      this.clickSubmit = page.locator('//input[@type="submit"][@value="Submit"]');
      this.sendOTP = page.locator('//input[@id="send"][@value="Send OTP"]');
      this.enterOTP = page.locator('//input[@id="otpFiled"][@class="inputfield"]');
      this.clickSubmitOTP = page.locator('//input[@type="submit"][@value="Submit"]');

      this.search = page.locator('//input[@id="search"]');
      this.applicationId = page.locator('//a[@id="applicationId"]');

      this.selectConsent = page.locator('//input[@id="consentStatus"]');
      this.clickProceedScheme = page.locator('//button[@id="proceed"]');

      this.clickProceedAdditionalDetails = page.locator('//button[@id="Proceed"]');

      this.selectDetatCheckbox = page.locator('//input[@id="dematConsent"]');
      this.clickSaveforDematConsent = page.locator('//button[@id="next"]');

      this.selectPMSConsent = page.locator('//input[@id="pmsConsent"]');
      this.clickHyperlinkofTermsandConditions = page.locator('//a[text()="Terms & Conditions"]');
      this.clickSaveBUttonofPMSConsent = page.locator('//button[@id="Accept"]');
      this.clickProceedButtonofPMSConsent = page.locator('//button[@id="Proceed"]');

      this.clickBeginAdhar = page.locator('//button[@title="Begin"]');
      this.enterAdharNumber = page.locator('//input[@id="aadhaar-input"]');
      this.clickSentAdharOTP = page.locator('//button[@title="Send OTP"]');
      this.enterAdharOTP = page.locator('//input[@type="password"]');
      this.clickVerifyAdharButton = page.locator('//button[@title="Verify Aadhaar"]');


      this.clickVerificationDetailsConsent = page.locator('//input[@id="consent2"]');
      this.clickVerificationDetailsProceed = page.locator('//button[text()=" Proceed "]');

      this.clickCheckboxLiveliness = page.locator('//input[@id="consent"]');
      this.clickStartLivelinessButton = page.locator('//button[@id="startLiveliness"]');
      // 10 second
      this.clickLivelinessNextButton = page.locator('//button[text()=" Next "]');

      this.clickCaptureLivePhoto = page.locator('//button[@title="Capture Live Photo"]');
      this.clickAcceptLivePhoto = page.locator('//button[@title="Accept"]');
      this.saveLivePhoto = page.locator('//button[@title="Save"]');


    }
    // aadhitya adhar Number :449673870892

    //473202740745
    async investoroduleLogin(pan, dob){
        await this.enterPAN.fill(pan);
        await this.enterDOB.fill(dob);
        await this.clickSubmit.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async sendOTPInvestorModule(){
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.sendOTP.click();
        await new Promise(resolve => setTimeout(resolve, 4000));
        await new Promise(resolve => setTimeout(resolve, 4000)); 
           await this.enterOTP.click();
           let isValidOTP = false;
           const timeout = 25000;
           const start = Date.now();
           while (Date.now() - start < timeout) {
             const value = await this.enterOTP.inputValue();
             if (/^\d{6}$/.test(value)) {
               isValidOTP = true;
               break;
             }
         await this.page.waitForTimeout(1000);
           }
        await this.page.waitForTimeout(2000);
        await this.clickSubmitOTP.click();
        await new Promise(resolve => setTimeout(resolve, 5000));
       

      }
async investmentSelection(){
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('PageDown');
    await this.selectConsent.check();
    await this.clickProceedScheme.clcik();
}
    
async proceedAdditionalDetails(){
    await this.page.waitForTimeout(2000);
    await this.clickProceedAdditionalDetails.click();
}
 async DematPMS_ConsentDetails(){
  await this.selectDetatCheckbox.check();
  await this.clickSaveforDematConsent.click();
  await new Promise(resolve => setTimeout(resolve, 2000));
  await this.selectPMSConsent.check();
  await this.clickHyperlinkofTermsandConditions.click();
  await this.clickSaveBUttonofPMSConsent.click();
  await this.clickProceedButtonofPMSConsent.click();


  //  sec
   
 }

 async verificationDetails(adharNumber, OTP){
  await this.clickBeginAdhar.click();
  await this.enterAdharNumber.fill(adharNumber);
  await new Promise(resolve => setTimeout(resolve, 2000));
  await this.clickSentAdharOTP.click();
  await new Promise(resolve => setTimeout(resolve, 2000));
  await this.enterAdharOTP.fill(OTP);
  await this.clickVerifyAdharButton.click();

 }

 async aadharVerification(){
  
  //scroll image to select checkbox
  await new Promise(resolve => setTimeout(resolve, 2000));
  await this.clickVerificationDetailsConsent.scrollIntoViewIfNeeded();
  await this.clickVerificationDetailsConsent.check();
  await this.clickVerificationDetailsProceed.click();

 }

 async liveLiness(){
  // scroll to selct checkbox
  await new Promise(resolve => setTimeout(resolve, 2000));
  await this.clickCheckboxLiveliness.scrollIntoViewIfNeeded();
  await this.clickCheckboxLiveliness.check();
  await this.clickStartLivelinessButton.click();
  await new Promise(resolve => setTimeout(resolve, 14000));
  // 13 second
  await this.clickLivelinessNextButton.click();


 }

 async captureLivePhoto(){
  await new Promise(resolve => setTimeout(resolve, 2000));
  await this.clickCaptureLivePhoto.click();
  await this.clickCaptureLivePhoto.scrollIntoViewIfNeeded();
  //scroll
  await this.clickAcceptLivePhoto.click();
  await this.clickAcceptLivePhoto.scrollIntoViewIfNeeded();
  //scroll
  await this.saveLivePhoto.click();
  //5 sec


 }

 async signatureUpload(){
  await new Promise(resolve => setTimeout(resolve, 2000));
  await this.page.locator('//input[@id="imageupload"]').setInputFiles('Files/image.png');
  await new Promise(resolve => setTimeout(resolve, 2000));
  await this.page.locator('//button[text()=" Accept "]').click();
  await this.page.locator('//input[@id="consent"]').check();
  await this.page.locator('//button[@id="proceed"]').click();
  await new Promise(resolve => setTimeout(resolve, 5000));
  // 5 sec
 
 }

 
 async handWrittenDeclaration(){
  await new Promise(resolve => setTimeout(resolve, 2000));
  await this.page.locator('//input[@id="consent"][@value="UploadType"]').check();
  await this.page.locator('//button[@type="button"][text()="Begin"]').click();
  await this.page.locator('//input[@id="imageupload"]').setInputFiles('Files/image.png');
  await new Promise(resolve => setTimeout(resolve, 2000));
  await this.page.locator('//button[text()=" Accept "]').click();
  await this.page.locator('//input[@id="consent"]').check();
  await this.page.locator('//button[@id="proceed"]').click();
  await new Promise(resolve => setTimeout(resolve, 5000));

 }

}