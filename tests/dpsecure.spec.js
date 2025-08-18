import { test, expect } from '@playwright/test';
import LoginPage from "../pages/loginPage.js";
import ApplicationBasicInformationPopup from '../pages/newApplicationPopup.js';


let page, page1;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://cd-r5.finwyze.com");
    //await page.goto("https://custodydigitizationuat.icicibank.com");
    const loginPage = new LoginPage(page);
    await loginPage.login("Domestic Custody","FT.IPRU.AMCRM01@FINTUPLE.com", "Fintuple@21", "a2C4dE");
    //await loginPage.enterOTP("857362");
    await new Promise(resolve => setTimeout(resolve, 3000));
    page1 = await Promise.all([
        page.waitForEvent("popup"), 
        page.locator('(//a[text()="Create New Application"])[1]').click(), 
        ]).then(([newPage]) => newPage);
        await page1.waitForLoadState();
        console.log("Domestic Custody Application navigated successfully");
    await new Promise(resolve => setTimeout(resolve, 3000));
        const basicInformation = new ApplicationBasicInformationPopup(page1);
        await basicInformation.applicationBasicInformationPopup("3");
        console.log("Application Basic Details saved Successfully");
        await new Promise(resolve => setTimeout(resolve, 2000));
    
  });

test('TS_01: DP Sucure 3 Holder Bank Application No Nominee Scenario', async () => {
  
// ======================
// SECTION 1 — KYC Upload
// ======================

// Search PAN & Investor Check
await page1.locator('#search\\ one').fill('CURPA1355D');
await page1.locator('#investorPanCheck\\ one').click();

// Mode of Operation
if (!(await page1.locator('#modeOfOperation\\ Jointly').isChecked())) {
    await page1.locator('#modeOfOperation\\ Jointly').check();
}

// Fetch Data
await page1.locator('#FETCH\\ one').click();

// Switch to KYC iframe
const kycFrame = await page1.locator('#kycfame').contentFrame();

// Select mode DOCUMENT
if (!(await kycFrame.locator('#mode\\ DOCUMENT').isChecked())) {
    await kycFrame.locator('#mode\\ DOCUMENT').check();
}

// Upload PDF
await page1.waitForTimeout(15000);
await kycFrame.locator('#pdfupload').setInputFiles('Files/Sample.pdf');
await page1.waitForTimeout(2000);

// Proceed and Authorise
await kycFrame.getByRole('button', { name: 'Proceed' }).click();
await kycFrame.getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
await kycFrame.getByRole('button', { name: 'Proceed' }).click();
await page1.waitForTimeout(2000);

// ======================
// SECTION 2 — Dialog Form
// ======================

const dialogFrame = await page1.getByRole('dialog').locator('iframe').contentFrame();

// Basic Details

await dialogFrame.locator('path').click();
await dialogFrame.getByRole('button', { name: 'Yes' }).click();
await dialogFrame.locator('#Full_name_prefix').first().selectOption('MR');
await dialogFrame.locator('#MMaiden_Name_prefix').selectOption('MS');

// Fill "MAHa" field
await dialogFrame.locator('.ft-input-edit > .group > .col-md-12').first().fill('MAHa');

// Father Details
await dialogFrame.locator('#FatherName_prefix').selectOption('MR');
await dialogFrame.locator('#Father_Spouse_relationship').first().selectOption('FATHER');

// Birth Details
await dialogFrame.locator('#Place_of_birth').fill('CHENNAi');
await dialogFrame.locator('#Residential').check();

// Address
await dialogFrame.locator('#cdistrict').fill('CHENNAi');
await dialogFrame.locator('#cdistrict').press('Tab');
await dialogFrame.locator('#checkcorresSameaspermanent').check();

// Proceed in Dialog
await dialogFrame.getByRole('button', { name: 'Proceed' }).click();

// Aadhaar Based Check
await dialogFrame.locator('#aadhaarBased').check();
await dialogFrame.getByRole('button', { name: 'Proceed' }).click();
await page1.waitForTimeout(2000);

// ======================
// SECTION 3 — Occupation
// ======================

await page1.locator('#occupationForm\\ one').click();
await page1.waitForTimeout(2000);
await page1.getByRole('button', { name: 'Proceed' }).click();
await page1.waitForTimeout(1000);

// ======================
// SECTION 4 — FATCA Form
// ======================

await page1.locator('#fatcaPending\\ one').click();
await page1.waitForTimeout(2000);
await page1.locator('#countryOfCurrentRes\\ one').selectOption('India');

await page1.locator('#addressArea\\ one').fill('CHENNAI');
await page1.locator('#addressType\\ one').selectOption('REGISTEREDOFFICE');

// Radio questions — set all to "No"
const fatcaDialog = page1.getByRole('dialog');
await fatcaDialog.locator('form div').filter({ hasText: 'Are you citizen of any other country' }).getByRole('radio').nth(1).check();
await fatcaDialog.locator('form div').filter({ hasText: 'Is your Country of Birth any country' }).getByRole('radio').nth(1).check();
await fatcaDialog.locator('form div').filter({ hasText: 'Are you a Tax Resident of any country' }).getByRole('radio').nth(1).check();
await fatcaDialog.locator('form div').filter({ hasText: 'Are you a US Person?' }).getByRole('radio').nth(1).check();

// Consent
await page1.locator('#consentStatus\\ one').check();
await page1.getByRole('button', { name: 'Proceed' }).click();

// ======================
// SECTION 5 — Investor Save
// ======================

await new Promise(resolve => setTimeout(resolve, 2000));
await page1.locator('app-investorform').getByRole('radio').nth(3).check();
await page1.locator('#onSaveInvestorDetails\\ one').click();
await page1.waitForTimeout(2000);

// Search Second Investor
await page1.waitForTimeout(2000);
await page1.keyboard.press('PageDown');
await page1.waitForTimeout(2000);
await page1.locator('#search\\ two').click();




  // Two Holder

  // ======================
// SECTION 1 — Second Holder KYC Upload
// ======================

// Search PAN & Verify
await page1.locator('#search\\ two').fill('CASPB5084M');
await page1.locator('#investorPanCheck\\ two').click();
await page1.locator('#FETCH\\ two').click();
await page1.locator('//select[@id="familyDeclaration two"]').selectOption("ME");

// Switch to KYC iframe
const kycFrame2 = await page1.locator('#kycfame').contentFrame();
await page1.waitForTimeout(2000);
// Upload PDF
await page1.waitForTimeout(18000);
await kycFrame2.locator('#pdfupload').setInputFiles('Files/Sample.pdf');

// Proceed and Authorise
await kycFrame2.getByRole('button', { name: 'Proceed' }).click();
await kycFrame2.getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
await kycFrame2.getByRole('button', { name: 'Proceed' }).click();
await page1.waitForTimeout(2000);

// ======================
// SECTION 2 — Personal Details
// ======================

// Name Prefixes
await kycFrame2.locator('#Full_name_prefix').first().selectOption('MR');
await kycFrame2.locator('#MMaiden_Name_prefix').selectOption('MR');
await kycFrame2.locator('#FatherName_prefix').selectOption('MR');

// Name & Relationship
await kycFrame2.locator('.ft-input-edit > .group > .col-md-12').first().fill('TEST');
await kycFrame2.locator('#Father_Spouse_relationship').first().selectOption('FATHER');

// Birth & Address
await kycFrame2.locator('#Place_of_birth').fill('CHENNAI');
await kycFrame2.locator('#Residential').check();
await kycFrame2.locator('#cdistrict').fill('CHENNAI');

// Pin code & City
//await kycFrame2.locator('div:nth-child(3) > div:nth-child(3) > .ft-input-edit > .group > .col-md-12').fill('600075');
//await kycFrame2.locator('select[name="city1"]').selectOption('CHENNAI');

// Correspondence same as permanent
//
await kycFrame2.locator('//input[@id="pResidential"]').nth(1).check();
await kycFrame2.locator('//input[@id="pdistrict"]').fill("Chennai");
//await kycFrame2.locator('#checkcorresSameaspermanent').check();

// Proceed
await kycFrame2.getByRole('button', { name: 'Proceed' }).click();
await new Promise(resolve => setTimeout(resolve, 2000));

// Aadhaar Based Verification
// await kycFrame2.locator('#aadhaarBased').check();
// await kycFrame2.getByRole('button', { name: 'Proceed' }).click();

// ======================
// SECTION 3 — Occupation
// ======================

await page1.locator('#occupationForm\\ two').click();
await page1.getByRole('button', { name: 'Proceed' }).click();
await new Promise(resolve => setTimeout(resolve, 2000));

// ======================
// SECTION 4 — FATCA Form
// ======================
await new Promise(resolve => setTimeout(resolve, 2000));
await page1.locator('#fatcaPending\\ two').click();
await page1.waitForTimeout(2000);
await page1.locator('#countryOfCurrentRes\\ two').selectOption('India');
await page1.locator('#addressArea\\ two').fill('CHENNAI');
await page1.locator('#addressType\\ two').selectOption('BUSINESS');

// FATCA Questions — Set all to "No"
const fatcaDialog2 = page1.getByRole('dialog');
await fatcaDialog2.locator('form div').filter({ hasText: 'Are you citizen of any other country' }).getByRole('radio').nth(1).check();
await fatcaDialog2.locator('form div').filter({ hasText: 'Are you a Tax Resident of any country' }).getByRole('radio').nth(1).check();
await fatcaDialog2.locator('form div').filter({ hasText: 'Is your Country of Birth any country' }).getByRole('radio').nth(1).check();
await fatcaDialog2.locator('form div').filter({ hasText: 'Are you a US Person?' }).getByRole('radio').nth(1).check();
await new Promise(resolve => setTimeout(resolve, 2000));
// Consent & Proceed
await page1.locator('#consentStatus\\ two').check();
await page1.getByRole('button', { name: 'Proceed' }).click();
await new Promise(resolve => setTimeout(resolve, 2000));

// ======================
// SECTION 5 — Investor Save
// ======================

await page1.locator('app-investorform').filter({ hasText: 'Second Investor * CASPB5084M' }).getByRole('radio').nth(3).check();
await page1.locator('#onSaveInvestorDetails\\ two').click();

// Family Declaration
await page1.locator('#familyDeclaration\\ two').selectOption('ME');
await page1.locator('#onSaveInvestorDetails\\ two').click();
await page1.waitForTimeout(2000);

await page1.locator('#search\\ three').click();
await page1.keyboard.press('PageDown');
await page1.waitForTimeout(2000);

  // third Holder

  // ======================
// SECTION 1 — Third Holder PAN & KYC
// ======================

// Enter PAN
await page1.getByRole('textbox', { name: 'Enter PAN' }).fill('GAYPK7938B');
await page1.getByText('arrow_forward').click();
// await page1.getByRole('textbox', { name: 'Enter PAN' }).fill('GAYPK7938B');
// await page1.getByText('arrow_forward').click();

// Family Declaration
await page1.waitForTimeout(2000);
await page1.locator('#familyDeclaration\\ three').selectOption('ME');

// Fetch KYC Details
await page1.getByText('Fetch KYC Details').click();

// Switch to KYC iframe
const kycFrame3 = await page1.locator('#kycfame').contentFrame();

// Upload PDF
await page1.waitForTimeout(15000);
await kycFrame3.locator('#pdfupload').setInputFiles('Files/Sample.pdf');

// Proceed & Authorise
await kycFrame3.getByRole('button', { name: 'Proceed' }).click();
await kycFrame3.getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
await kycFrame3.getByRole('button', { name: 'Proceed' }).click();
await page1.waitForTimeout(2000);

// ======================
// SECTION 2 — Personal Details
// ======================

// Name & Prefix
await kycFrame3.locator('#Full_name_prefix').first().selectOption('MR');
await kycFrame3.locator('#MMaiden_Name_prefix').selectOption('MS');
await kycFrame3.locator('#FatherName_prefix').selectOption('MRS');

// Name Field
await kycFrame3.locator('.ft-input-edit > .group > .col-md-12').first().fill('MAHa');

// Relationship
await kycFrame3.locator('#Father_Spouse_relationship').selectOption('FATHER');

// Birthplace
await kycFrame3.locator('#Place_of_birth').fill('CHENNAi');

// Office Address
await kycFrame3.locator('#office').first().check();
await kycFrame3.locator('#cdistrict').fill('MUMABAi');

// Permanent Address
await kycFrame3.locator('#pResidential').nth(2).check();
await kycFrame3.locator('#pdistrict').fill('MUMBAi');

// Proceed
await kycFrame3.getByRole('button', { name: 'Proceed' }).click();
await new Promise(resolve => setTimeout(resolve, 2000));
// ======================
// SECTION 3 — Occupation
// ======================

await page1.locator('#occupationForm\\ three').click();
await page1.getByRole('button', { name: 'Proceed' }).click();
await new Promise(resolve => setTimeout(resolve, 2000));
// ======================
// SECTION 4 — FATCA
// ======================
await new Promise(resolve => setTimeout(resolve, 2000));
await page1.getByText('Add/Update').click();
await page1.locator('#countryOfCurrentRes\\ three').selectOption('IN').press('Tab');
await page1.locator('#addressArea\\ three').fill('CHENNAi').press('Tab');
await page1.locator('#addressType\\ three').press('ArrowDown');
await new Promise(resolve => setTimeout(resolve, 2000));
// FATCA Questions — all "No"
const fatcaDialog3 = page1.getByRole('dialog');
await fatcaDialog3.locator('form div').filter({ hasText: 'Are you citizen of any other country' }).getByRole('radio').nth(1).check();
await fatcaDialog3.locator('form div').filter({ hasText: 'Is your Country of Birth any country' }).getByRole('radio').nth(1).check();
await fatcaDialog3.locator('form div').filter({ hasText: 'Are you a Tax Resident of any country' }).getByRole('radio').nth(1).check();
await fatcaDialog3.locator('form div').filter({ hasText: 'Are you a US Person?' }).getByRole('radio').nth(1).check();

// Consent & Proceed
await page1.locator('#consentStatus\\ three').check();
await page1.getByRole('button', { name: 'Proceed' }).click();
await new Promise(resolve => setTimeout(resolve, 2000));
// ======================
// SECTION 5 — Save Investor
// ======================
await new Promise(resolve => setTimeout(resolve, 2000));
await page1.locator('app-investorform').filter({ hasText: 'Third Investor * GAYPK7938B' }).getByRole('radio').nth(3).check();
await page1.getByRole('button', { name: 'Save' }).click();

// Final Confirmation
await page1.getByRole('checkbox', { name: 'I request you to open the' }).check();
await page1.getByRole('button', { name: 'Proceed' }).click();


// Nominee Proceed 

  await page1.getByRole('button', { name: 'Proceed' }).click();

// Bank Account  Section

  await page1.locator('#NO').first().check();
  await page1.locator('#NO').nth(1).check();
  await page1.locator('#NO').nth(2).check();
  await page1.locator('#mobileNumber').click();
  await page1.locator('#mobileNumber').fill('9080365952');
  await page1.locator('.ng-invalid > div:nth-child(4) > div:nth-child(2)').click();
  await page1.locator('div:nth-child(4) > div:nth-child(2) > .group > .ng-star-inserted > .ft-input-edit').fill('');
  await page1.locator('.ng-star-inserted > .ft-input-edit').first().click();
  await page1.locator('.ng-star-inserted > .ft-input-edit').first().fill('test@gmail.com');
  await page1.locator('#daily').check();
  await page1.getByText('Add/Update').click();
  await page1.locator('#education').selectOption('GRAD');
  await page1.locator('#occupation').selectOption('RETIRED');
  await page1.locator('div').filter({ hasText: /^SELECT<1 Year1 to <3 Years10 Years3 to <5 Years5 to <10 Years$/ }).getByRole('combobox').selectOption('1TO3YEARS');
  await page1.locator('div').filter({ hasText: /^SELECT <10 Lac >= 10 Cr 1 Cr to 10 Cr 10 Lac to <25 lac 25 Lac to <1 Cr$/ }).getByRole('combobox').selectOption('MORETHAN10CR');
  await page1.locator('#feeType').selectOption('LESSTHAN10LAC');
  await page1.locator('#sourceFunds').selectOption('BUSINESSINCOME');
  await page1.getByRole('button', { name: 'Save' }).click();
  await page1.locator('app-nomineedetails #YES').check();
  await page1.getByText('add', { exact: true }).click();
  await page1.getByRole('cell', { name: 'JIVITA PREM BUDHRANI' }).locator('#isSelected').check();
  await page1.getByRole('row', { name: 'JIVITA PREM BUDHRANI 02-11-' }).locator('#allocation').click();
  await page1.getByRole('row', { name: 'JIVITA PREM BUDHRANI 02-11-' }).locator('#allocation').fill('100');
  await page1.getByRole('button', { name: 'Add Nominee' }).click();
  await page1.getByRole('button', { name: 'Proceed' }).click();

// bank section

  await page1.getByText('add', { exact: true }).click();
  await page1.getByRole('row', { name: 'AADHITYA RAJASEKARAN 39033835365 SBIN0007494 STATE BANK OF INDIA remove_red_eye' }).locator('#isSelected').check();
  await page1.getByRole('button', { name: 'Save' }).click();
  await page1.getByRole('button', { name: 'Proceed' }).click();

// scheme details

  await page1.locator('#isSelected').check();
  await page1.locator('#schemePlanType').selectOption('LUMPSUM');
  await page1.locator('#feeType').selectOption('FIXED');
  await page1.locator('#aum').click();
  await page1.locator('#aum').fill('10000000');
  await page1.getByRole('button', { name: 'Proceed' }).click();
  await page1.getByRole('button', { name: 'Proceed' }).click();

// Additional Details

  await page1.locator('#equitySingle').click();
  await page1.locator('#equitySingle').fill('10');
  await page1.locator('#equitySingle').press('Tab');
  await page1.locator('#equityMultiple').fill('11');
  await page1.locator('#equityMultiple').press('Tab');
  await page1.locator('#debtSingle').fill('12');
  await page1.locator('#debtSingle').press('Tab');
  await page1.getByRole('row', { name: 'Debt and hybrid securities' }).locator('#debtMultiple').fill('13');

// Risk Profile

  
  await page1.locator('[id="Risk\\ Profile\\ pending"]').click();
  await page1.locator('#RISK_FILED_2_OPTION_2undefined').check();
  await page1.locator('#RISK_FILED_3_OPTION_2undefined').check();
  await page1.locator('#RISK_FILED_4').selectOption('OPTION_3');
  await page1.locator('input[name="riskProfile_consent_checkbox"]').check();
  await page1.getByRole('button', { name: 'Proceed' }).click();

// Disclosure of interst

  await page1.getByText('Add/Update').click();
  await page1.locator('#NO').check();
  await page1.getByRole('radio').nth(3).check();
  await page1.getByRole('button', { name: 'Proceed' }).click();
  await page1.getByRole('button', { name: 'Proceed' }).click();

// Document section

  await page1.getByText('add', { exact: true }).click();
  await page1.getByRole('rowheader', { name: 'PAN' }).locator('#isSelected').check();
  await page1.getByRole('row', { name: 'Cancelled Cheque IMAGE UPLOAD' }).locator('#isSelected').check();
  await page1.getByRole('button', { name: 'Save' }).click();
  await page1.locator('#investorName').selectOption('1');
  await page1.getByText('add', { exact: true }).click();
  await page1.getByRole('row', { name: 'Specimen Signature' }).locator('#isSelected').check();
  await page1.getByRole('rowheader', { name: 'PAN' }).locator('#isSelected').check();
  await page1.getByRole('row', { name: 'Specimen Signature' }).locator('#isSelected').uncheck();
  await page1.getByRole('row', { name: 'Cancelled Cheque' }).locator('#isSelected').check();
  await page1.getByRole('button', { name: 'Save' }).click();
  await page1.locator('#investorName').selectOption('2');
  await page1.getByText('add', { exact: true }).click();
  await page1.locator('tr:nth-child(6) > th > .form-check > #isSelected').check();
  await page1.getByRole('rowheader', { name: 'PAN' }).locator('#isSelected').check();
  await page1.getByRole('button', { name: 'Save' }).click();
  await page1.getByRole('button', { name: 'Proceed' }).click();
  await new Promise(resolve => setTimeout(resolve, 25000));
  await new Promise(resolve => setTimeout(resolve, 50000));
         

  await page1.goto('https://custodydigitizationuat.icicibank.com/applications/form/bank/summary/ind?applicationId=15fdc127-d66b-4772-a4b9-719f946708f9');
  await page1.getByText('Domestic Custody').nth(2).click();
  await page1.getByText('Applications').nth(1).click();
  await page1.goto('https://custodydigitizationuat.icicibank.com/applications/');
});
















