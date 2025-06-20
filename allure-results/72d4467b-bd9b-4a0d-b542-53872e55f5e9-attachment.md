# Test info

- Name: TC_16: verify the application Summary Page 
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\05-pmsApplication.spec.js:167:3

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://custodydigitizationuat.icicibank.com/", waiting until "load"

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\05-pmsApplication.spec.js:19:16
```

# Test source

```ts
   1 | import { test } from "@playwright/test";
   2 | import LoginPage from "../pages/loginPage.js";
   3 | import ApplicationBasicInformationPopup from '../pages/newApplicationPopup.js';
   4 | import InvestorDetails from '../pages/investorProfile.js';
   5 | import NomineeDetails from "../pages/nominee.js";
   6 | import BankAccountDetails from "../pages/bankAccount.js";
   7 | import SchemeFeeDetails from "../pages/schemeandFeeDetails.js";
   8 | import AdditionalDetails from '../pages/additionalDetails.js';
   9 | import DocumentUpload from "../pages/document.js";
   10 | import { globalData } from '../pages/global-data.js';
   11 |
   12 |
   13 | let page, page2;
   14 |
   15 | test.beforeAll(async ({ browser }) => {
   16 |
   17 |     const context = await browser.newContext();
   18 |     page = await context.newPage();
>  19 |     await page.goto("https://custodydigitizationuat.icicibank.com/");
      |                ^ Error: page.goto: Target page, context or browser has been closed
   20 |     const loginPage = new LoginPage(page);
   21 |     await loginPage.login("Domestic Custody","FT.IPRU.AMCRM02@FINTUPLE.com", "Fintuple@1", "a2C4dE");
   22 |     await loginPage.enterOTP("857362");
   23 |     await new Promise(resolve => setTimeout(resolve, 3000));
   24 |     
   25 |   });
   26 |   
   27 | test("TC_01: Login iCACE Applictaion", async () => {
   28 |     console.log("Login as successfully Completed");
   29 |   });
   30 | test("TC_02 : Click Investor Profile Dashboard Page", async () => {
   31 |     page2 = await Promise.all([
   32 |     page.waitForEvent("popup"), 
   33 |     page.locator('(//a[text()="Create New Application"])[1]').click(), 
   34 |     ]).then(([newPage]) => newPage);
   35 |     await page2.waitForLoadState();
   36 |     console.log("Domestic Custody Application navigated successfully");
   37 |   });
   38 | test("TC_03: Complete the basic application information to initiate the onboarding journey.", async () => {
   39 |     await new Promise(resolve => setTimeout(resolve, 3000));
   40 |     const basicInformation = new ApplicationBasicInformationPopup(page2);
   41 |     await basicInformation.applicationBasicInformationPopup();
   42 |     console.log("Application Basic Details saved Successfully");
   43 |     await new Promise(resolve => setTimeout(resolve, 2000));
   44 |   });
   45 | test("TC_04: Verify the details are fetched after entering PAN", async () => {
   46 |     await new Promise(resolve => setTimeout(resolve, 2000));
   47 |     const investordetails = new InvestorDetails(page2);
   48 |     await investordetails.ip("CURPA1355D");
   49 |     await new Promise(resolve => setTimeout(resolve, 1000));
   50 |   });
   51 | test('TC_05: Verify that clicking "Fetch KYC Details" opens the KYC section', async () => {
   52 |     await new Promise(resolve => setTimeout(resolve, 15000));
   53 |     // Get frame for KYC upload
   54 | const kycFrame = await page2.locator('#kycfame').contentFrame();
   55 | await kycFrame.locator('(//input[@ng-reflect-name="mode"])[1]').check();
   56 | await page2.locator('#kycfame').contentFrame().locator('//input[@id="pdfupload"]').setInputFiles('Files/Sample.pdf');
   57 |
   58 | //await kycFrame.locator('#kycfame').locator('#pdfupload').setInputFiles('Files/Sample.pdf'); // file uploads need element handle
   59 | await kycFrame.getByRole('button', { name: 'Proceed' }).click();
   60 | await kycFrame.getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
   61 | await kycFrame.getByRole('button', { name: 'Proceed' }).click();
   62 |
   63 | // Get frame from dialog iframe
   64 | const dialogFrame = await page2.getByRole('dialog').locator('iframe').contentFrame();
   65 | await dialogFrame.locator('path').click();
   66 | await dialogFrame.getByRole('button', { name: 'Yes' }).click();
   67 | await dialogFrame.locator('#Full_name_prefix').first().selectOption('MR');
   68 | await dialogFrame.locator('#MMaiden_Name_prefix').selectOption('MS');
   69 | await dialogFrame.locator('.ft-input-edit > .group > .col-md-12').first().click();
   70 | await dialogFrame.locator('.ft-input-edit > .group > .col-md-12').first().fill('MAHa');
   71 | await dialogFrame.locator('#FatherName_prefix').selectOption('MR');
   72 | await dialogFrame.locator('#Father_Spouse_relationship').first().selectOption('FATHER');
   73 | await dialogFrame.locator('#Place_of_birth').fill('CHENNAi');
   74 | await dialogFrame.locator('#Residential').check();
   75 | await dialogFrame.locator('#cdistrict').fill('CHENNAi');
   76 | await dialogFrame.locator('#cdistrict').press('Tab');
   77 | await dialogFrame.locator('div:nth-child(3) > div:nth-child(3) > .ft-input-edit > .group > .col-md-12').press('Tab');
   78 | await dialogFrame.locator('#checkcorresSameaspermanent').check();
   79 | await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
   80 | await dialogFrame.locator('#aadhaarBased').check();
   81 | await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
   82 |
   83 | await page2.waitForTimeout(2000); 
   84 |
   85 |   });
   86 |   test('TC_06: Verify that "Add/Update" under Occupation Details navigates to occupation form', async () => {
   87 |     await page2.locator('[id="occupationForm\\ one"]').click();
   88 |     await new Promise(resolve => setTimeout(resolve, 2000));
   89 |     await page2.getByRole('button', { name: 'Proceed' }).click();
   90 |     await new Promise(resolve => setTimeout(resolve, 1000));
   91 |   });
   92 |   test('TC_07: Verify that "Add/Update" under FATCA Details opens FATCA form', async () => {
   93 |     await new Promise(resolve => setTimeout(resolve, 2000));
   94 |     await page2.locator('[id="fatcaPending one"]').click();
   95 |     await new Promise(resolve => setTimeout(resolve, 2000));
   96 |     await page2.locator('[id="countryOfCurrentRes one"]').selectOption('India');
   97 |     await page2.locator('[id="addressArea\\ one"]').click();
   98 |     await page2.locator('[id="addressArea\\ one"]').fill('CHENNAI');
   99 |     await page2.locator('[id="addressArea\\ one"]').press('Tab');
  100 |     await page2.locator('[id="addressType\\ one"]').press('ArrowDown');
  101 |     await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Are you citizen of any other country other than India (dual/multiple)? *YesNo' }).getByRole('radio').nth(1).check();
  102 |     await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Is your Country of Birth any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
  103 |     await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a Tax Resident of any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
  104 |     await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a US Person? *YesNo' }).getByRole('radio').nth(1).check();
  105 |     await page2.locator('[id="consentStatus\\ one"]').check();
  106 |     await page2.getByRole('button', { name: 'Proceed' }).click();
  107 |   });
  108 |   test('TC_08: To complete the Investor Details section',async()=>{
  109 |     await new Promise(resolve => setTimeout(resolve, 2000));
  110 |     await page2.locator('app-investorform').getByRole('radio').nth(3).check();
  111 |     await page2.getByRole('button', { name: 'Save' }).click();
  112 |     await page2.getByRole('checkbox', { name: 'I request you to open the' }).check();
  113 |     await new Promise(resolve => setTimeout(resolve, 2000));
  114 |     await page2.getByRole('button', { name: 'Proceed' }).click();
  115 |     await new Promise(resolve => setTimeout(resolve, 2000));
  116 |
  117 |   });
  118 |
  119 |   test('TC_09: Investor(s) have the option to choose up to three Nominees for the application. ', async()=>{
```