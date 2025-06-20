# Test info

- Name: TC_07: Validate Stamp Paper Upload in Offline Document 
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:131:1

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('#custody') to be visible

    at LoginPage.login (C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\pages\loginPage.js:21:34)
    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:14:21
```

# Test source

```ts
   1 | export default class LoginPage{
   2 |     constructor(page) {
   3 |       this.page = page;
   4 |       this.custodyDropdown = page.locator("#custody");
   5 |       this.emailInput = page.getByPlaceholder("Enter your Email Address");
   6 |       this.captchaInput = page.getByPlaceholder("Enter the Captcha Displayed Above");
   7 |       this.passwordInput = page.getByLabel("Password");
   8 |       this.submitButton = page.getByRole("button", { type: "submit" });
   9 |       this.otpField = page.locator("#otpVerifyField");
  10 |       this.otpSubmitButton = page.getByRole("button", { name: "submit" });
  11 |       this.clickForgotPasswordLink = page.locator('//a[text()="Forgot Password"]');
  12 |       this.captchaInput = page.getByPlaceholder("Enter the Captcha Displayed Above");
  13 |       this.enterEmailID = page.getByLabel("Email ID");
  14 |       this.clickResentCredentials = page.locator('//input[@value="Reset Credentials"]');
  15 |
  16 |
  17 |
  18 |     }
  19 |     
  20 |     async login(custody,email, password, captcha) {
> 21 |       await this.custodyDropdown.waitFor();
     |                                  ^ Error: locator.waitFor: Target page, context or browser has been closed
  22 |       await this.custodyDropdown.selectOption(custody);
  23 |       await this.emailInput.fill(email);
  24 |       await this.captchaInput.fill(captcha);
  25 |       await this.passwordInput.fill(password);
  26 |       await this.submitButton.click();
  27 |     }
  28 |   
  29 |     async enterOTP(otp) {
  30 |
  31 |       await this.otpField.fill(otp);
  32 |       await new Promise(resolve => setTimeout(resolve, 2000));
  33 |       await this.otpSubmitButton.click();
  34 |       await new Promise(resolve => setTimeout(resolve, 2000));
  35 |     }
  36 |
  37 |     async clickVerify(){
  38 |       await this.submitButton.click();
  39 |     }
  40 |
  41 |     async clickForgotPassword(enterEmail){
  42 |       await this.clickForgotPasswordLink.click();
  43 |       await this.enterEmailID.fill(enterEmail);
  44 |       await this.clickResentCredentials.click();
  45 |     }
  46 |   }
  47 |   
```