# Test info

- Name: Modification Non-Adhar Flow >> TC_07: Verify that "Add/Update" under FATCA Details opens FATCA form
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\modFlowNonAadhar.spec.js:114:3

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://cd-r3.finwyze.com/", waiting until "load"

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\modFlowNonAadhar.spec.js:19:16
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
   14 | test.describe('Modification Non-Adhar Flow', () => {
   15 | test.beforeAll(async ({ browser }) => {
   16 |
   17 |     const context = await browser.newContext();
   18 |     page = await context.newPage();
>  19 |     await page.goto("https://cd-r3.finwyze.com");
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
   54 | const kycFrame = await page2.locator('#kycfame').dialogFrame();
   55 | await kycFrame.locator('(//input[@ng-reflect-name="mode"])[1]').check();
   56 | await page2.locator('#kycfame').dialogFrame().locator('//input[@id="pdfupload"]').setInputFiles('Files/Sample.pdf');
   57 |
   58 | //await kycFrame.locator('#kycfame').locator('#pdfupload').setInputFiles('Files/Sample.pdf'); // file uploads need element handle
   59 | await kycFrame.getByRole('button', { name: 'Proceed' }).click();
   60 | await kycFrame.getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
   61 | await kycFrame.getByRole('button', { name: 'Proceed' }).click();
   62 |
   63 | // Get frame from dialog iframe
   64 | const dialogFrame = await page2.getByRole('dialog').locator('iframe').dialogFrame();
   65 | // await dialogFrame.locator('path').click();
   66 | // await dialogFrame.getByRole('button', { name: 'Yes' }).click();
   67 | await dialogFrame.locator('#Full_name_prefix').first().selectOption('MR');
   68 | await dialogFrame.getByText('Prefix *MSMRMRS').nth(2).click();
   69 |
   70 | // Click on the first input element for Maiden Name Prefix
   71 | await dialogFrame.locator('.ft-input-edit > .group > .col-md-12').first().click();
   72 | await dialogFrame.locator('#MMaiden_Name_prefix').selectOption('MR');
   73 |
   74 | // Fill Mother's Name
   75 | await dialogFrame.locator('div').filter({ hasText: /^Mother\'s Name \*Mother\'s Name is required$/ }).getByRole('textbox').click();
   76 | await dialogFrame.locator('div').filter({ hasText: /^Mother\'s Name \*Mother\'s Name is required$/ }).getByRole('textbox').fill('MAHa');
   77 |
   78 | // Fill Father's Name and Relationship
   79 | await dialogFrame.locator('#FatherName_prefix').selectOption('MR');
   80 | await dialogFrame.locator('#Father_Spouse_relationship').selectOption('FATHER');
   81 |
   82 | // Fill Place of Birth
   83 | await dialogFrame.locator('#Place_of_birth').click();
   84 | await dialogFrame.locator('#Place_of_birth').fill('CHENNAi');
   85 |
   86 | // Check Residential Address
   87 | await dialogFrame.locator('#Residential').check();
   88 |
   89 | // Fill and select District for Residential Address
   90 | await dialogFrame.locator('#cdistrict').click();
   91 | await dialogFrame.locator('#cdistrict').fill('CHENNAi');
   92 |
   93 | // Check Permanent Address
   94 | await dialogFrame.locator('#pResidential').first().check();
   95 |
   96 | // Fill and select District for Permanent Address
   97 | await dialogFrame.locator('#pdistrict').click();
   98 | await dialogFrame.locator('#pdistrict').fill('CHENNAi');
   99 |
  100 | // Click on the Proceed button
  101 | await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
  102 | // await dialogFrame.locator('#aadhaarBased').check();
  103 | // await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
  104 |
  105 | await page2.waitForTimeout(2000); 
  106 |
  107 |   });
  108 |   test('TC_06: Verify that "Add/Update" under Occupation Details navigates to occupation form', async () => {
  109 |     await page2.locator('[id="occupationForm\\ one"]').click();
  110 |     await new Promise(resolve => setTimeout(resolve, 2000));
  111 |     await page2.getByRole('button', { name: 'Proceed' }).click();
  112 |     await new Promise(resolve => setTimeout(resolve, 1000));
  113 |   });
  114 |   test('TC_07: Verify that "Add/Update" under FATCA Details opens FATCA form', async () => {
  115 |     await new Promise(resolve => setTimeout(resolve, 2000));
  116 |     await page2.locator('[id="fatcaPending one"]').click();
  117 |     await new Promise(resolve => setTimeout(resolve, 2000));
  118 |     await page2.locator('[id="countryOfCurrentRes one"]').selectOption('India');
  119 |     await page2.locator('[id="addressArea\\ one"]').click();
```