describe('Omnira QA Demo – Task Scheduler', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('adds a task and displays it in the list', () => {
      cy.get('input[name="title"]').type('Pipeline Check');
      cy.get('input[name="cost"]').type('75000');
      cy.get('button[type="submit"]').click();
      cy.contains('Pipeline Check – $75000').should('exist');
    });
  
    it('shows validation error if fields are empty', () => {
      cy.get('button[type="submit"]').click();
      cy.contains('Title and cost are required.').should('exist');
    });
  
    it('displays multiple tasks correctly', () => {
      const tasks = [
        { title: 'Drill Pad A', cost: '50000' },
        { title: 'Seismic Prep', cost: '10000' },
        { title: 'Frac Crew', cost: '25000' }
      ];
  
      tasks.forEach(task => {
        cy.get('input[name="title"]').clear().type(task.title);
        cy.get('input[name="cost"]').clear().type(task.cost);
        cy.get('button[type="submit"]').click();
      });
  
      tasks.forEach(task => {
        cy.contains(`${task.title} – $${task.cost}`).should('exist');
      });
    });
  });
  