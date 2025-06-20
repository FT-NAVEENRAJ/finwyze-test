# Test info

- Name: Modification Non-Adhar Flow >> TC_06: Verify that "Add/Update" under Occupation Details navigates to occupation form
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\modFlowNonAadhar.spec.js:110:3

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
   64 | // Set up content frame for easier access
   65 | const contentFrame = page1.locator('#kycfame').contentFrame();
   66 |
   67 | // Fill Full Name Prefix
   68 | await contentFrame.locator('#Full_name_prefix').first().selectOption('MR');
   69 | await contentFrame.getByText('Prefix *MSMRMRS').nth(2).click();
   70 |
   71 | // Click on the first input element for Maiden Name Prefix
   72 | await contentFrame.locator('.ft-input-edit > .group > .col-md-12').first().click();
   73 | await contentFrame.locator('#MMaiden_Name_prefix').selectOption('MR');
   74 |
   75 | // Fill Mother's Name
   76 | await contentFrame.locator('div').filter({ hasText: /^Mother\'s Name \*Mother\'s Name is required$/ }).getByRole('textbox').click();
   77 | await contentFrame.locator('div').filter({ hasText: /^Mother\'s Name \*Mother\'s Name is required$/ }).getByRole('textbox').fill('MAHa');
   78 |
   79 | // Fill Father's Name and Relationship
   80 | await contentFrame.locator('#FatherName_prefix').selectOption('MR');
   81 | await contentFrame.locator('#Father_Spouse_relationship').selectOption('FATHER');
   82 |
   83 | // Fill Place of Birth
   84 | await contentFrame.locator('#Place_of_birth').click();
   85 | await contentFrame.locator('#Place_of_birth').fill('CHENNAi');
   86 |
   87 | // Check Residential Address
   88 | await contentFrame.locator('#Residential').check();
   89 |
   90 | // Fill and select District for Residential Address
   91 | await contentFrame.locator('#cdistrict').click();
   92 | await contentFrame.locator('#cdistrict').fill('CHENNAi');
   93 |
   94 | // Check Permanent Address
   95 | await contentFrame.locator('#pResidential').first().check();
   96 |
   97 | // Fill and select District for Permanent Address
   98 | await contentFrame.locator('#pdistrict').click();
   99 | await contentFrame.locator('#pdistrict').fill('CHENNAi');
  100 |
  101 | // Click on the Proceed button
  102 | await contentFrame.getByRole('button', { name: 'Proceed' }).click();
  103 |
  104 | // await dialogFrame.locator('#aadhaarBased').check();
  105 | // await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
  106 |
  107 | await page2.waitForTimeout(2000); 
  108 |
  109 |   });
  110 |   test('TC_06: Verify that "Add/Update" under Occupation Details navigates to occupation form', async () => {
  111 |     await page2.locator('[id="occupationForm\\ one"]').click();
  112 |     await new Promise(resolve => setTimeout(resolve, 2000));
  113 |     await page2.getByRole('button', { name: 'Proceed' }).click();
  114 |     await new Promise(resolve => setTimeout(resolve, 1000));
  115 |   });
  116 |   test('TC_07: Verify that "Add/Update" under FATCA Details opens FATCA form', async () => {
  117 |     await new Promise(resolve => setTimeout(resolve, 2000));
  118 |     await page2.locator('[id="fatcaPending one"]').click();
  119 |     await new Promise(resolve => setTimeout(resolve, 2000));
```