// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// You can use this file to put global configuration and
// behavior that modifies Cypress.
// ***********************************************************

Cypress.Commands.add('navTo', (path) => {
  cy.visit(path);
  // Ensure page has at least one h1 or landmark
  cy.get('h1, main, [role="main"]').should('exist');
});

// A resilient check for a 'hamburger' mobile menu toggle.
Cypress.Commands.add('findHamburger', () => {
  // Common patterns: aria-label includes 'menu', 'open menu', 'toggle menu',
  // or elements with classes containing hamburger/menu/icon, or svg buttons.
  const selectors = [
    'button[aria-label*="menu" i]',
    'button[aria-label*="navigation" i]',
    'button[aria-expanded]',
    '.hamburger, .hamburger-button, .menu-toggle, .nav-toggle',
    'button:has(svg), .menu-icon'
  ];

  return cy.get('body').then(($body) => {
    const found = selectors.some(sel => $body.find(sel).length > 0);
    if (!found) {
      // As a fallback, look for any header button that appears in mobile
      return cy.wrap(null);
    }
    // Return the first match
    for (const sel of selectors) {
      const el = $body.find(sel).get(0);
      if (el) return cy.wrap(el);
    }
    return cy.wrap(null);
  });
});
