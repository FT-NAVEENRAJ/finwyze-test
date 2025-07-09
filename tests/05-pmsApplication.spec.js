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
import { defaultMaxListeners } from "events";


let page, page2;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://cd-r3.finwyze.com");
    const loginPage = new LoginPage(page);
    await loginPage.login("Domestic Custody","FT.IPRU.AMCRM02@FINTUPLE.com", "Fintuple@123", "a2C4dE");
    await loginPage.enterOTP("857362");
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
    await new Promise(resolve => setTimeout(resolve, 3000));
    const basicInformation = new ApplicationBasicInformationPopup(page2);
    await basicInformation.applicationBasicInformationPopup();
    console.log("Application Basic Details saved Successfully");
    await new Promise(resolve => setTimeout(resolve, 2000));
  });
test("TC_04: Verify the details are fetched after entering PAN", async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const investordetails = new InvestorDetails(page2);
    await investordetails.ip("CURPA1355D");
    await new Promise(resolve => setTimeout(resolve, 1000));
  });
test('TC_05: Verify that clicking "Fetch KYC Details" opens the KYC section', async () => {
    await new Promise(resolve => setTimeout(resolve, 15000));
    // Get frame for KYC upload
const kycFrame = await page2.locator('#kycfame').contentFrame();
await kycFrame.locator('(//input[@ng-reflect-name="mode"])[1]').check();
await page2.locator('#kycfame').contentFrame().locator('//input[@id="pdfupload"]').setInputFiles('Files/Sample.pdf');

//await kycFrame.locator('#kycfame').locator('#pdfupload').setInputFiles('Files/Sample.pdf'); // file uploads need element handle
await kycFrame.getByRole('button', { name: 'Proceed' }).click();
await kycFrame.getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
await kycFrame.getByRole('button', { name: 'Proceed' }).click();

// Get frame from dialog iframe
const dialogFrame = await page2.getByRole('dialog').locator('iframe').contentFrame();
await dialogFrame.locator('path').click();
await dialogFrame.getByRole('button', { name: 'Yes' }).click();
await dialogFrame.locator('#Full_name_prefix').first().selectOption('MR');
await dialogFrame.locator('#MMaiden_Name_prefix').selectOption('MS');
await dialogFrame.locator('.ft-input-edit > .group > .col-md-12').first().click();
await dialogFrame.locator('.ft-input-edit > .group > .col-md-12').first().fill('MAHa');
await dialogFrame.locator('#FatherName_prefix').selectOption('MR');
await dialogFrame.locator('#Father_Spouse_relationship').first().selectOption('FATHER');
await dialogFrame.locator('#Place_of_birth').fill('CHENNAi');
await dialogFrame.locator('#Residential').check();
await dialogFrame.locator('#cdistrict').fill('CHENNAi');
await dialogFrame.locator('#cdistrict').press('Tab');
await dialogFrame.locator('div:nth-child(3) > div:nth-child(3) > .ft-input-edit > .group > .col-md-12').press('Tab');
await dialogFrame.locator('#checkcorresSameaspermanent').check();
await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
await dialogFrame.locator('#aadhaarBased').check();
await dialogFrame.getByRole('button', { name: 'Proceed' }).click();

await page2.waitForTimeout(2000); 

  });
  test('TC_06: Verify that "Add/Update" under Occupation Details navigates to occupation form', async () => {
    await page2.locator('[id="occupationForm\\ one"]').click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page2.getByRole('button', { name: 'Proceed' }).click();
    await new Promise(resolve => setTimeout(resolve, 1000));
  });
  test('TC_07: Verify that "Add/Update" under FATCA Details opens FATCA form', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page2.locator('[id="fatcaPending one"]').click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page2.locator('[id="countryOfCurrentRes one"]').selectOption('India');
    await page2.locator('[id="addressArea\\ one"]').click();
    await page2.locator('[id="addressArea\\ one"]').fill('CHENNAI');
    await page2.locator('[id="addressArea\\ one"]').press('Tab');
    await page2.locator('[id="addressType\\ one"]').press('ArrowDown');
    await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Are you citizen of any other country other than India (dual/multiple)? *YesNo' }).getByRole('radio').nth(1).check();
    await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Is your Country of Birth any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
    await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a Tax Resident of any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
    await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a US Person? *YesNo' }).getByRole('radio').nth(1).check();
    await page2.locator('[id="consentStatus\\ one"]').check();
    await page2.getByRole('button', { name: 'Proceed' }).click();
  });
  test('TC_08: To complete the Investor Details section',async()=>{
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page2.locator('app-investorform').getByRole('radio').nth(3).check();
    await page2.getByRole('button', { name: 'Save' }).click();
    await page2.getByRole('checkbox', { name: 'I request you to open the' }).check();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page2.getByRole('button', { name: 'Proceed' }).click();
    await new Promise(resolve => setTimeout(resolve, 2000));

  });

  test('TC_09: Investor(s) have the option to choose up to three Nominees for the application. ', async()=>{
   const nominee = new NomineeDetails(page2);
   await nominee.applicationNomineeSelection();
   await new Promise(resolve => setTimeout(resolve, 2000));
  });

  test('TC_10: Select the bank account(s) details for used during the investment.', async()=>{
    const addAccount = new BankAccountDetails(page2);
    await addAccount.selectBankAccountDetails();
    await new Promise(resolve => setTimeout(resolve, 1000));
  });

  test("TC_11: Select the Schemes, Fee Type, and fill in the investment amount", async()=>{
    const scheme = new SchemeFeeDetails(page2);
    await scheme.selectSchemeandFeeDetails("10000000");
    await new Promise(resolve => setTimeout(resolve, 1000));

  });

  test("TC_12: Investor to click the Risk Profile sevction and complete the investment risk Questions", async()=>{
    const limit = new AdditionalDetails(page2);
    await limit.addRiskQuestion();
    await new Promise(resolve => setTimeout(resolve, 1000));

  });

  test('TC_13: Verify Disclosure of Interest and Exclusions Section Functionality', async()=>{
    const limit = new AdditionalDetails(page2);
    await limit.disclosure();
    await new Promise(resolve => setTimeout(resolve, 1000));
  });

  test('TC_14: Verify the Additional Details functionality', async()=>{
    const limit = new AdditionalDetails(page2);
    await limit.proceedLimitsandSecurities();
    console.log("Additional Details Section completed Successfully");
    await new Promise(resolve => setTimeout(resolve, 4000));
  });

  test("TC_15: Select the documents required to complete the application", async()=>{
    const docUpload = new DocumentUpload(page2);
    await docUpload.documentUpload();
    await new Promise(resolve => setTimeout(resolve, 4000));
    console.log("Document saved Successfully")
    await new Promise(resolve => setTimeout(resolve, 25000));

  });

  test("TC_16: verify the application Summary Page ", async()=>{
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
    
  
  




 