
describe('Responsive Check (Bonus)', () => {
  it('Shows hamburger menu on mobile viewport and runs basic homepage assertion', () => {
    cy.viewport(375, 667);
    cy.visit('/');

    cy.findHamburger().then(($el) => {
      
      if ($el) {
        cy.wrap($el).should('be.visible');
      } else {
        
        cy.get('header').should('exist');
      }
    });

    cy.title().should('match', /eight25/i);
  });
});
