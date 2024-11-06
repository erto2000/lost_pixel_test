module.exports = {
  pageShots: {
    pages: [
      {
        path: '/',
        name: 'landing',
        beforeScreenshot: async (page) => {
          // Log any console errors to help diagnose
          page.on('console', msg => console.log('PAGE LOG:', msg.text()));

          // Wait for the input field to appear
          await page.waitForSelector('input[type="text"]');
          
          // Directly set the value and dispatch an input event to simulate typing
          await page.evaluate(() => {
            const input = document.querySelector('input[type="text"]');
            if (input) {
              input.value = 'Apple';
              input.dispatchEvent(new Event('input', { bubbles: true }));
            }
          });
        },
      },
    ],
    baseUrl: 'http://172.17.0.1:3000',
    breakpoints: [375, 768, 1024],
    mask: [{ selector: '.dynamic-item' }],
  },
  lostPixelProjectId: 'cm363gq9l0k6nqwvybegpzlb8',
  apiKey: process.env.LOST_PIXEL_API_KEY,
  browsers: ['chromium', 'firefox'],
  threshold: 0.05,
  waitForSelector: '.loading',
};
