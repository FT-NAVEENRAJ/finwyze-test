import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage.js";
import AMCReviewer  from "../pages/amcReviewer.js";
import { globalData } from '../pages/global-data.js';

let page,page2;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://cd-r3.finwyze.com/");
    const loginPage = new LoginPage(page);
    await loginPage.login("Domestic Custody","FT.IPRU.AMCREVIEWER01@FINTUPLE.COM", "Fintuple@1", "a2C4dE");
    await loginPage.enterOTP("857362");
    await new Promise(resolve => setTimeout(resolve, 3000));
    });
test("TC_01: Login to iCACE AMC Reviewer with valid credentials", async () => {
    page2 = await Promise.all([
        page.waitForEvent("popup"), 
        page.getByText('View Task').first().click(), 
        ]).then(([newPage]) => newPage);
        await page2.waitForLoadState();
    });
test("TC_02: To click the View Task page for AMC Reviewer page", async()=>{

      await new Promise(resolve => setTimeout(resolve, 3000));
      if (!globalData.applicationId) {
        throw new Error("applicationId is not set in globalData");
      }
      await page2.locator('//input[@id="search"]').fill(globalData.applicationId);
});
test("TC_03: To review all PDF documents and verify the AML check is successful, then approve the task", async()=>{
 
    const reviewer = new AMCReviewer(page2);
    await reviewer.amcManagerApprove();
    await new Promise(resolve => setTimeout(resolve, 3000));

});