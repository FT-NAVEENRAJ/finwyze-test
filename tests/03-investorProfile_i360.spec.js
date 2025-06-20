import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage.js";
import InvestorProfile from "../pages/addInvestorBasicDetails.js";
import OccupationPage from "../pages/occupation.js";
import NomineeDetails from "../pages/nominee.js";
import BankAccountDetails from "../pages/bankAccount.js";
import DocumentUpload from "../pages/document.js";


let page, page2;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://cd-r3.finwyze.com/");
    const loginPage = new LoginPage(page);
    await loginPage.login("Domestic Custody","FT.IPRU.AMCRM02@FINTUPLE.COM", "Fintuple@1", "a2C4dE");
    await loginPage.enterOTP("857362");
    await new Promise(resolve => setTimeout(resolve, 3000));
    });
test("TC_01: Login to iCACE Application with valid credentials. @sanity", async () => {
    console.log("Login as successfully Completed");
    });
test("TC_02: Navigate to the Investor Profile Dashboard Page.@sanity", async () => {
    page2 = await Promise.all([
    page.waitForEvent("popup"), 
    page.getByText('View Investors').click(), 
    ]).then(([newPage]) => newPage);
    await page2.waitForLoadState();
    console.log("Investor Profile navigated successfully");
    });
test("TC_03: Add Investor Basic Details (Name, DOB, Email,Mobile Number). @sanity", async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page2.locator('button:has-text("Add Investor")').waitFor();
    const addInvestorButton = page2.getByRole('button', { name: 'Add Investor' });
    await expect(addInvestorButton).toBeVisible();
    await addInvestorButton.click();
    await expect(page2.locator("//div[contains(@class, 'modal-content')]")).toBeVisible()
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page2.locator("//div[contains(@class, 'modal-content')]").waitFor();
    await page2.getByRole('textbox', { name: 'PAN' }).click();
    const basicDetails = new InvestorProfile(page2);
    await basicDetails.investorBasicDetails("DVIPZ1590A", "21-05-2002", "Testing", "Name", "9233458798", "Manan@gmail.com");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Investor Details Saved Successfully")
    });
test("TC_04: Complete KYC Details @sanity", async() =>{
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page2.getByRole('button', { name: 'Next' }).click();
    console.log("KYC Details complete Sucessfully");
    await new Promise(resolve => setTimeout(resolve, 2000))
    });
test("TC_05: Add Occupation, Education & Income Details. @sanity", async() =>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    const occupation = new OccupationPage(page2);
    await occupation.occupationDetails("21-06-2024","50000000","05-03-2025", "MUTUAL INVESTMENT PLATFORM", "NOTHING","3");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Occupation Details saved successfully")

    });
test("TC_06: Add Nominee Details (Nominee name, relationship, percentage share).@sanity", async() => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const nominee = new NomineeDetails(page2);
    await nominee.addNominee("Pathiban","Srinivasan","05-04-1999","Srinagar Colony","Balaji Apartment","600012","9080237654","parthisri0504@gmail.com","4342");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Nominee Details saved Successfully")
    });
test("TC_07: Add Bank Account Details (Account number, IFSC, Bank name).@sanity", async()=>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    const addAccount = new BankAccountDetails(page2);
    await addAccount.addBankDetails("39088765476","SBIN0007494","635002020","STATE BANK OF INDIA","Rmy Pochampalli");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Bank Account Details saved Successfully")

    });
test("TC_08: Upload Required Documents (PAN, Aadhaar, etc.).@sanity", async() =>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const docUpload = new DocumentUpload(page2);
    await docUpload.uploadDocument("doc21041");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Document saved Successfully")

    });




