/**
 * =========================================
 * Imports
 * =========================================
 */
import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage.js";
import ApplicationBasicInformationPopup from "../pages/newApplicationPopup.js";
import InvestorDetails from "../pages/investorProfile.js";
import NomineeDetails from "../pages/nominee.js";
import BankAccountDetails from "../pages/bankAccount.js";
import SchemeFeeDetails from "../pages/schemeandFeeDetails.js";
import AdditionalDetails from "../pages/additionalDetails.js";
import DocumentUpload from "../pages/document.js";
import { globalData } from "../pages/global-data.js";
import AMCReviewer from "../pages/amcReviewer.js";

/**
 * =========================================
 * Global Variables
 * =========================================
 */
let page, page2;

/**
 * =========================================
 * Utilities
 * =========================================
 */
async function wait(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * =========================================
 * Login Flows
 * =========================================
 */

// AMC RM Login Flow
async function loginFlow(page, env) {
  let url, username, password;
  if (env.toLowerCase() === "dev") {
    url = "https://cd-r3.finwyze.com/";
    username = "FT.IPRU.AMCRM01@FINTUPLE.com";
    password = "Finwyze@1";
  } else if (env.toLowerCase() === "uat") {
    url = "https://custodydigitizationuat.icicibank.com/";
    username = "FT.IPRU.AMCRM01@FINTUPLE.com";
    password = "Fintuple@2";
  } else {
    throw new Error("Invalid environment. Choose 'dev' or 'uat'");
  }

  await page.goto(url);
  const loginPage = new LoginPage(page);
  await loginPage.login("Domestic Custody", username, password, "a2C4dE");

  if (env.toLowerCase() === "uat") {
    await loginPage.enterOTP("857362");
  }

  await page.waitForTimeout(3000);
  console.log(`Logged in successfully to ${env.toUpperCase()} environment`);
}

// AMC Reviewer Login Flow
async function reviewerLoginFlow(page, env) {
  let url, username, password;
  if (env.toLowerCase() === "dev") {
    url = "https://cd-r5.finwyze.com/";
  } else if (env.toLowerCase() === "uat") {
    url = "https://custodydigitizationuat.icicibank.com/";
  } else {
    throw new Error("Invalid environment. Choose 'dev' or 'uat'");
  }

  username = "FT.IPRU.AMCREVIEWER01@FINTUPLE.COM";
  password = "Fintuple@1";

  await page.goto(url);
  const loginPage = new LoginPage(page);
  await loginPage.login("Domestic Custody", username, password, "a2C4dE");

  if (env.toLowerCase() === "uat") {
    await loginPage.enterOTP("857362");
  }

  await page.waitForTimeout(3000);
  console.log(`Reviewer logged in successfully to ${env.toUpperCase()} environment`);
}

/**
 * =========================================
 * Application RM Flow
 * =========================================
 */
test.describe("Application RM Flow", () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();

    const environment = process.env.TEST_ENV || "uat"; // default to dev
    await loginFlow(page, environment);
  });

  test("TC_01: Login iCACE Application", async () => {
    console.log("[INFO] Login completed successfully.");
  });

  test("TC_02: Navigate to Investor Profile Dashboard Page", async () => {
    page2 = await Promise.all([
      page.waitForEvent("popup"),
      page.locator('(//a[text()="Create New Application"])[1]').click(),
    ]).then(([newPage]) => newPage);

    await page2.waitForLoadState();
    console.log("[INFO] Navigated to Domestic Custody Application successfully.");
  });

  test("TC_03: Complete Basic Application Information", async () => {
    const basicInformation = new ApplicationBasicInformationPopup(page2);
    try {
      await wait(3000);
      await basicInformation.applicationBasicInformationPopup("1", "UAT");
      console.log("[INFO] Application Basic Details saved successfully.");
    } catch (error) {
      console.error("[ERROR] Failed to complete Application Basic Information:", error);
      throw error;
    }
  });

  test("TC_04: Verify details fetched after entering PAN", async () => {
    const investorDetails = new InvestorDetails(page2);
    await wait(2000);
    await investorDetails.investorProfileFirstHolder("CASPB5084M");
    console.log("[INFO] PAN details fetched successfully.");
  });

  test("TC_05: Verify 'Fetch KYC Details' flow", async () => {
    await wait(15000);

    const kycFrame = await page2.locator("#kycfame").contentFrame();
    await expect(kycFrame).not.toBeNull();

    await kycFrame.locator('(//input[@ng-reflect-name="mode"])[1]').check();
    await kycFrame.locator("#pdfupload").setInputFiles("Files/Sample.pdf");
    await kycFrame.getByRole("button", { name: "Proceed" }).click();
    await kycFrame.getByRole("checkbox", { name: "I authorise ICICI Bank Ltd." }).check();
    await kycFrame.getByRole("button", { name: "Proceed" }).click();

    const dialogFrame = await page2.getByRole("dialog").locator("iframe").contentFrame();
    await dialogFrame.locator("path").click();
    await dialogFrame.getByRole("button", { name: "Yes" }).click();

    await dialogFrame.locator("#Full_name_prefix").first().selectOption("MR");
    await dialogFrame.locator("#MMaiden_Name_prefix").selectOption("MS");
    await dialogFrame.locator(".ft-input-edit > .group > .col-md-12").first().fill("MAHa");
    await dialogFrame.locator("#FatherName_prefix").selectOption("MR");
    await dialogFrame.locator("#Father_Spouse_relationship").first().selectOption("FATHER");
    await dialogFrame.locator("#Place_of_birth").fill("CHENNAI");
    await dialogFrame.locator("#Residential").check();
    await dialogFrame.locator("#cdistrict").fill("MUMBAI");
    await dialogFrame.locator("#cdistrict").press("Tab");
    await dialogFrame.locator("#checkcorresSameaspermanent").check();
    await dialogFrame.getByRole("button", { name: "Proceed" }).click();
    // await dialogFrame.locator("#aadhaarBased").check();
    // await dialogFrame.getByRole("button", { name: "Proceed" }).click();

    console.log("[INFO] KYC Details submitted successfully.");
  });

  test("TC_06: Verify Occupation Details Form", async () => {
    await wait(2000);
    await page2.locator('[id="occupationForm\\ one"]').click();
    await page2.getByRole("button", { name: "Proceed" }).click();
    console.log("[INFO] Occupation details verified.");
  });

  test("TC_07: Verify FATCA Details Form", async () => {
    const fatcaButton = page2.locator('[id="fatcaPending one"]');
    await expect(fatcaButton).toBeVisible({ timeout: 10000 });
    await fatcaButton.click();

    const countryDropdown = page2.locator('[id="countryOfCurrentRes one"]');
    await expect(countryDropdown).toBeVisible({ timeout: 10000 });
    await countryDropdown.selectOption("India");

    await page2.locator('[id="addressArea\\ one"]').fill("CHENNAI");
    await page2.locator('//select[@id="addressType one"]').selectOption("REGISTEREDOFFICE");

    const dialog = page2.getByRole("dialog");
    await dialog.locator('form div').filter({ hasText: "Are you citizen of any other country other than India" }).getByRole("radio").nth(1).check();
    await dialog.locator('form div').filter({ hasText: "Is your Country of Birth any country other than India?" }).getByRole("radio").nth(1).check();
    await dialog.locator('form div').filter({ hasText: "Are you a Tax Resident of any country other than India?" }).getByRole("radio").nth(1).check();
    await dialog.locator('form div').filter({ hasText: "Are you a US Person?" }).getByRole("radio").nth(1).check();

    await page2.locator('[id="consentStatus\\ one"]').check();
    await dialog.getByRole("button", { name: "Proceed" }).click();
    console.log("FATCA details submitted successfully.");
  });

  test("TC_08: Complete Investor Details Section", async () => {
    await wait(2000);
    await page2.locator("app-investorform").getByRole("radio").nth(3).check();
    await page2.getByRole("button", { name: "Save" }).click();
    await page2.locator('//input[@id="consented"]').check();
    await page2.getByRole("button", { name: "Proceed" }).click();
    console.log("[INFO] Investor details completed successfully.");
  });

  test("TC_09: Select Nominee(s)", async () => {
    const nominee = new NomineeDetails(page2);
    await nominee.nomineeProceed();
    console.log("[INFO] Nominee selection completed.");
  });

  test("TC_11: Select Bank Account Details", async () => {
    const addAccount = new BankAccountDetails(page2);
     await addAccount.addBankDetails("39088765476","SBIN0007494","STATE BANK OF INDIA","Rmy Pochampalli");
    //await addAccount.selectBankAccountDetails();
    console.log("[INFO] Bank account details selected.");
  });

  test("TC_12: Select Schemes and Fee Details", async () => {
    const scheme = new SchemeFeeDetails(page2);
    await scheme.selectSchemeandFeeDetails("10000000");
    console.log("[INFO] Scheme & Fee details saved successfully.");
  });

  test("TC_13: Complete Risk Profile Questions", async () => {
    const limit = new AdditionalDetails(page2);
    await limit.addRiskQuestion();
    console.log("[INFO] Risk profile questions completed.");
  });

  test("TC_14: Verify Disclosure of Interest & Exclusions", async () => {
    const limit = new AdditionalDetails(page2);
    await limit.disclosure();
    console.log("[INFO] Disclosure completed.");
  });

  test("TC_15: Complete Additional Details", async () => {
    const limit = new AdditionalDetails(page2);
    await limit.proceedLimitsandSecurities();
    console.log("[INFO] Additional details completed.");
  });

  test("TC_16: Upload Required Documents", async () => {
    const docUpload = new DocumentUpload(page2);
    await docUpload.documentUpload();
    console.log("[INFO] Document upload completed.");
  });

  test("TC_17: Verify Application Summary Page", async () => {
    await wait(50000);

    const applicationId = await page2.locator('(//a[@class="link"])[1]').textContent();
    globalData.applicationId = applicationId?.trim();

    expect(globalData.applicationId).toBeTruthy();
    console.log("[INFO] Application ID captured:", globalData.applicationId);
  });
});

/**
 * =========================================
 * AMC Reviewer Flow
 * =========================================
 */
test.describe("AMC Reviewer Flow", () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();

    const environment = process.env.TEST_ENV || "uat";
    await reviewerLoginFlow(page, environment);
  });

  test("TC_01: Login to iCACE AMC Reviewer", async () => {
    page2 = await Promise.all([
      page.waitForEvent("popup"),
      page.getByText("View Task").first().click(),
    ]).then(([newPage]) => newPage);

    await page2.waitForLoadState();
    console.log("[INFO] AMC Reviewer logged in successfully.");
  });

  test("TC_02: Search application in Reviewer Page", async () => {
    await wait(10000);
    expect(globalData.applicationId).toBeTruthy();

    await page2.locator('//input[@id="search"]').fill(globalData.applicationId);
    console.log("[INFO] Application searched:", globalData.applicationId);
  });

  test("TC_03: Review PDF documents & Approve Task", async () => {
    const reviewer = new AMCReviewer(page2);
    await reviewer.amcManagerApprove();
    console.log("[INFO] AMC Reviewer approval completed.");
  });
});
