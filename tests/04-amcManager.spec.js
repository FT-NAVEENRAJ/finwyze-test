import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage.js";
import OfflineDocumentSection from"../pages/OfflineDocument.js";
let browser;
let page, page2;
let Name="KishoreZ0196";
let generatedEmail = `${Name}@Fintuple.com`;
// MAHARASHTRA
// TELANGANA
test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://custodydigitizationuat.icicibank.com/");
    const loginPage = new LoginPage(page);
    await loginPage.login("Domestic Custody","FTIPRU@FINTUPLE.COM", "Fintuple@1", "a2C4dE");
    const otpEntered = await loginPage.enterOTP("857362");
    if (otpEntered) {
    console.log("OTP entered successfully.");
    } else {
        
    console.log("Failed to enter OTP.");
    }
    await new Promise(resolve => setTimeout(resolve, 3000));
    });

test("TC_01: User should navigate to the External Admin Dashboard successfully", async () => {
        page2 = await Promise.all([
        page.waitForEvent("popup"), 
        page.getByText('View Task').first().click(), 
        ]).then(([newPage]) => newPage);
        await page2.waitForLoadState();
        console.log("Click External Admin Dashboard Page");
    });
// test("TC_02: User should be able to add a single record successfully", async()=>{
//     const addStamp = new OfflineDocumentSection(page2);
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     await addStamp.addSingleUser(Name,"0987","212000",generatedEmail,"9344872104");

// });
// test("TC_03: User status should be Active or Invite Sent after creation",async()=>{
//     const addStamps = new OfflineDocumentSection(page2);
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     await addStamps.userStatus(generatedEmail);
//     await new Promise(resolve => setTimeout(resolve, 2000));
   
// });

// test("TC_04: User should be able to deactivate an active user and validate the success toast message", async () => {
//     await page2.getByRole('searchbox', { name: 'Search' }).click();
//     await page2.keyboard.press('Control+A');
//     await page2.keyboard.press('Backspace');
//     await page2.getByRole('searchbox', { name: 'Search' }).fill('FT.IPRU.AMCSRRM01@FINTUPLE.COM');
//     const active = await page2.locator('//span[@id="Active"][text()="Active"]').textContent();
//     if (active && active.trim() === "Active") {
//         console.log("Status is correctly set to 'Active'.");
//     } else {
//         console.log(`Unexpected status: ${active}`);
//     }
// // Deactivate the user
//     await page2.getByText('Active').click();
//     await page2.locator('#dropdown').click();
//     await page2.getByRole('button', { name: ' Activate / Deactivate' }).click();
//     await page2.locator('#internal_user_comments').fill('DeActivate');
//     await page2.getByRole('button', { name: 'Deactivate' }).click();

//     // 🛠️ Correct: Wait and capture toast properly
//     const deactivateToast = await page2.getByRole('alert').textContent();
//     console.log("Toast Message:", deactivateToast?.trim());
//     await expect(page2.getByRole('alert')).toHaveText('User deactivated Successfully');

//     // Confirm the status has changed to Inactive
//     const inactive = await page2.locator('//span[@id="InActive"][text()="InActive"]').textContent();
//     if (inactive && inactive.trim() === "InActive") {
//         console.log("Status is correctly set to 'InActive'.");
//     } else {
//         console.log(`Unexpected status after deactivation: ${inactive}`);
//     }
// });

// test("TC_05: User should be able to activate an inactive user and validate the success toast message", async () => {
//     await page2.getByRole('searchbox', { name: 'Search' }).click();
//     await page2.keyboard.press('Control+A');
//     await page2.keyboard.press('Backspace');
//     await page2.getByRole('searchbox', { name: 'Search' }).fill('FT.IPRU.AMCSRRM01@FINTUPLE.COM');

//     const inActive = await page2.locator('//span[@id="InActive"][text()="InActive"]').textContent();
//     if (inActive && inActive.trim() === "InActive") {
//         console.log("Status is correctly set to 'InActive'.");
//     } else {
//         console.log(`Unexpected status before activation: ${inActive}`);
//     }

//     // Activate the user
//     await page2.getByText('InActive').click();
//     await page2.locator('#dropdown').click();
//     await page2.getByRole('button', { name: ' Activate / Deactivate' }).click();
//     await page2.locator('#internal_user_comments').fill('Activate');
//     await page2.locator('//button[@id="Approve"]').click();
    
//     // 🛠️ Correct toast capture
//     // const activateToast = await page2.getByRole('alert').textContent();
//     // console.log("Toast Message:", activateToast?.trim());
//     // await expect(page2.getByRole('alert')).toHaveText('User activated Successfully');

//     // // Confirm the status has changed to Active
//     // const active = await page2.locator('//span[@id="Active"][text()="Active"]').textContent();
//     // if (active && active.trim() === "Active") {
//     //     console.log("Status is correctly set to 'Active'.");
//     // } else {
//     //     console.log(`Unexpected status after activation: ${active}`);
//     // }
// });





test("TC_06: User should be able to upload stamp paper using the Offline Document Flow", async({}) =>{
    await new Promise(resolve => setTimeout(resolve, 5000));
    await page2.locator('//button[text()="Offline Documents"]').click();
    

   });

test("TC_07: Uploaded stamp paper should be validated successfully in the Offline Document section", async () => {
    const addStamp = new OfflineDocumentSection(page2);
    await addStamp.stampPaperAddition("5","21-10-2025","MAHARASHTRA","PMS AGREEMENT","700");
    await new Promise(resolve => setTimeout(resolve, 2000));
    await addStamp.stampPaperAddition("5","21-11-2025","MAHARASHTRA","POA","500");
 await new Promise(resolve => setTimeout(resolve, 2000));
    
});



   
 