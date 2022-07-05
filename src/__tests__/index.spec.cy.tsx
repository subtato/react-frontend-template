import React from 'react';
import App from '../index';

describe('App Index', async () => {
  it('should render a div', async () => {
    cy.mount(<App />);
    cy.contains('div');
  });

  it('should contain hello potato text', () => {
    cy.mount(<App />);
    cy.contains('Hello, Potato!');
  });
});
