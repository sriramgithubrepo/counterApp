export class CounterPage {
    visit() {
      cy.visit('/');
    }
  
    getCounterValue() {
      return cy.get('#counter');
    }
  
    clickIncrement() {
      cy.get('#increment-btn').click();
    }
  }