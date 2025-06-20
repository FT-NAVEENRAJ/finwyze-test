# Test info

- Name: TC_06: Verify that "Add/Update" under Occupation Details navigates to occupation form
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\05-pmsApplication.spec.js:95:3

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://cd-r3.finwyze.com/", waiting until "load"

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
>  19 |     await page.goto("https://cd-r3.finwyze.com");
      |                ^ Error: page.goto: Target page, context or browser has been closed
   20 |     const loginPage = new LoginPage(page);
   21 |     await loginPage.login("Domestic Custody","FT.IPRU.AMCRM02@FINTUPLE.com", "Fintuple@1", "a2C4dE");
   22 |     await loginPage.enterOTP("857362");
   23 |     await new Promise(resolve => setTimeout(resolve, 3000));
   24 |     
   25 |   });
   26 |   export function loginWithValidCredentials() {
   27 | test("TC_01: Login iCACE Applictaion", async () => {
   28 |     console.log("Login as successfully Completed");
   29 |   });
   30 | }
   31 |   export function dashboard(){
   32 | test("TC_02 : Click Investor Profile Dashboard Page", async () => {
   33 |     page2 = await Promise.all([
   34 |     page.waitForEvent("popup"), 
   35 |     page.locator('(//a[text()="Create New Application"])[1]').click(), 
   36 |     ]).then(([newPage]) => newPage);
   37 |     await page2.waitForLoadState();
   38 |     console.log("Domestic Custody Application navigated successfully");
   39 |   });
   40 | }
   41 |  export function applicationBasicInformation(){
   42 | test("TC_03: Complete the basic application information to initiate the onboarding journey.", async () => {
   43 |     await new Promise(resolve => setTimeout(resolve, 3000));
   44 |     const basicInformation = new ApplicationBasicInformationPopup(page2);
   45 |     await basicInformation.applicationBasicInformationPopup();
   46 |     console.log("Application Basic Details saved Successfully");
   47 |     await new Promise(resolve => setTimeout(resolve, 2000));
   48 |   });
   49 |  }
   50 | export function enterPAN(){
   51 | test("TC_04: Verify the details are fetched after entering PAN", async () => {
   52 |     await new Promise(resolve => setTimeout(resolve, 2000));
   53 |     const investordetails = new InvestorDetails(page2);
   54 |     await investordetails.ip("CURPA1355D");
   55 |     await new Promise(resolve => setTimeout(resolve, 1000));
   56 |   });
   57 | }
   58 | export function completeKYC(){
   59 | test('TC_05: Verify that clicking "Fetch KYC Details" opens the KYC section', async () => {
   60 |     await new Promise(resolve => setTimeout(resolve, 15000));
   61 |     // Get frame for KYC upload
   62 | const kycFrame = await page2.locator('#kycfame').contentFrame();
   63 | await kycFrame.locator('(//input[@ng-reflect-name="mode"])[1]').check();
   64 | await page2.locator('#kycfame').contentFrame().locator('//input[@id="pdfupload"]').setInputFiles('Files/Sample.pdf');
   65 |
   66 | //await kycFrame.locator('#kycfame').locator('#pdfupload').setInputFiles('Files/Sample.pdf'); // file uploads need element handle
   67 | await kycFrame.getByRole('button', { name: 'Proceed' }).click();
   68 | await kycFrame.getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
   69 | await kycFrame.getByRole('button', { name: 'Proceed' }).click();
   70 |
   71 | // Get frame from dialog iframe
   72 | const dialogFrame = await page2.getByRole('dialog').locator('iframe').contentFrame();
   73 | await dialogFrame.locator('path').click();
   74 | await dialogFrame.getByRole('button', { name: 'Yes' }).click();
   75 | await dialogFrame.locator('#Full_name_prefix').first().selectOption('MR');
   76 | await dialogFrame.locator('#MMaiden_Name_prefix').selectOption('MS');
   77 | await dialogFrame.locator('.ft-input-edit > .group > .col-md-12').first().click();
   78 | await dialogFrame.locator('.ft-input-edit > .group > .col-md-12').first().fill('MAHa');
   79 | await dialogFrame.locator('#FatherName_prefix').selectOption('MR');
   80 | await dialogFrame.locator('#Father_Spouse_relationship').first().selectOption('FATHER');
   81 | await dialogFrame.locator('#Place_of_birth').fill('CHENNAi');
   82 | await dialogFrame.locator('#Residential').check();
   83 | await dialogFrame.locator('#cdistrict').fill('CHENNAi');
   84 | await dialogFrame.locator('#cdistrict').press('Tab');
   85 | await dialogFrame.locator('div:nth-child(3) > div:nth-child(3) > .ft-input-edit > .group > .col-md-12').press('Tab');
   86 | await dialogFrame.locator('#checkcorresSameaspermanent').check();
   87 | await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
   88 | await dialogFrame.locator('#aadhaarBased').check();
   89 | await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
   90 |
   91 | await page2.waitForTimeout(2000); 
   92 |
   93 |   });
   94 | }
   95 |   test('TC_06: Verify that "Add/Update" under Occupation Details navigates to occupation form', async () => {
   96 |     await page2.locator('[id="occupationForm\\ one"]').click();
   97 |     await new Promise(resolve => setTimeout(resolve, 2000));
   98 |     await page2.getByRole('button', { name: 'Proceed' }).click();
   99 |     await new Promise(resolve => setTimeout(resolve, 1000));
  100 |   });
  101 |   test('TC_07: Verify that "Add/Update" under FATCA Details opens FATCA form', async () => {
  102 |     await new Promise(resolve => setTimeout(resolve, 2000));
  103 |     await page2.locator('[id="fatcaPending one"]').click();
  104 |     await new Promise(resolve => setTimeout(resolve, 2000));
  105 |     await page2.locator('[id="countryOfCurrentRes one"]').selectOption('India');
  106 |     await page2.locator('[id="addressArea\\ one"]').click();
  107 |     await page2.locator('[id="addressArea\\ one"]').fill('CHENNAI');
  108 |     await page2.locator('[id="addressArea\\ one"]').press('Tab');
  109 |     await page2.locator('[id="addressType\\ one"]').press('ArrowDown');
  110 |     await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Are you citizen of any other country other than India (dual/multiple)? *YesNo' }).getByRole('radio').nth(1).check();
  111 |     await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Is your Country of Birth any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
  112 |     await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a Tax Resident of any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
  113 |     await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a US Person? *YesNo' }).getByRole('radio').nth(1).check();
  114 |     await page2.locator('[id="consentStatus\\ one"]').check();
  115 |     await page2.getByRole('button', { name: 'Proceed' }).click();
  116 |   });
  117 |   test('TC_08: To complete the Investor Details section',async()=>{
  118 |     await new Promise(resolve => setTimeout(resolve, 2000));
  119 |     await page2.locator('app-investorform').getByRole('radio').nth(3).check();
```