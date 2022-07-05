// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />
import webpack from '@cypress/webpack-preprocessor';

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfig
): Cypress.PluginConfig => {
  const options = {
    webpackOptions: require('../../webpack/development'),
    watchOptions: {}
  };
  on('file:preprocessor', webpack(options));

  require('@cypress/code-coverage/task')(on, config);
  return config;
};
