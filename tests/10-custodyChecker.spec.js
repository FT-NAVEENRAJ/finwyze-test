import { test, expect } from '@playwright/test';
import LAM_LoginPage from "../pages/lamlogin.js";
import { globalData } from '../pages/global-data.js';
import CustodyMaker  from '../pages/custodyMaker.js';


let page, page2;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    page = await context.newPage();
    const lamMaker = new LAM_LoginPage(page);
    await page.goto('https://cdi-r3.finwyze.com');
    await lamMaker.loginLamMaker(' ');
    
  });
  test("TC_01: Login to iCACE Custody Checker with valid credentials", async () => {
      page2 = await Promise.all([
          page.waitForEvent("popup"), 
          page.getByText('View Task').first().click(), 
          ]).then(([newPage]) => newPage);
          await page2.waitForLoadState();
      });
  test("TC_02: To click the View Task page for Custody Application Management ", async()=>{

    await page2.locator('(//a[@id="taskNo"])[1]').click();
  
        // await new Promise(resolve => setTimeout(resolve, 3000));
        // if (!globalData.applicationId) {
        //   throw new Error("applicationId is not set in globalData");
        // }
        // await page2.locator('//input[@id="search"]').fill(globalData.applicationId);
  });
  test("TC_03: To review all PDF documents and verify the AML check is successful, then approve the task", async()=>{
   
      const Maker = new CustodyMaker(page2);
      await Maker.custodyChekerApprove();
      await new Promise(resolve => setTimeout(resolve, 3000));
  
  });