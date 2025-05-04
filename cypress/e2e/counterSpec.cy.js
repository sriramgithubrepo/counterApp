import { CounterPage } from '../pages/counterPage.js'

describe('Counter App', () => {
  const counterPage = new CounterPage();
  beforeEach(() => {
    counterPage.visit();
    counterPage.getCounterValue().should('be.visible');
    counterPage.getCounterValue().should('have.text', '0');
  });

  it('increments the counter when pressing increment button', () => {
    counterPage.clickIncrement();
    counterPage.getCounterValue().should('have.text', '1');
  });

  it('decrements the counter when pressing decrement button', () => {
    counterPage.clickIncrement();
    counterPage.getCounterValue().should('have.text', '1');
    counterPage.clickDecrement();
    counterPage.getCounterValue().should('have.text', '0');
  });

  it('browser reload reset the counter to initial state', () => {
    counterPage.clickIncrement();
    counterPage.getCounterValue().should('have.text', '1');
    cy.reload();
    counterPage.getCounterValue().should('have.text', '0');
  });
});