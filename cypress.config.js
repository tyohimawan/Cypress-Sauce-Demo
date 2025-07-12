const { defineConfig } = require('cypress');
const dotenvPlugin = require('cypress-dotenv');

module.exports = defineConfig({
  projectId: 'a3g94f',
  e2e: {
    setupNodeEvents(on, config) {
      config = dotenvPlugin(config);
      return config;
    },
    // other e2e options
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
  }
});
