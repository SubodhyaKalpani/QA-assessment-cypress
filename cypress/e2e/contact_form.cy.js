
describe('Contact Form Interaction', () => {
  beforeEach(() => {
    cy.fixture('contact.json').as('contact');
  });

  it('Navigates to Contact and fills the form without submitting', function () {
    
    cy.visit('/lets-talk');

    const nameSel = [
      'input[name*="name" i]',
      'input#name',
      'input[placeholder*="Name" i]',
      'input[aria-label*="name" i]'
    ];
    const emailSel = [
      'input[type="email"]',
      'input[name*="email" i]',
      'input[placeholder*="Email" i]',
      'input[aria-label*="email" i]'
    ];
    const messageSel = [
      'textarea[name*="message" i]',
      'textarea#message',
      'textarea[placeholder*="Message" i]',
      'textarea[aria-label*="message" i]'
    ];

    function fillFirstMatch(selectors, value) {
      cy.get('body').then(($body) => {
        for (const sel of selectors) {
          const has = $body.find(sel).length > 0;
          if (has) {
            cy.get(sel).first().clear().type(value, { delay: 0 });
            return;
          }
        }
        
        throw new Error('Could not find a form field with selectors: ' + selectors.join(', '));
      });
    }

    fillFirstMatch(nameSel, this.contact.name);
    fillFirstMatch(emailSel, this.contact.email);
    fillFirstMatch(messageSel, this.contact.message);

    
    cy.get('input, textarea').then(($els) => {
      const values = Array.from($els).map(el => el.value).join(' ');
      expect(values).to.include(this.contact.name);
      expect(values).to.include(this.contact.email);
      expect(values).to.include(this.contact.message);
    });
  });
});
