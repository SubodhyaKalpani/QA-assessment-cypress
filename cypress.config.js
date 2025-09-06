const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.eight25media.com',
    viewportWidth: 1280,
    viewportHeight: 800,
    chromeWebSecurity: false,
    video: false,
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
