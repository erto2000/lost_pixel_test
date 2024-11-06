module.exports = {
  pageShots: {
    pages: [
      {
        path: '/',
        name: 'landing',
        beforeScreenshot: async (page) => {
          // Wait for the input field to appear
          await page.waitForSelector('input[type="text"]');
          
          // Focus on the input and add a short delay
          await page.focus('input[type="text"]');
          await page.evaluate(() => {
            const input = document.querySelector('input[type="text"]');
            input.value = ''; // Clear any existing text
          });
          
          // Add a short delay before typing
          await page.waitForTimeout(100);
          await page.type('input[type="text"]', 'Apple'); // Type "Apple" into the search box
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
