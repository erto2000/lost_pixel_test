module.exports = {
  pageShots: {
    pages: [
      {
        path: '/',
        name: 'landing',
        beforeScreenshot: async (page) => {
          await page.click('button'); // Clicks the "Set Search to 'Apple'" button
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
