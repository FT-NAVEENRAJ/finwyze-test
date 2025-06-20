# Test info

- Name: Maker Flow >> TC_02_01: Edit user as Maker 
- Location: C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:247:3

# Error details

```
Error: locator.click: Test timeout of 100000ms exceeded.
Call log:
  - waiting for locator('//i[@id="dropdown"]')

    at C:\Testing Details\Naveenraj\SampleTest\PlaywrightAutomation\tests\01-lam.spec.js:259:47
```

# Page snapshot

```yaml
- text: 
- heading "Internal User Management" [level=5]
- heading "52" [level=5]
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
  159 |   });
  160 |
  161 |   test.describe('Checker Flow', () => {
  162 |     test.beforeEach(async ({ page }) => {
  163 |       const lamChecker = new LAM_LoginPage(page);
  164 |       await page.goto('https://cdi-r3.finwyze.com');
  165 |       await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  166 |     });
  167 |
  168 |     test('TC_01_02:Approve user as Checker', async ({ page }) => {
  169 |       await new Promise(resolve => setTimeout(resolve, 3000));
  170 |           page = await Promise.all([
  171 |             page.waitForEvent("popup"), 
  172 |             page.locator('//a[text()="View Task"]').click(), 
  173 |             ]).then(([newPage]) => newPage);
  174 |             await page.waitForLoadState();
  175 |             await new Promise(resolve => setTimeout(resolve, 3000));
  176 |
  177 |       await page.locator('(//i[@id="dropdown"])[1]').click();
  178 |       await page.getByRole('button', { name: ' Approve/Reject' }).click();
  179 |       await new Promise(resolve => setTimeout(resolve, 1000));
  180 |       await page.locator('#task_internal_user_comments').click();
  181 |       await new Promise(resolve => setTimeout(resolve, 2000));
  182 |       await page.locator('#task_internal_user_comments').fill('Approve');
  183 |       await new Promise(resolve => setTimeout(resolve, 1000));
  184 |       await page.getByRole('button', { name: 'Approve' }).click();
  185 |       await new Promise(resolve => setTimeout(resolve, 2000));
  186 |     });
  187 |   });
  188 |
  189 |   // test.describe('Checker Flow',()=>{
  190 |   //   test.beforeEach(async ({ page }) => {
  191 |   //     const lamChecker = new LAM_LoginPage(page);
  192 |   //     await page.goto('https://cdi-r3.finwyze.com');
  193 |   //     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  194 |   //   });
  195 |   //   test("TC_05_01: Reject Task for custody Checker",async({})=>{
  196 |   //     await new Promise(resolve => setTimeout(resolve, 3000));
  197 |   //     page = await Promise.all([
  198 |   //       page.waitForEvent("popup"), 
  199 |   //       page.locator('//a[text()="View Task"]').click(), 
  200 |   //       ]).then(([newPage]) => newPage);
  201 |   //       await page.waitForLoadState();
  202 |   //       await new Promise(resolve => setTimeout(resolve, 3000));
  203 |   //     await page.locator('//input[@id="search"]').fill(generatedEmail);
  204 |   //     await page.locator('//i[@id="dropdown"]').click();
  205 |   //     await page.locator('//button[@id="Activate/Deactivate"]').click();
  206 |   //     await page.locator('//textarea[@id="internal_user_comment"]').fill("Deactivate the User");
  207 |   //     await page.locator('//button[@id="task_activate_Reject"]').click();
  208 |   //     await new Promise(resolve => setTimeout(resolve, 2000));
  209 |   //   });
  210 |   
  211 |   // test.describe('Maker Flow',()=>{
  212 |   //   test.beforeEach(async({page})=>{
  213 |   //     const lamMaker = new LAM_LoginPage(page);
  214 |   //     await page.goto('https://cdi-r3.finwyze.com');
  215 |   //     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  216 |   //   });
  217 |   
  218 |   //   test('TC_05_02: Update the details to click Resubmit the task for Maker ', async ({}) => {
  219 |   //     page = await Promise.all([
  220 |   //       page.waitForEvent("popup"), 
  221 |   //       page.locator('//a[text()="View Task"]').click(), 
  222 |   //       ]).then(([newPage]) => newPage);
  223 |   //       await page.waitForLoadState();
  224 |   //       await new Promise(resolve => setTimeout(resolve, 3000));
  225 |   
  226 |   //       await page.locator('//input[@id="search"]').fill(generatedEmail);
  227 |   //       await page.locator('//i[@id="dropdown"]').click();
  228 |   //       await page.locator('//button[@id="Re-submit Task"]').click();
  229 |   //       await page.locator('//textarea[@id="internal_user_comment"]').fill("Details to  the User");
  230 |   //       await page.locator('//button[@id="internal_user_submit"]').click();
  231 |   //       await new Promise(resolve => setTimeout(resolve, 2000));
  232 |   
  233 |   //   });
  234 |   
  235 |   // });
  236 |   });
  237 |
  238 | //Scenario 2
  239 |
  240 | test.describe('Maker Flow',()=>{
  241 |   test.beforeEach(async ({ page }) => {
  242 |     const lamMaker = new LAM_LoginPage(page);
  243 |     await page.goto('https://cdi-r3.finwyze.com');
  244 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  245 |   });
  246 |
  247 |   test('TC_02_01: Edit user as Maker ', async ({ page }) => {
  248 |     page = await Promise.all([
  249 |             page.waitForEvent("popup"), 
  250 |             page.locator('//a[text()="View Task"]').click(), 
  251 |             ]).then(([newPage]) => newPage);
  252 |             await page.waitForLoadState()
  253 |   
  254 |     const lamPopup = new LAM_LoginPage(page);
  255 |     await lamPopup.clickUser();
  256 |     await new Promise(resolve => setTimeout(resolve, 2000));
  257 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  258 |     await new Promise(resolve => setTimeout(resolve, 2000));
> 259 |     await page.locator('//i[@id="dropdown"]').click();
      |                                               ^ Error: locator.click: Test timeout of 100000ms exceeded.
  260 |     await page.locator('//button[@id="Edit"]').click();
  261 |     const phoneNumber = page.locator('//input[@id="internal_user_mobileNumber"]');
  262 |     phoneNumber.click();
  263 |     await new Promise(resolve => setTimeout(resolve, 1000));
  264 |     await phoneNumber.press('Control+A');
  265 |     await phoneNumber.press('Backspace'); 
  266 |     await phoneNumber.fill('9080378965');
  267 |     await new Promise(resolve => setTimeout(resolve, 2000));
  268 |     await page.locator('//button[@id="internal_user_submit"]').click();
  269 |     await new Promise(resolve => setTimeout(resolve, 2000));
  270 |   });
  271 |   
  272 | });
  273 |
  274 | test.describe('Checker Flow', () => {
  275 |   test.beforeEach(async ({ page }) => {
  276 |     const lamChecker = new LAM_LoginPage(page);
  277 |     await page.goto('https://cdi-r3.finwyze.com');
  278 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  279 |   });
  280 |
  281 |   test('TC_02_02:Approve Edit user as Checker', async ({ page }) => {
  282 |     await new Promise(resolve => setTimeout(resolve, 3000));
  283 |         page = await Promise.all([
  284 |           page.waitForEvent("popup"), 
  285 |           page.locator('//a[text()="View Task"]').click(), 
  286 |           ]).then(([newPage]) => newPage);
  287 |           await page.waitForLoadState();
  288 |           await new Promise(resolve => setTimeout(resolve, 3000));
  289 |
  290 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  291 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  292 |     await new Promise(resolve => setTimeout(resolve, 1000));
  293 |     await page.locator('#task_internal_user_comments').click();
  294 |     await new Promise(resolve => setTimeout(resolve, 2000));
  295 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  296 |     await new Promise(resolve => setTimeout(resolve, 1000));
  297 |     await page.getByRole('button', { name: 'Approve' }).click();
  298 |     await new Promise(resolve => setTimeout(resolve, 2000));
  299 |   });
  300 |
  301 | });
  302 |
  303 |
  304 | //Scenario 3 : Activate User
  305 | test.describe('Maker Flow',()=>{
  306 |   test.beforeEach(async ({ page }) => {
  307 |     const lamMaker = new LAM_LoginPage(page);
  308 |     await page.goto('https://cdi-r3.finwyze.com');
  309 |     await lamMaker.loginLamMaker('lam.id.mkr@fintuple.com', 'Icici@124');
  310 |   });
  311 |
  312 |   test('TC_03_01: Active user as Maker ', async ({ page }) => {
  313 |     page = await Promise.all([
  314 |             page.waitForEvent("popup"), 
  315 |             page.locator('//a[text()="View Task"]').click(), 
  316 |             ]).then(([newPage]) => newPage);
  317 |             await page.waitForLoadState()
  318 |   
  319 |     const lamPopup = new LAM_LoginPage(page);
  320 |     await lamPopup.clickUser();
  321 |     await new Promise(resolve => setTimeout(resolve, 2000));
  322 |     await page.locator('//input[@id="search"]').fill(generatedEmail);
  323 |     await new Promise(resolve => setTimeout(resolve, 2000));
  324 |     await page.locator('//i[@id="dropdown"]').click();
  325 |     await page.locator('//button[@id="Activate/Deactivate"]').click();
  326 |     await page.locator('//textarea[@id="internal_user_comment"]').fill("Activate the User");
  327 |     await page.locator('//button[@id="internal_user_submit"]').click();
  328 |     await new Promise(resolve => setTimeout(resolve, 2000));
  329 |   });
  330 |   
  331 | });
  332 | test.describe('Checker Flow', () => {
  333 |   test.beforeEach(async ({ page }) => {
  334 |     const lamChecker = new LAM_LoginPage(page);
  335 |     await page.goto('https://cdi-r3.finwyze.com');
  336 |     await lamChecker.loginLamMaker('lam.id.ckr@fintuple.com', 'Icici@124');
  337 |   });
  338 |
  339 |   test('TC_03_02:Approve Activate user as Checker', async ({ page }) => {
  340 |     await new Promise(resolve => setTimeout(resolve, 3000));
  341 |         page = await Promise.all([
  342 |           page.waitForEvent("popup"), 
  343 |           page.locator('//a[text()="View Task"]').click(), 
  344 |           ]).then(([newPage]) => newPage);
  345 |           await page.waitForLoadState();
  346 |           await new Promise(resolve => setTimeout(resolve, 3000));
  347 |  await page.locator('//input[@id="search"]').fill(generatedEmail);
  348 |     await page.locator('(//i[@id="dropdown"])[1]').click();
  349 |     await page.getByRole('button', { name: ' Approve/Reject' }).click();
  350 |     await new Promise(resolve => setTimeout(resolve, 1000));
  351 |     await page.locator('#task_internal_user_comments').click();
  352 |     await new Promise(resolve => setTimeout(resolve, 2000));
  353 |     await page.locator('#task_internal_user_comments').fill('APPROVE');
  354 |     await new Promise(resolve => setTimeout(resolve, 1000));
  355 |     await page.getByRole('button', { name: 'Approve' }).click();
  356 |     await new Promise(resolve => setTimeout(resolve, 2000));
  357 |   });
  358 | });
  359 |
```