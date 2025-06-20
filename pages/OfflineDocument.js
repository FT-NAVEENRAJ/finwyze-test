import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(customParseFormat);



export default class OfflineDocumentSection {
    constructor(page) {
        this.page = page;
        this.clickOfflineDocument = page.locator('//button[text()="Offline Documents"]');
        this.clickSingleRecord = page.locator('//button[contains(text(),"Add Single Record")]');
        this.clickUploadButton = page.locator('//a[text()="Upload Document"]');
        this.enterExpiryDate = page.locator('//input[@id="expiryDate"]');
        this.selectPurpose = page.locator('//select[@formcontrolname="purpose"]');
        this.enterStampPaperSerielNo = page.locator('//input[@id="serialNo"]');
        this.enterDenomination = page.locator('//input[@id="denomination"]');
        this.clickHyperlinkUploadButton = page.locator('//a[contains(text(),"Upload Document")]');
        this.clickSaveButton = page.locator('//button[contains(text(),"Save")]');
        // Add New User in single record

        this.clickAddSingleUser = page.locator('//button[@id="add"][text()="Add Single User"]');
        this.enterFullName = page.locator('//input[@id="fullName"]');
        this.enterEmployeeId = page.locator('//input[@id="employeeId"]');
        this.enterNISMNumber = page.locator('//input[@id="nismNumber"]');
        this.enterEmailAddress = page.locator('//input[@id="emailAddress"]');
        this.enterMobileNumber = page.locator('//input[@id="mobileNumber"]');
        this.enterLocation = page.locator('//input[@id="location"]');
        this.clickApplictaionAccess = page.locator('#applications').getByRole('textbox');
        this.selectApplictaionAccess = page.getByText('DEMAT+PMS');
        this.clickUserRoles = page.locator('#roles').getByRole('textbox');
        this.selectUserRoles =  page.getByText('AMC SERVICE RM');
        this.clickSaveButtonAddSingleUser = page.getByRole('button', { name: 'Save' });
        this.globalSearch = page.getByRole('searchbox', { name: 'Search' });
        this.checkStatus = page.locator('//span[text()="Invite Sent"]');

        
    }

    async addSingleUser(Name,empId,NISM,email,mobileNumber){
        await this.clickAddSingleUser.click();
        await this.enterFullName.fill(Name);
        await this.enterEmployeeId.fill(empId);
        await this.enterNISMNumber.fill(NISM);
        await this.enterEmailAddress.fill(email);
        await this.enterMobileNumber.fill(mobileNumber);
        await this.enterLocation.fill("CHENNAI");
        await this.clickApplictaionAccess.click();
        await this.selectApplictaionAccess.click();
        await this.clickUserRoles.click();
      //  await new Promise(resolve => setTimeout(resolve, 20000));
        await this.selectUserRoles.click();
        //await this.selectUserRoles.click();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.clickSaveButtonAddSingleUser.click(); 
        //span[@id="InActive"][text()="InActive"]

        // //span[@id="Active"][text()="Active"] 
        //span[@id="InActive"][text()="InActive"]

    }
    async userStatus(textInput){
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.globalSearch.fill(textInput);
        const status = await this.checkStatus.textContent();
        if (status && status.trim() === "Invite Sent") {
            console.log("Status is correctly set to 'Invite Sent'.");
        } else {
            console.log(`Unexpected status: ${status}`);
        }
    }

    async stampPaper(expirationDate, jurisdiction, purpose, denomination, count,serialNo) {
        for (let i = 1; i <= count; i++) {
            await this.clickSingleRecord.click();
            await this.enterExpiryDate.fill(expirationDate);
            await this.enterDenomination.fill(denomination);
           
            // Selecting jurisdiction and purpose (Assuming they are dropdowns)
            await this.selectJurisdiction(jurisdiction);
            await this.enterStampPaperSerielNo.fill(serialNo);

            await this.selectPurpose.selectOption({ label: purpose });
            await this.clickUploadButton.click();
            await this.page.locator('(//input[@type="file"])[2]').setInputFiles('Files/StampPaper.pdf');
            await new Promise(resolve => setTimeout(resolve, 2000));
            await this.page.locator('//button[text()="Upload"]').click();
            await new Promise(resolve => setTimeout(resolve, 2000));
            await this.page.locator('//button[text()="Save"]').click();
            await new Promise(resolve => setTimeout(resolve, 3000));

           
         }
    }

    async selectJurisdiction(jurisdiction) {
        await this.page.locator('//select[@id="jurisdiction"]').selectOption({ label: jurisdiction });
    }


    async stampPaperAddition(count, expirationDate, jurisdiction, purpose, denomination) {
        for (let i = 1; i <= count; i++) {
          await this.clickSingleRecord.click();
          await this.enterExpiryDate.fill(expirationDate);
          await this.page.waitForTimeout(500);
          await this.selectJurisdiction(jurisdiction);
          await this.page.waitForTimeout(500);
          await this.selectPurpose.selectOption({ label: purpose });
          await this.page.waitForTimeout(500);
          const formattedDateTime = dayjs().add(1, 'day').format('DDMMYYYY HHmmssSSS');
          await this.page.waitForTimeout(500);
          const oldFilePath = path.join(process.cwd(), 'Files', 'StampPaper.pdf');
          const newFilePath = path.join(process.cwd(), 'NewFiles', `${formattedDateTime}.pdf`);
          fs.copyFileSync(oldFilePath, newFilePath);
          await this.clickUploadButton.click();
          await this.page.locator('(//input[@type="file"])[2]').setInputFiles(newFilePath);
          await this.page.locator('//button[text()="Upload"]').click();
          await this.enterStampPaperSerielNo.fill(formattedDateTime);
          await this.enterDenomination.click();
          await this.page.waitForTimeout(500);
          await this.enterDenomination.fill("");
          await this.enterDenomination.type(denomination); 
        //   await this.page.keyboard.press('Control+A');
        //   await this.page.keyboard.press('Backspace');
        //   await this.enterDenomination.type(denomination); 
          await this.page.waitForTimeout(1000);
          await this.clickSaveButton.click();
          await this.page.waitForTimeout(1500);
        }
      }
      
      }
        


   
    

