
describe('Homepage Test', () => {
  it('Visits the homepage and asserts title contains "eight25"', () => {
    cy.visit('/');
    cy.title().should('match', /eight25/i);

    cy.contains(/eight25/i).should('exist');
  });
});
