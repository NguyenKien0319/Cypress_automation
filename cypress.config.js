const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "sdetpro",
    // specPattern: "./cypressautomation\cypress\e2e\linh/**.*",
    baseUrl: "https://the-internet.herokuapp.com",
  },
});
