import { defineConfig, devices } from '@playwright/test';

const LT_USERNAME = process.env.LT_USERNAME || 'your_username';
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || 'your_access_key';

export default defineConfig({
  timeout: 60000,
  retries: 1,
  projects: [
    {
      name: 'Android Chrome - LambdaTest',
      use: {
        browserName: 'chromium',
        // Connect to LambdaTest WebSocket endpoint
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
            browserName: 'Chrome',
            browserVersion: 'latest',
            platform: 'Android',
            deviceName: 'Samsung Galaxy S21', // or any device supported by LT
            resolution: '1080x2340',
            build: 'Playwright Android Build',
            name: 'Playwright WebView Test',
            user: LT_USERNAME,
            accessKey: LT_ACCESS_KEY,
            network: true,
            video: true,
            console: true,
            visual: true
          }))}`
        },
        // Optional: headless setting has no effect here
        headless: true,
      }
    }
  ]
});
