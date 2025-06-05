import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 7000, // 30 seconds per test
  expect: {
    timeout: 5000 // 5 seconds for expect conditions
  },
  fullyParallel: false,
  retries: 0,
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: `Chrome`,
		use: {
			browserName: `chromium`,
			channel: `chrome`,
			headless: false,
			viewport: { width: 1720, height: 850 },
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`
		}
    }
  ]
});
