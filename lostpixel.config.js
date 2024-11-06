module.exports = {
  pageShots: {
    pages: [
      {
        path: '/',
        name: 'landing',
        beforeScreenshot: async (page) => {
          // Wait for the input field to appear
          await page.waitForSelector('input[type="text"]');
          
          // Focus on the input and type "Apple"
          await page.click('input[type="text"]'); // Focus the input
          await page.evaluate(() => (document.querySelector('input[type="text"]').value = '')); // Clear input field
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
