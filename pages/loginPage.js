export default class LoginPage{
    constructor(page) {
      this.page = page;
      this.custodyDropdown = page.locator("#custody");
      this.emailInput = page.getByPlaceholder("Enter your Email Address");
      this.captchaInput = page.getByPlaceholder("Enter the Captcha Displayed Above");
      this.passwordInput = page.getByLabel("Password");
      this.submitButton = page.getByRole("button", { type: "submit" });
      this.otpField = page.locator("#otpVerifyField");
      this.otpSubmitButton = page.getByRole("button", { name: "submit" });
      this.clickForgotPasswordLink = page.locator('//a[text()="Forgot Password"]');
      this.captchaInput = page.getByPlaceholder("Enter the Captcha Displayed Above");
      this.enterEmailID = page.getByLabel("Email ID");
      this.clickResentCredentials = page.locator('//input[@value="Reset Credentials"]');



    }
    
    async login(custody,email, password, captcha) {
      await this.custodyDropdown.waitFor();
      await this.custodyDropdown.selectOption(custody);
      await this.emailInput.fill(email);
      await this.captchaInput.fill(captcha);
      await this.passwordInput.fill(password);
      await this.submitButton.click();
    }
  
    async enterOTP(otp) {

      await this.otpField.fill(otp);
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.otpSubmitButton.click();
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async clickVerify(){
      await this.submitButton.click();
    }

    async clickForgotPassword(enterEmail){
      await this.clickForgotPasswordLink.click();
      await this.enterEmailID.fill(enterEmail);
      await this.clickResentCredentials.click();
    }
  }
  