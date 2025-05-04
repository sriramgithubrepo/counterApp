import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:'http://localhost:3000',
    setupNodeEvents() {
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: true,
      html: true,
      json: true
    }
  },
});
