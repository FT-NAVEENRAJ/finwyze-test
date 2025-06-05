const { Builder, By, Key, until, Select, Actions, WebElement } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const edge = require('selenium-webdriver/edge');
const firefox = require('selenium-webdriver/firefox');
const fs = require('fs');
const path = require('path');
const { setTimeout } = require('timers/promises');

class BaseClass {
    constructor() {
        this.driver = null;
        this.select = null;
        this.actions = null;
        this.pom = new PageObjectManager(); // Assuming you have a PageObjectManager equivalent
    }

    // Browser setup methods
    async getDriver(browserName) {
        switch(browserName.toLowerCase()) {
            case 'chrome':
                this.driver = await new Builder()
                    .forBrowser('chrome')
                    .setChromeOptions(new chrome.Options()
                        .addArguments('--disable-notifications')
                        .addArguments('--start-maximized'))
                    .build();
                break;
            case 'firefox':
                this.driver = await new Builder()
                    .forBrowser('firefox')
                    .build();
                break;
            case 'edge':
                this.driver = await new Builder()
                    .forBrowser('edge')
                    .build();
                break;
            default:
                throw new Error(`Unsupported browser: ${browserName}`);
        }
        
        await this.driver.manage().setTimeouts({ implicit: 15000 });
        await this.driver.manage().window().maximize();
        return this.driver;
    }

    async chromeBrowser() {
        this.driver = await new Builder()
            .forBrowser('chrome')
            .build();
        return this.driver;
    }

    async incognitoModeChrome() {
        this.driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().addArguments('--incognito'))
            .build();
    }

    async firefoxBrowser() {
        this.driver = await new Builder()
            .forBrowser('firefox')
            .build();
        return this.driver;
    }

    async edgeBrowser() {
        this.driver = await new Builder()
            .forBrowser('edge')
            .build();
        return this.driver;
    }

    async incognitoModeEdge() {
        this.driver = await new Builder()
            .forBrowser('edge')
            .setEdgeOptions(new edge.Options().addArguments('--inprivate'))
            .build();
    }

    // Navigation methods
    async browserUrl(url) {
        await this.driver.get(url);
    }

    async refresh() {
        await this.driver.navigate().refresh();
    }

    // Element interaction methods
    async click(element) {
        await element.click();
    }

    async sendKeys(element, data) {
        const isEnabled = await element.isEnabled();
        const isDisplayed = await element.isDisplayed();
        if (isEnabled && isDisplayed && data) {
            await element.sendKeys(data);
        }
    }

    async clearTextBox(element) {
        await element.clear();
    }

    // Select dropdown methods
    async selectByVisibleText(element, text) {
        this.select = new Select(element);
        await this.select.selectByVisibleText(text);
    }

    async selectByValue(element, value) {
        this.select = new Select(element);
        await this.select.selectByValue(value);
    }

    async selectByIndex(element, index) {
        this.select = new Select(element);
        await this.select.selectByIndex(index);
    }

    // Alert methods
    async alertOk() {
        const alert = await this.driver.switchTo().alert();
        await alert.accept();
    }

    async alertCancel() {
        const alert = await this.driver.switchTo().alert();
        await alert.dismiss();
    }

    // Window methods
    async closeAllWindows() {
        await this.driver.quit();
    }

    async closeCurrentWindow() {
        await this.driver.close();
    }

    async maximizeWindow() {
        await this.driver.manage().window().maximize();
    }

    async deleteAllCookies() {
        await this.driver.manage().deleteAllCookies();
    }

    // Getter methods
    async getText(element) {
        return await element.getText();
    }

    async getTitle() {
        return await this.driver.getTitle();
    }

    async getAttribute(element, attribute) {
        return await element.getAttribute(attribute);
    }

    async getCurrentUrl() {
        return await this.driver.getCurrentUrl();
    }

    // JavaScript executor methods
    async insertValueUsingJs(element, data) {
        await this.driver.executeScript(`arguments[0].setAttribute('value', '${data}')`, element);
    }

    async clickButtonUsingJs(element) {
        await this.driver.executeScript('arguments[0].click()', element);
    }

    // Window and frame handling
    async windowsHandling() {
        const handles = await this.driver.getAllWindowHandles();
        for (const handle of handles) {
            await this.driver.switchTo().window(handle);
        }
    }

    async frameById(id) {
        await this.driver.switchTo().frame(id);
    }

    async frameByIndex(index) {
        await this.driver.switchTo().frame(index);
    }

    // Locator methods
    async locatorById(id) {
        return await this.driver.findElement(By.id(id));
    }

    async locatorByName(name) {
        return await this.driver.findElement(By.name(name));
    }

    async locatorByClassName(className) {
        return await this.driver.findElement(By.className(className));
    }

    async locatorByXpath(xpath) {
        return await this.driver.findElement(By.xpath(xpath));
    }

    async locatorsByXpath(xpath) {
        return await this.driver.findElements(By.xpath(xpath));
    }

    // Dropdown methods
    async dropDownVisibleText(element) {
        this.select = new Select(element);
        const options = await this.select.getOptions();
        const allOptions = [];
        for (const option of options) {
            allOptions.push(await option.getText());
        }
        return allOptions;
    }

    // Wait methods
    async implicitWait(time) {
        await this.driver.manage().setTimeouts({ implicit: time * 1000 });
    }

    async explicitWaitForVisibility(sec, element) {
        await this.driver.wait(until.elementIsVisible(element), sec * 1000);
    }

    async fluentWaitForElement(element, timeout = 60, pollInterval = 500) {
        try {
            await this.driver.wait(async () => {
                try {
                    return await element.isDisplayed() && await element.isEnabled();
                } catch (err) {
                    return false;
                }
            }, timeout * 1000, 'Element not found', pollInterval);
        } catch (err) {
            console.log(err);
        }
        return element;
    }

    // Action methods
    async mouseOverAction(element) {
        this.actions = this.driver.actions({ bridge: true });
        await this.actions.move({ origin: element }).perform();
    }

    async dragAndDrop(source, dest) {
        this.actions = this.driver.actions({ bridge: true });
        await this.actions.dragAndDrop(source, dest).perform();
    }

    async rightClick(element) {
        this.actions = this.driver.actions({ bridge: true });
        await this.actions.contextClick(element).perform();
    }

    async doubleClick(element) {
        this.actions = this.driver.actions({ bridge: true });
        await this.actions.doubleClick(element).perform();
    }

    async pageDown() {
        this.actions = this.driver.actions({ bridge: true });
        await this.actions.sendKeys(Key.PAGE_DOWN).perform();
    }

    // Screenshot methods
    async takeScreenshot(fileName) {
        const image = await this.driver.takeScreenshot();
        const dir = path.join(process.cwd(), 'screenshots');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        fs.writeFileSync(path.join(dir, `${fileName}.png`), image, 'base64');
    }

    async screenshotForElement(element, fileName) {
        const image = await element.takeScreenshot();
        const dir = path.join(process.cwd(), 'screenshots');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        fs.writeFileSync(path.join(dir, `${fileName}.png`), image, 'base64');
    }

    // File upload methods
    async uploadImage(filePath) {
        const element = await this.driver.findElement(By.xpath("//input[@type='file']"));
        await element.sendKeys(filePath);
    }

    async pdfFileUpload() {
        const fileInput = await this.driver.findElement(By.xpath("//input[@accept='.pdf']"));
        const filePath = path.join(process.cwd(), 'Documents', 'dummy.pdf');
        await fileInput.sendKeys(filePath);
    }

    // Utility methods
    getProjectPath() {
        return process.cwd();
    }

    // Scroll methods
    async javaScriptScroll(pixels) {
        await this.driver.executeScript(`window.scrollBy(0, ${pixels})`);
    }

    // UAT login methods
    async uatLoginOTP() {
        const enterOTP = await this.driver.findElement(By.xpath("//input[@id='otpVerifyField']"));
        await enterOTP.sendKeys("857362");
        return enterOTP;
    }

    async uatOtpSubmit() {
        const clickUatOtpSubmit = await this.driver.findElement(By.xpath("(//input[@type='submit'])[2]"));
        await clickUatOtpSubmit.click();
        return clickUatOtpSubmit;
    }

  // Navigate to URL
  async navigate(url) {
    await this.page.goto(url, { waitUntil: 'load' });
  }

  // Get Page Title
  async getPageTitle() {
    return await this.page.title();
  }

  // Get current URL
  async getCurrentUrl() {
    return this.page.url();
  }

  // Click element
  async click(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  // Type into field
  async type(locator, text, options = {}) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill('');
    await locator.type(text, options);
  }

  // Clear and type
  async clearAndType(locator, text) {
    await locator.fill('');
    await locator.type(text);
  }

  // Select from dropdown
  async selectDropdown(locator, value) {
    await locator.waitFor({ state: 'visible' });
    await locator.selectOption(value);
  }

  // Wait for timeout
  async waitForSeconds(seconds) {
    await this.page.waitForTimeout(seconds * 1000);
  }

  // Check if element is visible
  async isVisible(locator) {
    return await locator.isVisible();
  }

  // Wait for locator to be enabled
  async waitForEnabled(locator) {
    await locator.waitFor({ state: 'enabled' });
  }

  // Wait for locator to be hidden
  async waitForHidden(locator) {
    await locator.waitFor({ state: 'hidden' });
  }

  // Take screenshot
  async takeScreenshot(name = 'screenshot') {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }

  // Scroll into view
  async scrollToElement(locator) {
    await locator.scrollIntoViewIfNeeded();
  }

  // Hover
  async hover(locator) {
    await locator.hover();
  }

  // Press key
  async pressKey(locator, key) {
    await locator.press(key);
  }

  // Assert text content
  async expectText(locator, expectedText) {
    const actual = await locator.textContent();
    if (!actual.includes(expectedText)) {
      throw new Error(`Expected "${expectedText}", but got "${actual}"`);
    }
  }
}
