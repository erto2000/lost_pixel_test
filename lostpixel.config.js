module.exports = {
  pageShots: {
    pages: [
      {
        path: '/',
        name: 'landing',
        beforeScreenshot: async (page) => {
          console.log('Attempting to click the button...');
          await page.click('button');
          await page.waitForTimeout(500); // Add a 500ms delay to ensure state update
          console.log('Button clicked and waited for update.');
        }
        
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
