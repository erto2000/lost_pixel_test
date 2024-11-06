module.exports = {
  pageShots: {
    pages: [{ path: '/', name: 'landing' }],
    baseUrl: 'http://172.17.0.1:3000',
    breakpoints: [375, 768, 1024], // Adding responsive breakpoints
    mask: [{ selector: '.dynamic-item' }], // Corrected to an object with selector
  },
  lostPixelProjectId: 'cm363gq9l0k6nqwvybegpzlb8',
  apiKey: process.env.LOST_PIXEL_API_KEY,
  browsers: ['chromium', 'firefox'], // Adjusted key and values to supported options
  threshold: 0.05, // Allow slight differences in pixels for minor variations
  waitForSelector: '.loading', // Optional: Wait for loading spinner to disappear if needed
};