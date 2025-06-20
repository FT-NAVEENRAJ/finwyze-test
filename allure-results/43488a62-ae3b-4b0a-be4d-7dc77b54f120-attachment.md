# Test info

- Name: TC_03: To check the user status was Active or InviteSent
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:38:1

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('searchbox', { name: 'Search' })

    at OfflineDocumentSection.userStatus (C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\pages\OfflineDocument.js:65:33)
    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:41:5
```

# Test source

```ts
   1 | import fs from 'fs';
   2 | import path from 'path';
   3 | import dayjs from 'dayjs';
   4 | import customParseFormat from 'dayjs/plugin/customParseFormat.js';
   5 | dayjs.extend(customParseFormat);
   6 |
   7 |
   8 |
   9 | export default class OfflineDocumentSection {
   10 |     constructor(page) {
   11 |         this.page = page;
   12 |         this.clickOfflineDocument = page.locator('//button[text()="Offline Documents"]');
   13 |         this.clickSingleRecord = page.locator('//button[contains(text(),"Add Single Record")]');
   14 |         this.clickUploadButton = page.locator('//a[text()="Upload Document"]');
   15 |         this.enterExpiryDate = page.locator('//input[@id="expiryDate"]');
   16 |         this.selectPurpose = page.locator('//select[@formcontrolname="purpose"]');
   17 |         this.enterStampPaperSerielNo = page.locator('//input[@id="serialNo"]');
   18 |         this.enterDenomination = page.locator('//input[@id="denomination"]');
   19 |         this.clickHyperlinkUploadButton = page.locator('//a[contains(text(),"Upload Document")]');
   20 |         this.clickSaveButton = page.locator('//button[contains(text(),"Save")]');
   21 |         // Add New User in single record
   22 |
   23 |         this.clickAddSingleUser = page.locator('//button[@id="add"][text()="Add Single User"]');
   24 |         this.enterFullName = page.locator('//input[@id="fullName"]');
   25 |         this.enterEmployeeId = page.locator('//input[@id="employeeId"]');
   26 |         this.enterNISMNumber = page.locator('//input[@id="nismNumber"]');
   27 |         this.enterEmailAddress = page.locator('//input[@id="emailAddress"]');
   28 |         this.enterMobileNumber = page.locator('//input[@id="mobileNumber"]');
   29 |         this.enterLocation = page.locator('//input[@id="location"]');
   30 |         this.clickApplictaionAccess = page.locator('#applications').getByRole('textbox');
   31 |         this.selectApplictaionAccess = page.getByText('DEMAT+PMS');
   32 |         this.clickUserRoles = page.locator('#roles').getByRole('textbox');
   33 |         this.selectUserRoles =  page.getByText('AMC SERVICE RM');
   34 |         this.clickSaveButtonAddSingleUser = page.getByRole('button', { name: 'Save' });
   35 |         this.globalSearch = page.getByRole('searchbox', { name: 'Search' });
   36 |         this.checkStatus = page.locator('//span[text()="Invite Sent"]');
   37 |
   38 |         
   39 |     }
   40 |
   41 |     async addSingleUser(Name,empId,NISM,email,mobileNumber){
   42 |         await this.clickAddSingleUser.click();
   43 |         await this.enterFullName.fill(Name);
   44 |         await this.enterEmployeeId.fill(empId);
   45 |         await this.enterNISMNumber.fill(NISM);
   46 |         await this.enterEmailAddress.fill(email);
   47 |         await this.enterMobileNumber.fill(mobileNumber);
   48 |         await this.enterLocation.fill("CHENNAI");
   49 |         await this.clickApplictaionAccess.click();
   50 |         await this.selectApplictaionAccess.click();
   51 |         await this.clickUserRoles.click();
   52 |       //  await new Promise(resolve => setTimeout(resolve, 20000));
   53 |         await this.selectUserRoles.click();
   54 |         //await this.selectUserRoles.click();
   55 |         await new Promise(resolve => setTimeout(resolve, 2000));
   56 |         await this.clickSaveButtonAddSingleUser.click(); 
   57 |         //span[@id="InActive"][text()="InActive"]
   58 |
   59 |         // //span[@id="Active"][text()="Active"] 
   60 |         //span[@id="InActive"][text()="InActive"]
   61 |
   62 |     }
   63 |     async userStatus(textInput){
   64 |         await new Promise(resolve => setTimeout(resolve, 2000));
>  65 |         await this.globalSearch.fill(textInput);
      |                                 ^ Error: locator.fill: Target page, context or browser has been closed
   66 |         const status = await this.checkStatus.textContent();
   67 |         if (status && status.trim() === "Invite Sent") {
   68 |             console.log("Status is correctly set to 'Invite Sent'.");
   69 |         } else {
   70 |             console.log(`Unexpected status: ${status}`);
   71 |         }
   72 |     }
   73 |
   74 |     async stampPaper(expirationDate, jurisdiction, purpose, denomination, count,serialNo) {
   75 |         for (let i = 1; i <= count; i++) {
   76 |             await this.clickSingleRecord.click();
   77 |             await this.enterExpiryDate.fill(expirationDate);
   78 |             await this.enterDenomination.fill(denomination);
   79 |            
   80 |             // Selecting jurisdiction and purpose (Assuming they are dropdowns)
   81 |             await this.selectJurisdiction(jurisdiction);
   82 |             await this.enterStampPaperSerielNo.fill(serialNo);
   83 |
   84 |             await this.selectPurpose.selectOption({ label: purpose });
   85 |             await this.clickUploadButton.click();
   86 |             await this.page.locator('(//input[@type="file"])[2]').setInputFiles('Files/StampPaper.pdf');
   87 |             await new Promise(resolve => setTimeout(resolve, 2000));
   88 |             await this.page.locator('//button[text()="Upload"]').click();
   89 |             await new Promise(resolve => setTimeout(resolve, 2000));
   90 |             await this.page.locator('//button[text()="Save"]').click();
   91 |             await new Promise(resolve => setTimeout(resolve, 3000));
   92 |
   93 |            
   94 |          }
   95 |     }
   96 |
   97 |     async selectJurisdiction(jurisdiction) {
   98 |         await this.page.locator('//select[@id="jurisdiction"]').selectOption({ label: jurisdiction });
   99 |     }
  100 |
  101 |
  102 |     async stampPaperAddition(count, expirationDate, jurisdiction, purpose, denomination) {
  103 |         for (let i = 1; i <= count; i++) {
  104 |           await this.clickSingleRecord.click();
  105 |           await this.enterExpiryDate.fill(expirationDate);
  106 |           await this.selectJurisdiction(jurisdiction);
  107 |           await this.selectPurpose.selectOption({ label: purpose });
  108 |           const formattedDateTime = dayjs().add(1, 'day').format('DDMMYYYY HHmmssSSS');
  109 |           const oldFilePath = path.join(process.cwd(), 'Files', 'StampPaper.pdf');
  110 |           const newFilePath = path.join(process.cwd(), 'NewFiles', `${formattedDateTime}.pdf`);
  111 |           fs.copyFileSync(oldFilePath, newFilePath);
  112 |           await this.clickUploadButton.click();
  113 |           await this.page.locator('(//input[@type="file"])[2]').setInputFiles(newFilePath);
  114 |           await this.page.locator('//button[text()="Upload"]').click();
  115 |           await this.enterStampPaperSerielNo.fill(formattedDateTime);
  116 |           await this.enterDenomination.click();
  117 |           await this.page.waitForTimeout(500);
  118 |           await this.enterDenomination.fill("");
  119 |           await this.enterDenomination.type(denomination); 
  120 |           await this.page.keyboard.press('Control+A');
  121 |           await this.page.keyboard.press('Backspace');
  122 |           await this.enterDenomination.type(denomination); 
  123 |           await this.page.waitForTimeout(1000);
  124 |           await this.clickSaveButton.click();
  125 |           await this.page.waitForTimeout(1500);
  126 |         }
  127 |       }
  128 |       
  129 |       }
  130 |         
  131 |
  132 |
  133 |    
  134 |     
  135 |
  136 |
```