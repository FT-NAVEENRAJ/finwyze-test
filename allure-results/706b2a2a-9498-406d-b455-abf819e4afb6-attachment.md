# Test info

- Name: Modification Non-Adhar Flow >> TC_06: Verify that "Add/Update" under Occupation Details navigates to occupation form
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\modFlowNonAadhar.spec.js:91:3

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('[id="occupationForm\\ one"]')
    - locator resolved to <a id="occupationForm one" _ngcontent-ng-c1219752464="" class="link ng-star-inserted">Add/Update</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <ngb-modal-window role="dialog" tabindex="-1" aria-modal="true" class="d-block modal fade show">…</ngb-modal-window> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <ngb-modal-window role="dialog" tabindex="-1" aria-modal="true" class="d-block modal fade show">…</ngb-modal-window> intercepts pointer events
    - retrying click action
      - waiting 100ms
    10 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <ngb-modal-window role="dialog" tabindex="-1" aria-modal="true" class="d-block modal fade show">…</ngb-modal-window> intercepts pointer events
     - retrying click action
       - waiting 500ms

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\modFlowNonAadhar.spec.js:92:56
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
   19 |     await page.goto("https://cd-r3.finwyze.com");
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
   78 | await dialogFrame.locator('(//input[@id="pResidential"])[1]').check();   // - issue
   79 | await dialogFrame.locator('//input[@id="pdistrict"][@formcontrolname="pdistrict"]').fill("Chennai");
   80 |
   81 | //await page2.pause();
   82 | //await dialogFrame.locator('#checkcorresSameaspermanent').check();
   83 | await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
   84 | //await page2.pause();
   85 | // await dialogFrame.locator('#aadhaarBased').check();
   86 | // await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
   87 |
   88 | await page2.waitForTimeout(2000); 
   89 |
   90 |   });
   91 |   test('TC_06: Verify that "Add/Update" under Occupation Details navigates to occupation form', async () => {
>  92 |     await page2.locator('[id="occupationForm\\ one"]').click();
      |                                                        ^ Error: locator.click: Target page, context or browser has been closed
   93 |     await new Promise(resolve => setTimeout(resolve, 2000));
   94 |     await page2.getByRole('button', { name: 'Proceed' }).click();
   95 |     await new Promise(resolve => setTimeout(resolve, 1000));
   96 |   });
   97 |   test('TC_07: Verify that "Add/Update" under FATCA Details opens FATCA form', async () => {
   98 |     await new Promise(resolve => setTimeout(resolve, 2000));
   99 |     await page2.locator('[id="fatcaPending one"]').click();
  100 |     await new Promise(resolve => setTimeout(resolve, 2000));
  101 |     await page2.locator('[id="countryOfCurrentRes one"]').selectOption('India');
  102 |     await page2.locator('[id="addressArea\\ one"]').click();
  103 |     await page2.locator('[id="addressArea\\ one"]').fill('CHENNAI');
  104 |     await page2.locator('[id="addressArea\\ one"]').press('Tab');
  105 |     await page2.locator('[id="addressType\\ one"]').press('ArrowDown');
  106 |     await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Are you citizen of any other country other than India (dual/multiple)? *YesNo' }).getByRole('radio').nth(1).check();
  107 |     await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Is your Country of Birth any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
  108 |     await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a Tax Resident of any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
  109 |     await page2.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a US Person? *YesNo' }).getByRole('radio').nth(1).check();
  110 |     await page2.locator('[id="consentStatus\\ one"]').check();
  111 |     await page2.getByRole('button', { name: 'Proceed' }).click();
  112 |   });
  113 |   test('TC_08: To complete the Investor Details section',async()=>{
  114 |     await new Promise(resolve => setTimeout(resolve, 2000));
  115 |     await page2.locator('app-investorform').getByRole('radio').nth(3).check();
  116 |     await page2.getByRole('button', { name: 'Save' }).click();
  117 |     await page2.getByRole('checkbox', { name: 'I request you to open the' }).check();
  118 |     await new Promise(resolve => setTimeout(resolve, 2000));
  119 |     await page2.getByRole('button', { name: 'Proceed' }).click();
  120 |     await new Promise(resolve => setTimeout(resolve, 2000));
  121 |
  122 |   });
  123 |
  124 |   test('TC_09: Investor(s) have the option to choose up to three Nominees for the application. ', async()=>{
  125 |    const nominee = new NomineeDetails(page2);
  126 |    await nominee.applicationNomineeSelection();
  127 |    await new Promise(resolve => setTimeout(resolve, 2000));
  128 |   });
  129 |
  130 |   test('TC_10: Select the bank account(s) details for used during the investment.', async()=>{
  131 |     const addAccount = new BankAccountDetails(page2);
  132 |     await addAccount.selectBankAccountDetails();
  133 |     await new Promise(resolve => setTimeout(resolve, 1000));
  134 |   });
  135 |
  136 |   test("TC_11: Select the Schemes, Fee Type, and fill in the investment amount", async()=>{
  137 |     const scheme = new SchemeFeeDetails(page2);
  138 |     await scheme.selectSchemeandFeeDetails("10000000");
  139 |     await new Promise(resolve => setTimeout(resolve, 1000));
  140 |
  141 |   });
  142 |
  143 |   test("TC_12: Investor to click the Risk Profile sevction and complete the investment risk Questions", async()=>{
  144 |     const limit = new AdditionalDetails(page2);
  145 |     await limit.addRiskQuestion();
  146 |     await new Promise(resolve => setTimeout(resolve, 1000));
  147 |
  148 |   });
  149 |
  150 |   test('TC_13: Verify Disclosure of Interest and Exclusions Section Functionality', async()=>{
  151 |     const limit = new AdditionalDetails(page2);
  152 |     await limit.disclosure();
  153 |     await new Promise(resolve => setTimeout(resolve, 1000));
  154 |   });
  155 |
  156 |   test('TC_14: Verify the Additional Details functionality', async()=>{
  157 |     const limit = new AdditionalDetails(page2);
  158 |     await limit.proceedLimitsandSecurities();
  159 |     console.log("Additional Details Section completed Successfully");
  160 |     await new Promise(resolve => setTimeout(resolve, 4000));
  161 |   });
  162 |
  163 |   test("TC_15: Select the documents required to complete the application", async()=>{
  164 |     const docUpload = new DocumentUpload(page2);
  165 |     await docUpload.documentUpload();
  166 |     await new Promise(resolve => setTimeout(resolve, 4000));
  167 |     console.log("Document saved Successfully")
  168 |    
  169 |
  170 |   });
  171 |   test("TC_16: Verify the Confirmation Popup of Application Mode", async()=>{
  172 |     await new Promise(resolve => setTimeout(resolve, 1000));
  173 |     await page2.getByRole('dialog').locator('iframe').contentFrame().getByRole('radio').nth(1).check();
  174 |     await page2.getByRole('dialog').locator('iframe').contentFrame().getByRole('button', { name: 'Proceed' }).click();
  175 |     await new Promise(resolve => setTimeout(resolve, 25000));
  176 |
  177 |   })
  178 |
  179 |   test("TC_17: verify the application Summary Page ", async()=>{
  180 |     await new Promise(resolve => setTimeout(resolve, 50000));
  181 |          
  182 |         const pmsFormLink = await page2.getByRole('link', { name: 'Click here to View', exact: true }).nth(0);
  183 |         const cafFormLink = await page2.getByRole('link', { name: 'Click here to View', exact: true }).nth(1);
  184 |         const kycFormLink = await page2.getByRole('link', { name: 'Click here to View', exact: true }).nth(2);
  185 |       
  186 |         // await expect(pmsFormLink).toBeVisible();
  187 |         // await expect(cafFormLink).toBeVisible();
  188 |         // await expect(kycFormLink).toBeVisible();
  189 |       
  190 |         // Extract application detail texts
  191 |         const applicationId = await page2.locator('(//a[@class="link"])[1]').textContent();
  192 |         const applicationType = await page2.locator('(//span[@class="quick-summary-value"])[2]').textContent();
```