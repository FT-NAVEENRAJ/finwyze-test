import { test, expect } from '@playwright/test';
import LoginPage from "../pages/loginPage.js";
import ApplicationBasicInformationPopup from '../pages/newApplicationPopup.js';


let page, page1;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://custodydigitizationuat.icicibank.com");
    const loginPage = new LoginPage(page);
    await loginPage.login("Domestic Custody","ts.test.amcsign2@fintuple.com", "Fintuple@1", "a2C4dE");
    await loginPage.enterOTP("857362");
    await new Promise(resolve => setTimeout(resolve, 3000));
    page1 = await Promise.all([
        page.waitForEvent("popup"), 
        page.locator('(//a[text()="Create New Application"])[1]').click(), 
        ]).then(([newPage]) => newPage);
        await page1.waitForLoadState();
        console.log("Domestic Custody Application navigated successfully");
    await new Promise(resolve => setTimeout(resolve, 3000));
        const basicInformation = new ApplicationBasicInformationPopup(page1);
        await basicInformation.applicationBasicInformationPopup("DEMAT+PMS+BANK","TELANGANA","3");
        console.log("Application Basic Details saved Successfully");
        await new Promise(resolve => setTimeout(resolve, 2000));
    
  });

test('TS_01: DP Sucure 3 Holder Bank Application No Nominee Scenario', async () => {
  


  
  await page1.locator('[id="search\\ one"]').fill('CURPA1355D');
  await page1.locator('[id="investorPanCheck\\ one"]').click();
  await page1.locator('[id="modeOfOperation\\ Jointly"]').check();
  await page1.locator('[id="FETCH\\ one"]').click();
  await page1.locator('#kycfame').contentFrame().locator('[id="mode\\ DOCUMENT"]').check();
  await new Promise(resolve => setTimeout(resolve, 15000));
 // await page1.locator('#kycfame').contentFrame().getByRole('button', { name: 'Upload' }).click();
  await new Promise(resolve => setTimeout(resolve, 2000));
  await page1.locator('#kycfame').contentFrame().locator('//input[@id="pdfupload"]').setInputFiles('Files/Sample.pdf');
  await new Promise(resolve => setTimeout(resolve, 2000));
  await page1.locator('#kycfame').contentFrame().getByRole('button', { name: 'Proceed' }).click();
  await page1.locator('#kycfame').contentFrame().getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
  await page1.locator('#kycfame').contentFrame().getByRole('button', { name: 'Proceed' }).click();
  await new Promise(resolve => setTimeout(resolve, 2000));

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
await page1.waitForTimeout(2000); 


  await page1.locator('[id="occupationForm\\ one"]').click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page1.getByRole('button', { name: 'Proceed' }).click();
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    await new Promise(resolve => setTimeout(resolve, 2000));
    await page1.locator('[id="fatcaPending one"]').click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page1.locator('[id="countryOfCurrentRes one"]').selectOption('India');
    await page1.locator('[id="addressArea\\ one"]').click();
    await page1.locator('[id="addressArea\\ one"]').fill('CHENNAI');
    await page1.locator('[id="addressArea\\ one"]').press('Tab');
    await page1.locator('[id="addressType\\ one"]').press('ArrowDown');
    await page1.getByRole('dialog').locator('form div').filter({ hasText: 'Are you citizen of any other country other than India (dual/multiple)? *YesNo' }).getByRole('radio').nth(1).check();
    await page1.getByRole('dialog').locator('form div').filter({ hasText: 'Is your Country of Birth any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
    await page1.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a Tax Resident of any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
    await page1.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a US Person? *YesNo' }).getByRole('radio').nth(1).check();
    await page1.locator('[id="consentStatus\\ one"]').check();
    await page1.getByRole('button', { name: 'Proceed' }).click();







  await page1.locator('app-investorform').filter({ hasText: 'Solo/First Investor *' }).getByRole('radio').nth(3).check();
  await page1.locator('[id="onSaveInvestorDetails\\ one"]').click();
  await page1.locator('[id="search\\ two"]').click();


  // Two Holder

  await page1.locator('[id="search\\ two"]').fill('EACPK9691B');
  await page1.locator('[id="investorPanCheck\\ two"]').click();
  await page1.locator('[id="FETCH\\ two"]').click();
  await page1.locator('#kycfame').contentFrame().locator('[id="mode\\ DOCUMENT"]').check();
  await new Promise(resolve => setTimeout(resolve, 15000));
 // await page1.locator('#kycfame').contentFrame().getByRole('button', { name: 'Upload' }).click();
  await page1.locator('#kycfame').contentFrame().locator('//input[@id="pdfupload"]').setInputFiles('Files/Sample.pdf');
  await page1.locator('#kycfame').contentFrame().getByRole('button', { name: 'Proceed' }).click();
  await page1.locator('#kycfame').contentFrame().getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
  await page1.locator('#kycfame').contentFrame().getByRole('button', { name: 'Proceed' }).click();
  await new Promise(resolve => setTimeout(resolve,2000));
  await page1.locator('#kycfame').contentFrame().locator('#Full_name_prefix').first().selectOption('MR');
  await page1.locator('#kycfame').contentFrame().locator('#MMaiden_Name_prefix').selectOption('MR');
  await page1.locator('#kycfame').contentFrame().locator('#FatherName_prefix').selectOption('MR');
  await page1.locator('#kycfame').contentFrame().locator('.ft-input-edit > .group > .col-md-12').first().click();
  await page1.locator('#kycfame').contentFrame().locator('.ft-input-edit > .group > .col-md-12').first().fill('MAHa');
  await page1.locator('#kycfame').contentFrame().locator('#Father_Spouse_relationship').first().selectOption('FATHER');
  await page1.locator('#kycfame').contentFrame().locator('#Place_of_birth').click();
  await page1.locator('#kycfame').contentFrame().locator('#Place_of_birth').fill('CHENNAi');
  await page1.locator('#kycfame').contentFrame().locator('#Residential').check();
  await page1.locator('#kycfame').contentFrame().locator('#cdistrict').click();
  await page1.locator('#kycfame').contentFrame().locator('#cdistrict').fill('CHENNAi');
  await page1.locator('#kycfame').contentFrame().locator('div:nth-child(3) > div:nth-child(3) > .ft-input-edit > .group > .col-md-12').click();
  await page1.locator('#kycfame').contentFrame().locator('div:nth-child(3) > div:nth-child(3) > .ft-input-edit > .group > .col-md-12').fill('600075');
  await page1.locator('#kycfame').contentFrame().locator('div:nth-child(3) > div:nth-child(3) > .ft-input-edit > .group > .col-md-12').press('Tab');
  await page1.locator('#kycfame').contentFrame().locator('select[name="city1"]').selectOption('CHENNAI');
  await page1.locator('#kycfame').contentFrame().locator('#checkcorresSameaspermanent').check();
  await page1.locator('#kycfame').contentFrame().getByRole('button', { name: 'Proceed' }).click();
  await page1.locator('#kycfame').contentFrame().locator('#aadhaarBased').check();
  await page1.locator('#kycfame').contentFrame().getByRole('button', { name: 'Proceed' }).click();
  await page1.locator('[id="occupationForm\\ two"]').click();
  await page1.getByRole('button', { name: 'Proceed' }).click();
  await page1.locator('[id="fatcaPending\\ two"]').click();
  await page1.locator('[id="countryOfCurrentRes\\ two"]').selectOption('IN');
  await page1.locator('[id="countryOfCurrentRes\\ two"]').press('Tab');
  await page1.locator('[id="addressArea\\ two"]').fill('CHENNAi');
  await page1.locator('[id="addressType\\ two"]').selectOption('BUSINESS');
  await page1.getByRole('dialog').locator('form div').filter({ hasText: 'Are you citizen of any other country other than India (dual/multiple)? *YesNo' }).getByRole('radio').nth(1).check();
  await page1.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a Tax Resident of any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
  await page1.getByRole('dialog').locator('form div').filter({ hasText: 'Is your Country of Birth any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
  await page1.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a US Person? *YesNo' }).getByRole('radio').nth(1).check();
  await page1.locator('[id="consentStatus\\ two"]').check();
  await page1.getByRole('button', { name: 'Proceed' }).click();
  await page1.locator('app-investorform').filter({ hasText: 'Second Investor * EACPK9691B' }).getByRole('radio').nth(3).check();
  await page1.locator('[id="onSaveInvestorDetails\\ two"]').click();
  await page1.locator('[id="familyDeclaration\\ two"]').selectOption('ME');
  await page1.locator('[id="onSaveInvestorDetails\\ two"]').click();

  // third Holder

  await page1.getByRole('textbox', { name: 'Enter PAN' }).click();
  await page1.getByRole('textbox', { name: 'Enter PAN' }).fill('GAYK7938b');
  await page1.getByText('arrow_forward').click();
  await page1.getByRole('textbox', { name: 'Enter PAN' }).click();
  await page1.getByRole('textbox', { name: 'Enter PAN' }).fill('GAYPK7938b');
  await page1.getByText('arrow_forward').click();
  await page1.locator('[id="familyDeclaration\\ three"]').selectOption('ME');
  await page1.getByText('Fetch KYC Details').click();
  await page1.locator('#kycfame').contentFrame().locator('[id="mode\\ DOCUMENT"]').check();
  await new Promise(resolve => setTimeout(resolve, 15000));
  //await page1.locator('#kycfame').contentFrame().getByRole('button', { name: 'Upload' }).click();
  await page1.locator('#kycfame').contentFrame().locator('//input[@id="pdfupload"]').setInputFiles('Files/Sample.pdf');
  await page1.locator('#kycfame').contentFrame().getByRole('button', { name: 'Proceed' }).click();
  await page1.locator('#kycfame').contentFrame().getByRole('checkbox', { name: 'I authorise ICICI Bank Ltd.' }).check();
  await page1.locator('#kycfame').contentFrame().getByRole('button', { name: 'Proceed' }).click();
  await new Promise(resolve => setTimeout(resolve, 2000));

  await page1.locator('#kycfame').contentFrame().locator('#Full_name_prefix').first().selectOption('MR');
  await page1.locator('#kycfame').contentFrame().locator('#MMaiden_Name_prefix').selectOption('MS');
  await page1.locator('#kycfame').contentFrame().locator('#FatherName_prefix').selectOption('MRS');
  await page1.locator('#kycfame').contentFrame().locator('.ft-input-edit > .group > .col-md-12').first().click();
  await page1.locator('#kycfame').contentFrame().locator('.ft-input-edit > .group > .col-md-12').first().fill('MAHa');
  await page1.locator('#kycfame').contentFrame().locator('#Father_Spouse_relationship').selectOption('FATHER');
  await page1.locator('#kycfame').contentFrame().locator('#Place_of_birth').click();
  await page1.locator('#kycfame').contentFrame().locator('#Place_of_birth').fill('CHENNAi');
  await page1.locator('#kycfame').contentFrame().locator('#office').first().check();
  await page1.locator('#kycfame').contentFrame().locator('#cdistrict').click();
  await page1.locator('#kycfame').contentFrame().locator('#cdistrict').fill('MUMABAi');
  await page1.locator('#kycfame').contentFrame().locator('#pResidential').nth(2).check();
  await page1.locator('#kycfame').contentFrame().locator('#pdistrict').click();
  await page1.locator('#kycfame').contentFrame().locator('#pdistrict').fill('MUMBAi');
  await page1.locator('#kycfame').contentFrame().getByRole('button', { name: 'Proceed' }).click();
  await page1.locator('[id="occupationForm\\ three"]').click();
  await page1.getByRole('button', { name: 'Proceed' }).click();
  await page1.getByText('Add/Update').click();
  await page1.locator('[id="countryOfCurrentRes\\ three"]').selectOption('IN');
  await page1.locator('[id="countryOfCurrentRes\\ three"]').press('Tab');
  await page1.locator('[id="addressArea\\ three"]').fill('CHENNAi');
  await page1.locator('[id="addressArea\\ three"]').press('Tab');
  await page1.locator('[id="addressType\\ three"]').press('ArrowDown');
  await page1.getByRole('dialog').locator('form div').filter({ hasText: 'Are you citizen of any other country other than India (dual/multiple)? *YesNo' }).getByRole('radio').nth(1).check();
  await page1.getByRole('dialog').locator('form div').filter({ hasText: 'Is your Country of Birth any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
  await page1.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a Tax Resident of any country other than India? *YesNo' }).getByRole('radio').nth(1).check();
  await page1.getByRole('dialog').locator('form div').filter({ hasText: 'Are you a US Person? *YesNo' }).getByRole('radio').nth(1).check();
  await page1.locator('[id="consentStatus\\ three"]').check();
  await page1.getByRole('button', { name: 'Proceed' }).click();
  await page1.locator('app-investorform').filter({ hasText: 'Third Investor * GAYPK7938B' }).getByRole('radio').nth(3).check();
  await page1.getByRole('button', { name: 'Save' }).click();
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
















