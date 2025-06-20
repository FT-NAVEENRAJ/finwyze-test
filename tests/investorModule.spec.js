import { test, expect, chromium } from '@playwright/test'
import InvstorModule from '../pages/investorModule';
import { globalData } from '../pages/global-data.js';


let page;

test.beforeAll(async ({browser}) => {
    const context = await browser.newContext('',{
    headless: false,
    permissions: ['geolocation', 'microphone', 'camera'],
    geolocation: { latitude: 12.9716, longitude: 77.5946 },
    locale: 'en-US',
  });

  await context.grantPermissions(
    ['geolocation', 'microphone', 'camera'],
    { origin: 'https://cd-r3.finwyze.com' }
  );

  page = await context.newPage();
  await page.goto('https://cd-r3.finwyze.com/holder/');
});

test('TC_01: Verify user is navigated to Holder page', async () => {
  await expect(page).toHaveURL(/holder/); 
});
test('TC_02: User logs in with valid credentials', async () => {
    const im = new InvstorModule(page);
    await im.investoroduleLogin("curpa1355D","21-08-1995");
  });
test('TC_03: User enters valid 6-digit OTP and submits', async () => {
    const investor = new InvstorModule(page);
    await investor.sendOTPInvestorModule();
  });

test("TC_04: To Search the application ID for Investor Module page", async()=>{

      await new Promise(resolve => setTimeout(resolve, 3000));
      // if (!globalData.applicationId) {
      //   throw new Error("applicationId is not set in globalData");
      // }
      //await page.locator('//input[@id="search"]').fill(globalData.applicationId);
      await page.locator('//input[@id="search"]').fill("DINPMS250425001");

});

test("TC_05: To Click the Application to complete the Investor Module section", async()=>{
 
    await page.locator('//a[@id="applicationId"]').click();
    await new Promise(resolve => setTimeout(resolve, 10000));

});

test('TC_06: To Validate Investment Selection on Confirmation of Scheme', async () => {
  const Investors = new InvstorModule(page);
  await Investors.investmentSelection();
  
});
test('TC_07: To Verify Confirmation of Additional Details', async () => {
  const investorM = new InvstorModule(page);
  await investorM.proceedAdditionalDetails.click();
  
});



  
 
