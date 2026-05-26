const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videosFolder: "cypress/videos",
  videoCompression: 32,
  trashAssetsBeforeRuns: true,

  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://www.automationexercise.com/",
    screenshotOnRunFailure: true,

    async setupNodeEvents(on, config) {
      const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
      const {
        addCucumberPreprocessorPlugin,
      } = require("@badeball/cypress-cucumber-preprocessor");
      const {
        createEsbuildPlugin,
      } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

      // ensure the cucumber plugin is registered before preprocessing
      await addCucumberPreprocessorPlugin(on, config);

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);

      return config;
    },
  },
});
