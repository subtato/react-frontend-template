import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    baseUrl: 'http://127.0.0.1:9000',
    env: {
      codeCoverage: {
        exclude: ['cypress/**/*.*']
      }
    }
  },

  videoCompression: 15,

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack'
    }
  }
});
