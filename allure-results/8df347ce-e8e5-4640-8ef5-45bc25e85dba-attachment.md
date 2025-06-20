# Test info

- Name: LAM ID Module Tests >> Maker Flow >> TC_03_01: Activate an inactive user as Maker. 
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:311:3

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//i[@id="dropdown"]') resolved to 25 elements:
    1) <i id="dropdown" ngbdropdowntoggle="" aria-expanded="false" _ngcontent-ng-c4011930937="" class="dropdown-toggle fa fa-caret-down pl-10"></i> aka getByRole('row', { name: 'ARUNACHALAM KISHORET KISHORET' }).locator('#dropdown')
    2) <i id="dropdown" ngbdropdowntoggle="" aria-expanded="false" _ngcontent-ng-c4011930937="" class="dropdown-toggle fa fa-caret-down pl-10"></i> aka getByRole('row', { name: 'ARUNACHALAM KISHOREEKUMAR0212' }).locator('#dropdown')
    3) <i id="dropdown" ngbdropdowntoggle="" aria-expanded="false" _ngcontent-ng-c4011930937="" class="dropdown-toggle fa fa-caret-down pl-10"></i> aka getByRole('row', { name: 'ARUNACHALAM KISHOREEKUMAR207' }).locator('#dropdown')
    4) <i id="dropdown" ngbdropdowntoggle="" aria-expanded="false" _ngcontent-ng-c4011930937="" class="dropdown-toggle fa fa-caret-down pl-10"></i> aka getByRole('row', { name: 'ARUNACHALAM KISHOREEKUMAR0112' }).locator('#dropdown')
    5) <i id="dropdown" ngbdropdowntoggle="" aria-expanded="false" _ngcontent-ng-c4011930937="" class="dropdown-toggle fa fa-caret-down pl-10"></i> aka getByRole('row', { name: 'TEST OPS USER BAN490888' }).locator('#dropdown')
    6) <i id="dropdown" ngbdropdowntoggle="" aria-expanded="false" _ngcontent-ng-c4011930937="" class="dropdown-toggle fa fa-caret-down pl-10"></i> aka getByRole('row', { name: 'ARUNACHALAM KISHOREEKUMAR202' }).locator('#dropdown')
    7) <i id="dropdown" ngbdropdowntoggle="" aria-expanded="false" _ngcontent-ng-c4011930937="" class="dropdown-toggle fa fa-caret-down pl-10"></i> aka getByRole('row', { name: 'ARUNACHALAM KISHOREEKUMAR209' }).locator('#dropdown')
    8) <i id="dropdown" ngbdropdowntoggle="" aria-expanded="false" _ngcontent-ng-c4011930937="" class="dropdown-toggle fa fa-caret-down pl-10"></i> aka getByRole('row', { name: 'FDIOPSCKR FC.FDI.OPS.CKR01 FC' }).locator('#dropdown')
    9) <i id="dropdown" ngbdropdowntoggle="" aria-expanded="false" _ngcontent-ng-c4011930937="" class="dropdown-toggle fa fa-caret-down pl-10"></i> aka getByRole('row', { name: 'LAM ID MAKER LAM.ID.MKR02 LAM' }).locator('#dropdown')
    10) <i id="dropdown" ngbdropdowntoggle="" aria-expanded="false" _ngcontent-ng-c4011930937="" class="dropdown-toggle fa fa-caret-down pl-10"></i> aka getByRole('row', { name: 'ARUNACHALAM MSD MSD@ICICIBANK' }).locator('#dropdown')
    ...

Call log:
  - waiting for locator('//i[@id="dropdown"]')
    - waiting for" https://cdi-r3.finwyze.com/admin/users" navigation to finish...
    - navigated to "https://cdi-r3.finwyze.com/admin/users"
    - waiting for" https://custodydigitization.finwyze.com/auth/realms/Fintuple/protocol/openid-connect/auth?client_id=admin-internal&redirect_uri=https%3A%2F%2Fcdi-r3.finwyze.com%2Fadmin%2Fusers&state=65c70448-7d60-4f…" navigation to finish...
    - navigated to "https://custodydigitization.finwyze.com/auth/realms/Fintuple/broker/AzureSAML/login?session_code=V1Uo6XOx6HJatNBd8206RwXTRx4rIexGX2v-gWZDsNw&client_id=admin-internal&tab_id=O41gm2GUAiw"
    - waiting for" https://custodydigitization.finwyze.com/auth/realms/Fintuple/broker/AzureSAML/endpoint" navigation to finish...
    - navigated to "https://cdi-r3.finwyze.com/admin/users#state=65c70448-7d60-4f7a-872b-6fbd77329ad8&session_state=b16b304b-e646-435b-a2e4-7c368edd68bd&iss=https%3A%2F%2Fcustodydigitization.finwyze.com%2Fauth%2Frealms%…"
    - waiting for" https://custodydigitization.finwyze.com/auth/realms/Fintuple/broker/AzureSAML/login?session_code=B5qvIp1LjixDf-ARzmdIeoed0ia27icx2CSTN5nJ61o&client_id=admin-internal&tab_id=yE7SUKpbPzc" navigation to finish...
    - navigated to "https://custodydigitization.finwyze.com/auth/realms/Fintuple/broker/AzureSAML/login?session_code=B5qvIp1LjixDf-ARzmdIeoed0ia27icx2CSTN5nJ61o&client_id=admin-internal&tab_id=yE7SUKpbPzc"
    - waiting for" https://custodydigitization.finwyze.com/auth/realms/Fintuple/broker/AzureSAML/endpoint" navigation to finish...
    - navigated to "https://cdi-r3.finwyze.com/admin/users#state=f6ae88b9-95a3-4306-88de-09c122c92851&session_state=b16b304b-e646-435b-a2e4-7c368edd68bd&iss=https%3A%2F%2Fcustodydigitization.finwyze.com%2Fauth%2Frealms%…"
    - waiting for" https://custodydigitization.finwyze.com/auth/realms/Fintuple/broker/AzureSAML/login?session_code=hxX-FXOov7_D0Adbr48xO68rbFr2ueJbew1Ei70dAgQ&client_id=admin-internal&tab_id=rhndH8N2vhM" navigation to finish...
    - navigated to "https://custodydigitization.finwyze.com/auth/realms/Fintuple/broker/AzureSAML/login?session_code=hxX-FXOov7_D0Adbr48xO68rbFr2ueJbew1Ei70dAgQ&client_id=admin-internal&tab_id=rhndH8N2vhM"
    - waiting for" https://custodydigitization.finwyze.com/auth/realms/Fintuple/broker/AzureSAML/endpoint" navigation to finish...
    - navigated to "https://cdi-r3.finwyze.com/admin/users#state=7c3e586b-ed16-499c-8f53-8c41ae54741e&session_state=b16b304b-e646-435b-a2e4-7c368edd68bd&iss=https%3A%2F%2Fcustodydigitization.finwyze.com%2Fauth%2Frealms%…"

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:323:47
```

# Page snapshot

```yaml
- text: 
- heading "Internal User Management" [level=5]
- heading "85" [level=5]
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
  223 |       const lamChecker = new LAM_LoginPage(page);
  224 |       await page.goto('https://cdi-r3.finwyze.com');
  225 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  226 |     });
  227 |     test('TC_02_02: Reject the user edit task as Checker.', async ({ page }) => {
  228 |       await new Promise(resolve => setTimeout(resolve, 3000));
  229 |           page = await Promise.all([
  230 |             page.waitForEvent("popup"), 
  231 |             page.locator('//a[text()="View Task"]').click(), 
  232 |             ]).then(([newPage]) => newPage);
  233 |             await page.waitForLoadState();
  234 |             await new Promise(resolve => setTimeout(resolve, 3000));
  235 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  236 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  237 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  238 |       await new Promise(resolve => setTimeout(resolve, 1000));
  239 |       await page.locator('#task_internal_user_comments').click();
  240 |       await new Promise(resolve => setTimeout(resolve, 2000));
  241 |       await page.locator('#task_internal_user_comments').fill('Reject');
  242 |       await new Promise(resolve => setTimeout(resolve, 1000));
  243 |       await page.getByRole('button', { name: 'Reject' }).click();
  244 |       await new Promise(resolve => setTimeout(resolve, 2000));
  245 |     });
  246 |     });
  247 |   test.describe('Maker Flow  ', () => {
  248 |     test.beforeEach(async ({ page }) => {
  249 |       const lamChecker = new LAM_LoginPage(page);
  250 |       await page.goto('https://cdi-r3.finwyze.com');
  251 |       await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  252 |     });
  253 |     test('TC_02_03 (Retry): Resubmit the rejected edit task as Maker.', async ({ page }) => {
  254 |       await new Promise(resolve => setTimeout(resolve, 3000));
  255 |           page = await Promise.all([
  256 |             page.waitForEvent("popup"), 
  257 |             page.locator('//a[text()="View Task"]').click(), 
  258 |             ]).then(([newPage]) => newPage);
  259 |             await page.waitForLoadState();
  260 |             await new Promise(resolve => setTimeout(resolve, 3000));
  261 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  262 |       await new Promise(resolve => setTimeout(resolve, 3000));
  263 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  264 |       await new Promise(resolve => setTimeout(resolve, 2000));
  265 |       await page.locator('//button[@id="Re-submit Task"]').click();
  266 |       await new Promise(resolve => setTimeout(resolve, 1000));
  267 |       await page.locator('#internal_user_comment').click();
  268 |       await new Promise(resolve => setTimeout(resolve, 2000));
  269 |       await page.locator('#internal_user_comment').fill('Resubit the task');
  270 |       await new Promise(resolve => setTimeout(resolve, 1000));
  271 |       await page.locator('//button[@id="internal_user_submit"]').click();
  272 |       await new Promise(resolve => setTimeout(resolve, 2000));
  273 |     });
  274 |     });
  275 | test.describe('Checker Flow', () => {
  276 |   test.beforeEach(async ({ page }) => {
  277 |     const lamChecker = new LAM_LoginPage(page);
  278 |     await page.goto('https://cdi-r3.finwyze.com');
  279 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  280 |     });
  281 |   test('TC_02_04: (Approval): Approve the user edit task as Checker.', async ({ page }) => {
  282 |     await new Promise(resolve => setTimeout(resolve, 3000));
  283 |         page = await Promise.all([
  284 |           page.waitForEvent("popup"), 
  285 |           page.locator('//a[text()="View Task"]').click(), 
  286 |           ]).then(([newPage]) => newPage);
  287 |           await page.waitForLoadState();
  288 |           await new Promise(resolve => setTimeout(resolve, 3000));
  289 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  290 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  291 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  292 |     await new Promise(resolve => setTimeout(resolve, 1000));
  293 |     await page.locator('#task_internal_user_comments').click();
  294 |     await new Promise(resolve => setTimeout(resolve, 2000));
  295 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  296 |     await new Promise(resolve => setTimeout(resolve, 1000));
  297 |     await page.getByRole('button', { name: 'Approve' }).click();
  298 |     await new Promise(resolve => setTimeout(resolve, 2000));
  299 |     });
  300 |     });
  301 |
  302 |
  303 | //Scenario 3 : Activate User
  304 | test.describe('Maker Flow',()=>{
  305 |   test.beforeEach(async ({ page }) => {
  306 |     const lamMaker = new LAM_LoginPage(page);
  307 |     await page.goto('https://cdi-r3.finwyze.com');
  308 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  309 |   });
  310 |
  311 |   test('TC_03_01: Activate an inactive user as Maker. ', async ({ page }) => {
  312 |     page = await Promise.all([
  313 |             page.waitForEvent("popup"), 
  314 |             page.locator('//a[text()="View Task"]').click(), 
  315 |             ]).then(([newPage]) => newPage);
  316 |             await page.waitForLoadState()
  317 |   
  318 |     const lamPopup = new LAM_LoginPage(page);
  319 |     await lamPopup.clickUser();
  320 |     await new Promise(resolve => setTimeout(resolve, 2000));
  321 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  322 |     await new Promise(resolve => setTimeout(resolve, 2000));
> 323 |     await page.locator('//i[@id="dropdown"]').click();
      |                                               ^ Error: locator.click: Error: strict mode violation: locator('//i[@id="dropdown"]') resolved to 25 elements:
  324 |     await page.locator('//button[@id="Activate/Deactivate"]').click();
  325 |     await page.locator('//textarea[@id="internal_user_comment"]').fill("Activate the User");
  326 |     await page.locator('//button[@id="internal_user_submit"]').click();
  327 |     await new Promise(resolve => setTimeout(resolve, 2000));
  328 |   });
  329 |   
  330 | });
  331 |
  332 |
  333 | test.describe('Checker Flow', () => {
  334 |     test.beforeEach(async ({ page }) => {
  335 |       const lamChecker = new LAM_LoginPage(page);
  336 |       await page.goto('https://cdi-r3.finwyze.com');
  337 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  338 |     });
  339 |     test('TC_03_02: Reject the user inactive task as Checker.', async ({ page }) => {
  340 |       await new Promise(resolve => setTimeout(resolve, 3000));
  341 |           page = await Promise.all([
  342 |             page.waitForEvent("popup"), 
  343 |             page.locator('//a[text()="View Task"]').click(), 
  344 |             ]).then(([newPage]) => newPage);
  345 |             await page.waitForLoadState();
  346 |             await new Promise(resolve => setTimeout(resolve, 3000));
  347 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  348 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  349 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  350 |       await new Promise(resolve => setTimeout(resolve, 1000));
  351 |       await page.locator('#task_internal_user_comments').click();
  352 |       await new Promise(resolve => setTimeout(resolve, 2000));
  353 |       await page.locator('#task_internal_user_comments').fill('Reject');
  354 |       await new Promise(resolve => setTimeout(resolve, 1000));
  355 |       await page.getByRole('button', { name: 'Reject' }).click();
  356 |       await new Promise(resolve => setTimeout(resolve, 2000));
  357 |     });
  358 |     });
  359 |
  360 |
  361 |
  362 |  test.describe('Maker Flow  ', () => {
  363 |     test.beforeEach(async ({ page }) => {
  364 |       const lamChecker = new LAM_LoginPage(page);
  365 |       await page.goto('https://cdi-r3.finwyze.com');
  366 |       await lamChecker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  367 |     });
  368 |     test('TC_03_03 (Retry): Resubmit the rejected inactive task as Maker.', async ({ page }) => {
  369 |       await new Promise(resolve => setTimeout(resolve, 3000));
  370 |           page = await Promise.all([
  371 |             page.waitForEvent("popup"), 
  372 |             page.locator('//a[text()="View Task"]').click(), 
  373 |             ]).then(([newPage]) => newPage);
  374 |             await page.waitForLoadState();
  375 |             await new Promise(resolve => setTimeout(resolve, 3000));
  376 |       await page.locator('//input[@id="search"]').fill(generatedEmail);
  377 |       await new Promise(resolve => setTimeout(resolve, 3000));
  378 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  379 |       await new Promise(resolve => setTimeout(resolve, 2000));
  380 |       await page.locator('//button[@id="Re-submit Task"]').click();
  381 |       await new Promise(resolve => setTimeout(resolve, 1000));
  382 |       await page.locator('#internal_user_comment').click();
  383 |       await new Promise(resolve => setTimeout(resolve, 2000));
  384 |       await page.locator('#internal_user_comment').click();
  385 |       await page.locator('#internal_user_comment').fill('Resubmit the task');
  386 |       await new Promise(resolve => setTimeout(resolve, 1000));
  387 |       await page.locator('//button[@id="internal_user_submit"]').click();
  388 |       await new Promise(resolve => setTimeout(resolve, 2000));
  389 |     });
  390 |     });
  391 |
  392 |
  393 |
  394 |
  395 |
  396 | test.describe('Checker Flow', () => {
  397 |   test.beforeEach(async ({ page }) => {
  398 |     const lamChecker = new LAM_LoginPage(page);
  399 |     await page.goto('https://cdi-r3.finwyze.com');
  400 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  401 |   });
  402 |
  403 |   test('TC_03_04: Approve the user activation task as Checker.', async ({ page }) => {
  404 |     await new Promise(resolve => setTimeout(resolve, 3000));
  405 |         page = await Promise.all([
  406 |           page.waitForEvent("popup"), 
  407 |           page.locator('//a[text()="View Task"]').click(), 
  408 |           ]).then(([newPage]) => newPage);
  409 |           await page.waitForLoadState();
  410 |           await new Promise(resolve => setTimeout(resolve, 3000));
  411 |  await page.locator('//input[@id="search"]').fill(generatedEmail);
  412 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  413 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  414 |     await new Promise(resolve => setTimeout(resolve, 1000));
  415 |     await page.locator('#task_internal_user_comments').click();
  416 |     await new Promise(resolve => setTimeout(resolve, 2000));
  417 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  418 |     await new Promise(resolve => setTimeout(resolve, 1000));
  419 |     await page.getByRole('button', { name: 'Approve' }).click();
  420 |     await new Promise(resolve => setTimeout(resolve, 2000));
  421 |   });
  422 | });
  423 |
```