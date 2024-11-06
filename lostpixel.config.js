module.exports = {
  pageShots: {
    pages: [
      {
        path: '/',
        name: 'landing',
        beforeScreenshot: async (page) => {
          // Wait for the input field to appear
          await page.waitForSelector('input[type="text"]');

          // Directly set the value, then trigger both input and change events
          await page.evaluate(() => {
            const input = document.querySelector('input[type="text"]');
            if (input) {
              input.value = 'Apple'; // Set the value directly
              input.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
              input.dispatchEvent(new Event('change', { bubbles: true })); // Trigger change event
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
