const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: false,
  videoCompression: false,
  env: {
    "firstName": "staging",
    "webdriveruni_homepage": "https://webdriveruniversity.com/"
  },

  e2e: {
    baseUrl : 'https://webdriveruniversity.com/',
  
    setupNodeEvents(on, config) {
    },
  },
});
