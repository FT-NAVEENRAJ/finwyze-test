import { test } from "@playwright/test";
import LoginPage from "../pages/loginPage.js";
import ApplicationBasicInformationPopup from '../pages/newApplicationPopup.js';
import InvestorDetails from '../pages/investorProfile.js';
import DocumentUpload from "../pages/document.js";
import { globalData } from '../pages/global-data.js';




let page, page2;
let investordetails;

async function fillIfetchKYC(page) {
const iframeLocator = page2.getByRole('dialog').locator('iframe');
const frame = await iframeLocator.contentFrame();
await frame.locator('(//input[@ng-reflect-name="mode"])[1]').check();
await frame.locator('#pdfupload').setInputFiles('Files/Sample.pdf'); 
await frame.getByRole('button', { name: 'Proceed' }).click();
await frame.getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
await frame.getByRole('button', { name: 'Proceed' }).click();
await frame.locator('path').click();
await frame.getByRole('button', { name: 'Yes' }).click();
await frame.locator('#Full_name_prefix').first().selectOption('MR');
await frame.locator('#MMaiden_Name_prefix').selectOption('MS');
await frame.locator('.ft-input-edit > .group > .col-md-12').first().click();
await frame.locator('.ft-input-edit > .group > .col-md-12').first().fill('MAHa');
await frame.locator('#FatherName_prefix').selectOption('MR');
await frame.locator('#Father_Spouse_relationship').first().selectOption('FATHER');
await frame.locator('#Place_of_birth').fill('CHENNAi');
await frame.locator('#Residential').check();
await frame.locator('#cdistrict').fill('CHENNAi');
await frame.locator('#cdistrict').press('Tab');
await frame.locator('div:nth-child(3) > div:nth-child(3) > .ft-input-edit > .group > .col-md-12').press('Tab');
await frame.locator('#checkcorresSameaspermanent').check();
await frame.getByRole('button', { name: 'Proceed' }).click();
await frame.locator('#aadhaarBased').check();
await frame.getByRole('button', { name: 'Proceed' }).click();
}
async function fillFatcaDetails(page){
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
}

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();
    //await page.goto("https://custodydigitizationuat.icicibank.com/");
    await page.goto("https://cd-r3.finwyze.com/");
    const loginPage = new LoginPage(page);
   // await loginPage.login("Domestic Custody","FT.IPRU.AMCRM01@FINTUPLE.com", "Fintuple@2", "a2C4dE");
    await loginPage.login("Domestic Custody","FT.IPRU.AMCRM02@FINTUPLE.com", "Fintuple@123", "a2C4dE");
    await loginPage.enterOTP("857362");
    await new Promise(resolve => setTimeout(resolve, 3000));
    
  });
test("TC_01: Login iCACE Applictaion", async () => {
    console.log("Login as successfully Completed");
  });
test("TC_02: Click Investor Profile Dashboard Page", async () => {
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
    await basicInformation.applicationBasicInformationPopupDemat("1");
    console.log("Application Basic Details saved Successfully");
    await new Promise(resolve => setTimeout(resolve, 2000));
  });
test("TC_04: Verify the details are fetched after entering PAN", async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    investordetails = new InvestorDetails(page2);
    await investordetails.operationMode();
    await investordetails.investorProfileFirstHolder("CURPA1355D");
    await new Promise(resolve => setTimeout(resolve, 1000));
  });
test('TC_05: Verify that clicking "Fetch KYC Details" opens the KYC section', async () => {
    await new Promise(resolve => setTimeout(resolve, 10000));
    await fillIfetchKYC(page);
    await new Promise(resolve => setTimeout(resolve, 2000));

  });
  test('TC_06: Verify that "Add/Update" under Occupation Details navigates to occupation form', async () => {
    await investordetails.occupationDetailsfirst();
    await new Promise(resolve => setTimeout(resolve, 1000));
  });
  test('TC_07: Verify that "Add/Update" under FATCA Details opens FATCA form', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await investordetails.fatcaDetailsfirst();
    await fillFatcaDetails(page);
  });
  test('TC_08: To complete the Investor Details section',async()=>{
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page2.locator('app-investorform').getByRole('radio').nth(3).check();
    await page2.getByRole('button', { name: 'Save' }).nth(0).click();
   
    await new Promise(resolve => setTimeout(resolve, 2000));
    

  //  await investordetails.investorProfileSecondHolder("CASPB5084M");
  //  await investordetails.fillIfetchKYC(page);
  //  await investordetails.occupationDetailsSecond();
  //  await investordetails.fatcaDetailsSecond();
  //   await fillFatcaDetails(page);

 await page2.getByRole('checkbox', { name: 'I request you to open the' }).check();
    await page2.getByRole('button', { name: 'Proceed' }).click();
    await new Promise(resolve => setTimeout(resolve, 2000));

  });

  test('TC_09: Investor(s) have the option to choose up to three Nominees for the application. ', async()=>{
   await page2.locator('//button[text()="Proceed"]').click();
   await new Promise(resolve => setTimeout(resolve, 2000));
  });

  test("TC_10: Select the documents required to complete the application", async()=>{
    const docUpload = new DocumentUpload(page2);
    await docUpload.documentUploadDemat();
    await new Promise(resolve => setTimeout(resolve, 10000));

  });
    test("TC_11: verify the application Summary Page of Demat ", async()=>{
      await new Promise(resolve => setTimeout(resolve, 50000));
     
      //const pmsFormLink = await page2.getByRole('link', { name: 'Click here to View', exact: true }).nth(0);
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
  
    // console.log("Application ID         :", applicationId?.trim());
    // console.log("Application Type       :", applicationType?.trim());
    // console.log("Investor Type          :", investorType?.trim());
    // console.log("Application Mode       :", applicationMode?.trim());
    // console.log("Application Status     :", applicationStatus?.trim());
    // console.log("Application Date       :", applicationDate?.trim());
    // console.log("AMC Name               :", amcName?.trim());
  
  
    
  });
  




 