const { defineConfig } = require("cypress")

module.exports = defineConfig({ // eslint-disable-line
  e2e: {
    setupNodeEvents(on, config) { // eslint-disable-line
      // implement node event listeners here
    },
  },
})
