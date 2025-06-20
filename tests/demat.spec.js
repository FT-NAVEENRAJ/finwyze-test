import{test,expect} from '@playwright/test';

let browser;
let page, page2;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://cd-r3.finwyze.com");
    await page.locator('id=custody').selectOption('Domestic Custody');
    await page.locator('#username').click();
    await page.locator('#username').fill("ft.ipru.amcrm02@fintuple.com");
    await page.locator('id=captcha').fill('a2C4dE');
    await page.locator('id=password').fill('Fintuple@1');
    await page.locator('//input[@value="Verify"]').click();
    await page.locator('//input[@name="otpVerifyField"]').fill('857362');
    await page.locator('//input[@value="Submit"]').click();
});

     test("TC_01: User should Click the Demat Closure Application", async () => {
        page2 = await Promise.all([
        page.waitForEvent("popup"), 
        page.locator('(//a[text()="Create New Application"])[2]').click(), 
        ]).then(([newPage]) => newPage);
        await page2.waitForLoadState();
        console.log("Click External Admin Dashboard Page");
        await expect(page).toHaveURL('https://cd-r3.finwyze.com/');
        const title=await page2.title()
        console.log("title of the page ",title);
        await expect(page2).toHaveTitle("My Investors Profile");
    });



    test("TC_02: User should complete the New Application Popup section", async () => {

        await page2.locator('//button[text()="New Application"]').click();
        test.setTimeout(40000);
        await page2.check('(//input[@value="NO"])[1]');
        await page2.click('//button[@id="Proceed"]');

    });

    test("TC_03: Verify the details are fetched after entering PAN", async () => {

        await page2.locator('//input[@placeholder="Enter PAN"]').fill('caspb5084m');
        await page2.click('//span[text()="arrow_forward"]');
        await page2.click('//a[text()="Add/Update"]');
        await page2.getByRole('textbox').first().fill('12345678');
        await page2.getByRole('textbox').nth(1).fill('12345678');
        await page2.getByRole('textbox').nth(2).fill('NOTHING');
        await page2.locator('#optionA').check();
        await page2.getByRole('button', { name: 'Proceed' }).click();
        await page2.getByRole('checkbox', { name: 'I request you therefore to' }).check();
        await page2.getByRole('button', { name: 'Proceed' }).click();
    });

    test("TC_04: Select the documents required to complete the application", async () => {

        await page2.getByText('add').click();
        await page2.getByRole('rowheader', { name: 'PAN' }).locator('#isSelected').check();
        await page2.getByRole('row', { name: 'Specimen Signature' }).locator('#isSelected').check();
        await page2.getByRole('button', { name: 'Save' }).click();
        await page2.getByRole('button', { name: 'Proceed' }).click();
        await new Promise(resolve => setTimeout(resolve, 50000));
    });
 
