describe('Entrypoint', () => {
  it('should render hello potato text', () => {
    cy.visit('http://127.0.0.1:9000/');
    cy.contains('Hello, Potato!');
  });
});
