import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['Pixel 7'] }); 
let page;
test('Launch mobile browser and open URL', async ({ page }) => {
    await page.goto('https://cd-r3.finwyze.com');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.locator("#custody").selectOption("Domestic Custody");
    await page.getByPlaceholder("Enter your Email Address").fill("FT.IPRU.AMCRM02@FINTUPLE.COM");
    await page.getByPlaceholder("Enter the Captcha Displayed Above").fill("a2C4dE");
    await page.getByLabel("Password").fill("Fintuple@1");
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.getByRole("button", { type: "submit" }).click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.locator("#otpVerifyField").fill("857362");
    await page.getByRole("button", { name: "submit" }).click();
    await new Promise(resolve => setTimeout(resolve, 10000));

});
hai 