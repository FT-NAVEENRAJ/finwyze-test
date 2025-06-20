//npximport { defineConfig } from '@playwright/test';
import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  testIgnore: ['**/loadTest/**'],
  workers: 1, 
  use: {
    headless: false,
    screenshot: 'on',
    trace: 'on-first-retry',
    video: 'on',
    navigationTimeout: 45000,
    outputDir: 'test-results/',

  },
  projects: [
    {
      name: 'iCACE Domestic Custody',
      testMatch: [
        'tests/01-lam.spec.js',
        'tests/02-login.spec.js',
        'tests/03-investorProfile_i360.spec.js',
        'tests/04-amcManager.spec.js',
        'tests/05-pmsApplication.spec.js',
        'tests/demat.spec.js',
        'tests/06-demat.spec.js',
        'tests/07-amcReviewer.spec.js',
        'tests/08-custodyMaker.spec.js',
        'tests/investorModule.spec.js',
        'tests/10-custodyChecker.spec.js',
        'tests/modFlowNonAadhar.spec.js',
        'tests/dpsecure.spec.js',
      ],
     
      fullyParallel: false, // No parallel execution

      use: {
        browserName: 'chromium',
        viewport: null,
        launchOptions: {
          args: ['--incognito', '--start-maximized'],
        },
      },

      retries: 0,
      timeout: 100000, 
    }
  ],
  
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright'],
  ],
});
