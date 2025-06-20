# Test info

- Name: TC_02: User can add the user of Single Record
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:32:1

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('AMC RM') resolved to 2 elements:
    1) <td id="FT AMC RM " _ngcontent-ng-c4011930937="" class="smart-table-col ng-star-inserted"> FT AMC RM  </td> aka getByText('FT AMC RM')
    2) <span ng-reflect-escape="true" ng-reflect-ng-item-label="AMC RM" class="ng-option-label ng-star-inserted">AMC RM</span> aka getByText('AMC RM', { exact: true })

Call log:
  - waiting for getByText('AMC RM')

    at OfflineDocumentSection.addSingleUser (C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\pages\OfflineDocument.js:52:36)
    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\04-amcManager.spec.js:35:5
```

# Page snapshot

```yaml
- text: 
- heading "External Admin" [level=5]
- heading "0" [level=5]
- text: View Task 
- heading "AMC Handler" [level=5]
- heading "0" [level=5]
- text: View Task
- img "loading..."
- img
- list:
  - listitem: Home
- text: Copyright © 2023 . All rights Reserved.
- link "Disclaimer":
  - /url: https://www.icicibank.com/disclaimer
- text: "|"
- link "Privacy Policy":
  - /url: https://www.icicibank.com/privacy
- text: "|"
- link "Terms of Use":
  - /url: https://www.icicibank.com/disclaimer
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
   33 |         this.selectUserRoles =  page.getByText('AMC RM');
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
>  52 |         await this.selectUserRoles.click();
      |                                    ^ Error: locator.click: Error: strict mode violation: getByText('AMC RM') resolved to 2 elements:
   53 |         //await this.selectUserRoles.click();
   54 |         await new Promise(resolve => setTimeout(resolve, 2000));
   55 |         await this.clickSaveButtonAddSingleUser.click(); 
   56 |         //span[@id="InActive"][text()="InActive"]
   57 |
   58 |         // //span[@id="Active"][text()="Active"] 
   59 |         //span[@id="InActive"][text()="InActive"]
   60 |
   61 |     }
   62 |     async userStatus(textInput){
   63 |         await new Promise(resolve => setTimeout(resolve, 2000));
   64 |         await this.globalSearch.fill(textInput);
   65 |         const status = await this.checkStatus.textContent();
   66 |         if (status && status.trim() === "Invite Sent") {
   67 |             console.log("Status is correctly set to 'Invite Sent'.");
   68 |         } else {
   69 |             console.log(`Unexpected status: ${status}`);
   70 |         }
   71 |     }
   72 |
   73 |     async stampPaper(expirationDate, jurisdiction, purpose, denomination, count,serialNo) {
   74 |         for (let i = 1; i <= count; i++) {
   75 |             await this.clickSingleRecord.click();
   76 |             await this.enterExpiryDate.fill(expirationDate);
   77 |             await this.enterDenomination.fill(denomination);
   78 |            
   79 |             // Selecting jurisdiction and purpose (Assuming they are dropdowns)
   80 |             await this.selectJurisdiction(jurisdiction);
   81 |             await this.enterStampPaperSerielNo.fill(serialNo);
   82 |
   83 |             await this.selectPurpose.selectOption({ label: purpose });
   84 |             await this.clickUploadButton.click();
   85 |             await this.page.locator('(//input[@type="file"])[2]').setInputFiles('Files/StampPaper.pdf');
   86 |             await new Promise(resolve => setTimeout(resolve, 2000));
   87 |             await this.page.locator('//button[text()="Upload"]').click();
   88 |             await new Promise(resolve => setTimeout(resolve, 2000));
   89 |             await this.page.locator('//button[text()="Save"]').click();
   90 |             await new Promise(resolve => setTimeout(resolve, 3000));
   91 |
   92 |            
   93 |          }
   94 |     }
   95 |
   96 |     async selectJurisdiction(jurisdiction) {
   97 |         await this.page.locator('//select[@id="jurisdiction"]').selectOption({ label: jurisdiction });
   98 |     }
   99 |
  100 |
  101 |     async stampPaperAddition(count, expirationDate, jurisdiction, purpose, denomination) {
  102 |         for (let i = 1; i <= count; i++) {
  103 |           await this.clickSingleRecord.click();
  104 |           await this.enterExpiryDate.fill(expirationDate);
  105 |           await this.selectJurisdiction(jurisdiction);
  106 |           await this.selectPurpose.selectOption({ label: purpose });
  107 |           const formattedDateTime = dayjs().add(1, 'day').format('DDMMYYYY HHmmssSSS');
  108 |           const oldFilePath = path.join(process.cwd(), 'Files', 'StampPaper.pdf');
  109 |           const newFilePath = path.join(process.cwd(), 'NewFiles', `${formattedDateTime}.pdf`);
  110 |           fs.copyFileSync(oldFilePath, newFilePath);
  111 |           await this.clickUploadButton.click();
  112 |           await this.page.locator('(//input[@type="file"])[2]').setInputFiles(newFilePath);
  113 |           await this.page.locator('//button[text()="Upload"]').click();
  114 |           await this.enterStampPaperSerielNo.fill(formattedDateTime);
  115 |           await this.enterDenomination.click();
  116 |           await this.page.waitForTimeout(500);
  117 |           await this.enterDenomination.fill("");
  118 |           await this.enterDenomination.type(denomination); 
  119 |           await this.page.keyboard.press('Control+A');
  120 |           await this.page.keyboard.press('Backspace');
  121 |           await this.enterDenomination.type(denomination); 
  122 |           await this.page.waitForTimeout(1000);
  123 |           await this.clickSaveButton.click();
  124 |           await this.page.waitForTimeout(1500);
  125 |         }
  126 |       }
  127 |       
  128 |       }
  129 |         
  130 |
  131 |
  132 |    
  133 |     
  134 |
  135 |
```