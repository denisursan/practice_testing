const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "v7c4h2",
  chromeWebSecurity: false,
  watchForFileChanges: false,
  e2e: {

    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
