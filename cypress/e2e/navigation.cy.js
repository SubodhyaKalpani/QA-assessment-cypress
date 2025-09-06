
describe('Navigation Test: Work page', () => {
  it('Navigates to Work via header and verifies content', () => {
    cy.visit('/');
    
    cy.get('header').within(() => {
      cy.contains(/^work$/i).click({ force: true });
    });
    cy.url().should('include', '/work');
    cy.contains(/our work/i).should('exist');
  });
});
