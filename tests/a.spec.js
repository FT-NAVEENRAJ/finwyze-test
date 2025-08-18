import { test } from "@playwright/test";
import LoginPage from "../pages/loginPage.js";
import ApplicationBasicInformationPopup from '../pages/newApplicationPopup.js';
import InvestorDetails from '../pages/investorProfile.js';
import NomineeDetails from "../pages/nominee.js";
import BankAccountDetails from "../pages/bankAccount.js";
import SchemeFeeDetails from "../pages/schemeandFeeDetails.js";
import AdditionalDetails from '../pages/additionalDetails.js';
import DocumentUpload from "../pages/document.js";
import { globalData } from '../pages/global-data.js';
import AMCReviewer  from "../pages/amcReviewer.js";

let page, page2;
test.describe('Application RM  ', () => {
test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://cd-r5.finwyze.com");
    const loginPage = new LoginPage(page);
    await loginPage.login("Domestic Custody","FT.IPRU.AMCRM01@FINTUPLE.com", "Fintuple@21", "a2C4dE");
    await new Promise(resolve => setTimeout(resolve, 3000));
    
  });
  
test("TC_01: Login iCACE Applictaion", async () => {
    console.log("Login as successfully Completed");
  });
test("TC_02 : Click Investor Profile Dashboard Page", async () => {
    page2 = await Promise.all([
    page.waitForEvent("popup"), 
    page.locator('(//a[text()="Create New Application"])[1]').click(), 
    ]).then(([newPage]) => newPage);
    await page2.waitForLoadState();
    console.log("Domestic Custody Application navigated successfully");
  });
test("TC_03: Complete the basic application information to initiate the onboarding journey.", async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const basicInformation = new ApplicationBasicInformationPopup(page2);
    await basicInformation.applicationBasicInformationPopup("2");
    console.log("Application Basic Details saved Successfully");
    await new Promise(resolve => setTimeout(resolve, 2000));
     } 
  catch (error) {
    console.error("Failed to complete Application Basic Information:", error);
  throw error; 
  }
});

  test('First Holder Investor Flow', async () => {
    await page2.locator('#search\\ one').fill('CURPA1355D');
    await page2.locator('#investorPanCheck\\ one').click();
    if (!(await page2.locator('#modeOfOperation\\ Jointly').isChecked())) {
      await page2.locator('#modeOfOperation\\ Jointly').check();
    }
    await page2.locator('#FETCH\\ one').click();
    const kycFrame = await page2.locator('#kycfame').contentFrame();
    if (!(await kycFrame.locator('#mode\\ DOCUMENT').isChecked())) {
      await kycFrame.locator('#mode\\ DOCUMENT').check();
    }
    await page2.waitForTimeout(15000);
    await kycFrame.locator('#pdfupload').setInputFiles('Files/Sample.pdf');
    await page2.waitForTimeout(2000);
    await kycFrame.getByRole('button', { name: 'Proceed' }).click();
    await kycFrame.getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
    await kycFrame.getByRole('button', { name: 'Proceed' }).click();
    await page2.waitForTimeout(2000);
    const dialogFrame = await page2.getByRole('dialog').locator('iframe').contentFrame();
    await dialogFrame.locator('path').click();
    await dialogFrame.getByRole('button', { name: 'Yes' }).click();
    await dialogFrame.locator('#Full_name_prefix').first().selectOption('MR');
    await dialogFrame.locator('#MMaiden_Name_prefix').selectOption('MS');
    await dialogFrame.locator('.ft-input-edit > .group > .col-md-12').first().fill('MAHa');
    await dialogFrame.locator('#FatherName_prefix').selectOption('MR');
    await dialogFrame.locator('#Father_Spouse_relationship').first().selectOption('FATHER');
    await dialogFrame.locator('#Place_of_birth').fill('CHENNAI');
    await dialogFrame.locator('#Residential').check();
    await page2.waitForTimeout(2000);
    await dialogFrame.locator('#cdistrict').fill('CHENNAI');
    await dialogFrame.locator('#checkcorresSameaspermanent').check();
    await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
    await dialogFrame.locator('#aadhaarBased').check();
    await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
    await page2.waitForTimeout(2000);
    await page2.locator('#occupationForm\\ one').click();
    await page2.waitForTimeout(2000);
    await page2.getByRole('button', { name: 'Proceed' }).click();
    await page2.waitForTimeout(1000);
    await page2.locator('#fatcaPending\\ one').click();
    await page2.waitForTimeout(2000);
    await page2.locator('#countryOfCurrentRes\\ one').selectOption('India');
    await page2.locator('#addressArea\\ one').fill('CHENNAI');
    await page2.locator('#addressType\\ one').selectOption('REGISTEREDOFFICE');
    const fatcaDialog = page2.getByRole('dialog');
    await fatcaDialog.locator('form div').filter({ hasText: 'Are you citizen of any other country' }).getByRole('radio').nth(1).check();
    await fatcaDialog.locator('form div').filter({ hasText: 'Is your Country of Birth any country' }).getByRole('radio').nth(1).check();
    await fatcaDialog.locator('form div').filter({ hasText: 'Are you a Tax Resident of any country' }).getByRole('radio').nth(1).check();
    await fatcaDialog.locator('form div').filter({ hasText: 'Are you a US Person?' }).getByRole('radio').nth(1).check();
    await page2.locator('#consentStatus\\ one').check();
    await page2.getByRole('button', { name: 'Proceed' }).click();
    await page2.waitForTimeout(2000);
    await page2.locator('app-investorform').getByRole('radio').nth(3).check();
    await page2.locator('#onSaveInvestorDetails\\ one').click();
    await page2.waitForTimeout(2000);
  });
//input[@id="consented"]
//button[@id="proceed"]
  test('Second Holder Investor Flow', async () => {
    await page2.waitForTimeout(2000);
    await page2.keyboard.press('PageDown');
    await page2.waitForTimeout(2000);
    await page2.locator('#search\\ two').click();
    await page2.locator('#search\\ two').fill('CASPB5084M');
    await page2.locator('#investorPanCheck\\ two').click();
    await page2.locator('#FETCH\\ two').click();
    await page2.locator('//select[@id="familyDeclaration two"]').selectOption("ME");
    const kycFrame2 = await page2.locator('#kycfame').contentFrame();
    if (!(await kycFrame2.locator('#mode\\ DOCUMENT').isChecked())) {
      await kycFrame2.locator('#mode\\ DOCUMENT').check();
    }
    await page2.waitForTimeout(15000);
    await kycFrame2.locator('#pdfupload').setInputFiles('Files/Sample.pdf');
    await kycFrame2.getByRole('button', { name: 'Proceed' }).click();
    await kycFrame2.getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
    await kycFrame2.getByRole('button', { name: 'Proceed' }).click();
    await page2.waitForTimeout(2000);
    await kycFrame2.locator('#Full_name_prefix').first().selectOption('MR');
    await kycFrame2.locator('#MMaiden_Name_prefix').selectOption('MR');
    await kycFrame2.locator('#FatherName_prefix').selectOption('MR');
    await kycFrame2.locator('.ft-input-edit > .group > .col-md-12').first().fill('TEST');
    await kycFrame2.locator('#Father_Spouse_relationship').first().selectOption('FATHER');
    await kycFrame2.locator('#Place_of_birth').fill('CHENNAI');
    await kycFrame2.locator('#Residential').check();
    await kycFrame2.locator('#cdistrict').fill('CHENNAI');
    await kycFrame2.locator('//input[@id="pResidential"]').nth(1).check();
    await kycFrame2.locator('//input[@id="pdistrict"]').fill("Chennai");
    await kycFrame2.getByRole('button', { name: 'Proceed' }).click();
    await page2.waitForTimeout(2000);
    await page2.locator('#occupationForm\\ two').click();
    await page2.getByRole('button', { name: 'Proceed' }).click();
    await page2.waitForTimeout(2000);
    await page2.locator('#fatcaPending\\ two').click();
    await page2.waitForTimeout(2000);
    await page2.locator('#countryOfCurrentRes\\ two').selectOption('India');
    await page2.locator('#addressArea\\ two').fill('CHENNAI');
    await page2.locator('#addressType\\ two').selectOption('BUSINESS');
    const fatcaDialog2 = page2.getByRole('dialog');
    await fatcaDialog2.locator('form div').filter({ hasText: 'Are you citizen of any other country' }).getByRole('radio').nth(1).check();
    await fatcaDialog2.locator('form div').filter({ hasText: 'Are you a Tax Resident of any country' }).getByRole('radio').nth(1).check();
    await fatcaDialog2.locator('form div').filter({ hasText: 'Is your Country of Birth any country' }).getByRole('radio').nth(1).check();
    await fatcaDialog2.locator('form div').filter({ hasText: 'Are you a US Person?' }).getByRole('radio').nth(1).check();
    await page2.locator('#consentStatus\\ two').check();
    await page2.getByRole('button', { name: 'Proceed' }).click();
    await page2.waitForTimeout(2000);
    await page2.locator('app-investorform').filter({ hasText: 'Second Investor * CASPB5084M' }).getByRole('radio').nth(3).check();
    await page2.locator('#onSaveInvestorDetails\\ two').click();
    await page2.waitForTimeout(2000);
  });

  test('TC_08: To complete the Investor Details section',async()=>{
    await page2.waitForTimeout(2000);
    await page2.locator('//input[@id="consented"]').check();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page2.getByRole('button', { name: 'Proceed' }).click();
    await new Promise(resolve => setTimeout(resolve, 2000));

  });

  test('TC_09: Investor(s) have the option to choose up to three Nominees for the application. ', async()=>{
   const nominee = new NomineeDetails(page2);
   await nominee.applicationNomineeSelection();
   await new Promise(resolve => setTimeout(resolve, 2000));
  });

  // test('TC_10:  Complete the Bank A/C Opening details for this application in the section below ', async()=>{
  //   const addAccount = new BankAccountDetails(page2);
  //   await addAccount.completeBankAccountOpening();
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   await addAccount.bankRiskProfile("Undergraduate","SALARIED","3TO5YEARS","LESSTHAN10LAC","25CRTO100CR","IT COMPANY","NA","BUSINESSINCOME");
  //   await page.keyboard.press('PageDown');
  //   await addAccount.bankNomineeDetails();

  // })
  test('TC_11: Select the bank account(s) details for used during the investment.', async()=>{
    const addAccount = new BankAccountDetails(page2);
    await addAccount.selectBankAccountDetails();
    await new Promise(resolve => setTimeout(resolve, 1000));
  });

  test("TC_12: Select the Schemes, Fee Type, and fill in the investment amount", async()=>{
    const scheme = new SchemeFeeDetails(page2);
    await scheme.selectSchemeandFeeDetails("10000000");
    await new Promise(resolve => setTimeout(resolve, 1000));

  });

  test("TC_13: Investor to click the Risk Profile sevction and complete the investment risk Questions", async()=>{
    const limit = new AdditionalDetails(page2);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await limit.addRiskQuestion2();
    await new Promise(resolve => setTimeout(resolve, 1000));

  });

  test('TC_14: Verify Disclosure of Interest and Exclusions Section Functionality', async()=>{
    const limit = new AdditionalDetails(page2);
    await limit.disclosure();
    await new Promise(resolve => setTimeout(resolve, 1000));
  });

  test('TC_15: Verify the Additional Details functionality', async()=>{
    const limit = new AdditionalDetails(page2);
    await limit.proceedLimitsandSecurities();
    console.log("Additional Details Section completed Successfully");
    await new Promise(resolve => setTimeout(resolve, 4000));
  });

  test("TC_16: Select the documents required to complete the application", async()=>{
    const docUpload = new DocumentUpload(page2);
    await docUpload.documentUpload();
    await new Promise(resolve => setTimeout(resolve, 4000));
    console.log("Document saved Successfully")
    await new Promise(resolve => setTimeout(resolve, 25000));

  });

  test("TC_17: verify the application Summary Page ", async()=>{
    await new Promise(resolve => setTimeout(resolve, 50000));
         
        const pmsFormLink = await page2.getByRole('link', { name: 'Click here to View', exact: true }).nth(0);
        const cafFormLink = await page2.getByRole('link', { name: 'Click here to View', exact: true }).nth(1);
        const kycFormLink = await page2.getByRole('link', { name: 'Click here to View', exact: true }).nth(2);
      
        // await expect(pmsFormLink).toBeVisible();
        // await expect(cafFormLink).toBeVisible();
        // await expect(kycFormLink).toBeVisible();
      
        // Extract application detail texts
        const applicationId = await page2.locator('(//a[@class="link"])[1]').textContent();
        const applicationType = await page2.locator('(//span[@class="quick-summary-value"])[2]').textContent();
        const investorType = await page2.locator('(//span[@class="quick-summary-value"])[3]').textContent();
        const applicationMode = await page2.locator('(//span[@class="quick-summary-value"])[4]').textContent();
        const applicationStatus = await page2.locator('(//span[@class="quick-summary-value"])[5]').textContent();
        const applicationDate = await page2.locator('(//span[@class="quick-summary-value"])[6]').textContent();
        const amcName = await page2.locator('(//span[@class="quick-summary-value"])[7]').textContent();
      
        globalData.applicationId = applicationId?.trim();
        console.log("Global Application ID   :", globalData.applicationId);

});
});
test.describe('AMC Reviewer ', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://custodydigitizationuat.icicibank.com");
        const loginPage = new LoginPage(page);
        await loginPage.login("Domestic Custody","FT.IPRU.AMCREVIEWER01@FINTUPLE.COM", "Fintuple@1", "a2C4dE");
        await loginPage.enterOTP("857362");
        await new Promise(resolve => setTimeout(resolve, 3000));
        });
    test("TC_01: Login to iCACE AMC Reviewer with valid credentials", async () => {
        page2 = await Promise.all([
            page.waitForEvent("popup"), 
            page.getByText('View Task').first().click(), 
            ]).then(([newPage]) => newPage);
            await page2.waitForLoadState();
        });
    test("TC_02: To click the View Task page for AMC Reviewer page", async()=>{
    
          await new Promise(resolve => setTimeout(resolve, 3000));
          if (!globalData.applicationId) {
            throw new Error("applicationId is not set in globalData");
          }
          await page2.locator('//input[@id="search"]').fill(globalData.applicationId);
    });
    test("TC_03: To review all PDF documents and verify the AML check is successful, then approve the task", async()=>{
     
        const reviewer = new AMCReviewer(page2);
        await reviewer.amcManagerApprove();
        await new Promise(resolve => setTimeout(resolve, 3000));
    
    });
    
});

  




 