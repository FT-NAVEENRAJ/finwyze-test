// loadTest.spec.js
import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage.js";

test.describe.parallel("Load Testing - 100 Users", () => {
  // create 100 users (100 test cases)
  for (let i = 1; i <= 25; i++) {
    test(`Virtual User ${i}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await page.goto("https://custodydigitizationuat.icicibank.com/");

      await loginPage.login(
        "Domestic Custody",
        "FTASK@FINTUPLE.COM",
        "Fintuple@1",
        "a2C4dE"
      );

      const otpEntered = await loginPage.enterOTP("857362");
      //expect(otpEntered).toBeTruthy();

      // verify dashboard
      //await expect(page.locator("#dashboard")).toBeVisible();
    });
  }
});
