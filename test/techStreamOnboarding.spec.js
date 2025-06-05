const { test, expect, chromium } = require('@playwright/test');
const fs = require('fs');
const xlsx = require('xlsx');

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async getExcelValues(sheetName, row, col) {
        const workbook = xlsx.readFile('.\Excel\Tech Stream Data_Automation.xlsx');
        const sheet = workbook.Sheets[sheetName];
        const cellAddress = xlsx.utils.encode_cell({ r: row, c: col });
        return sheet[cellAddress]?.v;
    }

    async uatLoginOTP() {
        // Simulate waiting for OTP or fetching from DB
        await this.page.waitForTimeout(2000);
    }

    async uatOtpSubmit() {
        // Click the OTP submit button
        await this.page.locator('button:has-text("Submit OTP")').click();
    }

    async loginAMCHandler() {
        await this.page.goto('https://cd-r3.finwyze.com/');
        await this.page.context().clearCookies();
        await this.page.setViewportSize({ width: 1280, height: 1024 });

        const email = await this.getExcelValues("Credentials", 1, 0);
        const captcha = await this.getExcelValues("Credentials", 1, 1);
        const password = await this.getExcelValues("Credentials", 1, 2);

        await this.page.locator('select[name="selectCustody"]').selectOption({ index: 1 });
        await this.page.locator('input[name="enterEmailAddress"]').fill(email);
        await this.page.locator('input[name="enterCaptcha"]').fill(captcha);
        await this.page.locator('input[name="enterPassword"]').fill(password);
        await this.page.locator('button:has-text("Verify")').click();

        await this.uatLoginOTP();
        await this.uatOtpSubmit();

        await this.page.locator('a:has-text("View Task AMC Handler")').click();

        const pages = this.page.context().pages();
        this.page = pages[pages.length - 1];
    }
}

test('TC_01: Login with Valid Credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.loginAMCHandler();

    // Add assertions here if needed
    await expect(page).toHaveURL(/.*dashboard.*/);
});
