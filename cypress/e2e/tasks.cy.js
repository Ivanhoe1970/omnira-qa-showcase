describe('Omnira QA Demo – Task Scheduler', () => {
    it('adds a task and displays it in the list', () => {
      cy.visit('/');
      cy.get('input[name="title"]').type('Pipeline Check');
      cy.get('input[name="cost"]').type('75000');
      cy.get('button[type="submit"]').click();
      cy.contains('Pipeline Check – $75000').should('exist');
    });
  
    it('shows validation error if fields are empty', () => {
      cy.visit('/');
      cy.get('button[type="submit"]').click();
      cy.contains('Both title and cost are required.').should('exist');
    });
  });
  