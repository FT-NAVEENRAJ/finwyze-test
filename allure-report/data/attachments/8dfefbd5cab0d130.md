# Test info

- Name: TC_03: User enters valid 6-digit OTP and submits
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\investorModule.spec.js:32:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@id="send"][@value="Send OTP"]')

    at InvstorModule.sendOTPInvestorModule (C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\pages\investorModule.js:62:28)
    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\investorModule.spec.js:34:5
```

# Test source

```ts
   1 | import { expect } from '@playwright/test';
   2 |
   3 | export default class InvstorModule{
   4 |     constructor(page) {
   5 |       this.page = page;
   6 |       this.enterPAN = page.locator('//input[@id="pan"][@placeholder="Enter Investor PAN ID"]');
   7 |       this.enterDOB = page.locator('//input[@id="datepicker"][@placeholder="DD-MM-YYYY"]');
   8 |       this.clickSubmit = page.locator('//input[@type="submit"][@value="Submit"]');
   9 |       this.sendOTP = page.locator('//input[@id="send"][@value="Send OTP"]');
   10 |       this.enterOTP = page.locator('//input[@id="otpFiled"][@class="inputfield"]');
   11 |       this.clickSubmitOTP = page.locator('//input[@type="submit"][@value="Submit"]');
   12 |
   13 |       this.search = page.locator('//input[@id="search"]');
   14 |       this.applicationId = page.locator('//a[@id="applicationId"]');
   15 |
   16 |       this.selectConsent = page.locator('//input[@id="consentStatus"]');
   17 |       this.clickProceedScheme = page.locator('//button[@id="proceed"]');
   18 |
   19 |       this.clickProceedAdditionalDetails = page.locator('//button[@id="Proceed"]');
   20 |
   21 |       this.selectDetatCheckbox = page.locator('//input[@id="dematConsent"]');
   22 |       this.clickSaveforDematConsent = page.locator('//button[@id="next"]');
   23 |
   24 |       this.selectPMSConsent = page.locator('//input[@id="pmsConsent"]');
   25 |       this.clickHyperlinkofTermsandConditions = page.locator('//a[text()="Terms & Conditions"]');
   26 |       this.clickSaveBUttonofPMSConsent = page.locator('//button[@id="Accept"]');
   27 |       this.clickProceedButtonofPMSConsent = page.locator('//button[@id="Proceed"]');
   28 |
   29 |       this.clickBeginAdhar = page.locator('//button[@title="Begin"]');
   30 |       this.enterAdharNumber = page.locator('//input[@id="aadhaar-input"]');
   31 |       this.clickSentAdharOTP = page.locator('//button[@title="Send OTP"]');
   32 |       this.enterAdharOTP = page.locator('//input[@type="password"]');
   33 |       this.clickVerifyAdharButton = page.locator('//button[@title="Verify Aadhaar"]');
   34 |
   35 |
   36 |       this.clickVerificationDetailsConsent = page.locator('//input[@id="consent2"]');
   37 |       this.clickVerificationDetailsProceed = page.locator('//button[text()=" Proceed "]');
   38 |
   39 |       this.clickCheckboxLiveliness = page.locator('//input[@id="consent"]');
   40 |       this.clickStartLivelinessButton = page.locator('//button[@id="startLiveliness"]');
   41 |       // 10 second
   42 |       this.clickLivelinessNextButton = page.locator('//button[text()=" Next "]');
   43 |
   44 |       this.clickCaptureLivePhoto = page.locator('//button[@title="Capture Live Photo"]');
   45 |       this.clickAcceptLivePhoto = page.locator('//button[@title="Accept"]');
   46 |       this.saveLivePhoto = page.locator('//button[@title="Save"]');
   47 |
   48 |
   49 |
   50 |
   51 |     }
   52 |     // aadhitya adhar Number :449673870892
   53 |     async investoroduleLogin(pan, dob){
   54 |         await this.enterPAN.fill(pan);
   55 |         await this.enterDOB.fill(dob);
   56 |         await this.clickSubmit.click();
   57 |         await new Promise(resolve => setTimeout(resolve, 2000));
   58 |     }
   59 |
   60 |     async sendOTPInvestorModule(){
   61 |         await new Promise(resolve => setTimeout(resolve, 2000));
>  62 |         await this.sendOTP.click();
      |                            ^ Error: locator.click: Target page, context or browser has been closed
   63 |         await new Promise(resolve => setTimeout(resolve, 4000));
   64 |         await new Promise(resolve => setTimeout(resolve, 4000)); 
   65 |            await this.enterOTP.click();
   66 |            let isValidOTP = false;
   67 |            const timeout = 15000;
   68 |            const start = Date.now();
   69 |            while (Date.now() - start < timeout) {
   70 |              const value = await this.enterOTP.inputValue();
   71 |              if (/^\d{6}$/.test(value)) {
   72 |                isValidOTP = true;
   73 |                break;
   74 |              }
   75 |          await this.page.waitForTimeout(2000);
   76 |            }
   77 |         await this.page.waitForTimeout(2000);
   78 |         await this.clickSubmitOTP.click();
   79 |         await new Promise(resolve => setTimeout(resolve, 5000));
   80 |        
   81 |
   82 |       }
   83 | async investmentSelection(){
   84 |     await this.page.waitForTimeout(2000);
   85 |     await this.selectConsent.scrollIntoViewIfNeeded();
   86 |     await this.selectConsent.check();
   87 |     await this.clickProceedScheme.clcik();
   88 | }
   89 |     
   90 | async proceedAdditionalDetails(){
   91 |     await this.page.waitForTimeout(2000);
   92 |     await this.clickProceedAdditionalDetails.click();
   93 | }
   94 |  async DematPMS_ConsentDetails(){
   95 |   await this.selectDetatCheckbox.check();
   96 |   await this.clickSaveforDematConsent.click();
   97 |   await new Promise(resolve => setTimeout(resolve, 2000));
   98 |   await this.selectPMSConsent.check();
   99 |   await this.clickHyperlinkofTermsandConditions.click();
  100 |   await this.clickSaveBUttonofPMSConsent.click();
  101 |   await this.clickProceedButtonofPMSConsent.click();
  102 |
  103 |
  104 |   //  sec
  105 |    
  106 |  }
  107 |
  108 |  async verificationDetails(adharNumber, OTP){
  109 |   await this.clickBeginAdhar.click();
  110 |   await this.enterAdharNumber.fill(adharNumber);
  111 |   await new Promise(resolve => setTimeout(resolve, 2000));
  112 |   await this.clickSentAdharOTP.click();
  113 |   await new Promise(resolve => setTimeout(resolve, 2000));
  114 |   await this.enterAdharOTP.fill(OTP);
  115 |   await this.clickVerifyAdharButton.click();
  116 |
  117 |  }
  118 |
  119 |  async aadharVerification(){
  120 |   
  121 |   //scroll image to select checkbox
  122 |   await new Promise(resolve => setTimeout(resolve, 2000));
  123 |   await this.clickVerificationDetailsConsent.scrollIntoViewIfNeeded();
  124 |   await this.clickVerificationDetailsConsent.check();
  125 |   await this.clickVerificationDetailsProceed.click();
  126 |
  127 |  }
  128 |
  129 |  async liveLiness(){
  130 |   // scroll to selct checkbox
  131 |   await new Promise(resolve => setTimeout(resolve, 2000));
  132 |   await this.clickCheckboxLiveliness.scrollIntoViewIfNeeded();
  133 |   await this.clickCheckboxLiveliness.check();
  134 |   await this.clickStartLivelinessButton.click();
  135 |   await new Promise(resolve => setTimeout(resolve, 14000));
  136 |   // 13 second
  137 |   await this.clickLivelinessNextButton.click();
  138 |
  139 |
  140 |  }
  141 |
  142 |  async captureLivePhoto(){
  143 |   await new Promise(resolve => setTimeout(resolve, 2000));
  144 |   await this.clickCaptureLivePhoto.click();
  145 |   await this.clickCaptureLivePhoto.scrollIntoViewIfNeeded();
  146 |   //scroll
  147 |   await this.clickAcceptLivePhoto.click();
  148 |   await this.clickAcceptLivePhoto.scrollIntoViewIfNeeded();
  149 |   //scroll
  150 |   await this.saveLivePhoto.click();
  151 |   //5 sec
  152 |
  153 |
  154 |  }
  155 |
  156 |  async signatureUpload(){
  157 |   await new Promise(resolve => setTimeout(resolve, 2000));
  158 |   await this.page.locator('//input[@id="imageupload"]').setInputFiles('Files/image.png');
  159 |   await new Promise(resolve => setTimeout(resolve, 2000));
  160 |   await this.page.locator('//button[text()=" Accept "]').click();
  161 |   await this.page.locator('//input[@id="consent"]').check();
  162 |   await this.page.locator('//button[@id="proceed"]').click();
```