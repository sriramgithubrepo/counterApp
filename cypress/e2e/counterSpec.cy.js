import { CounterPage } from '../pages/counterPage.js'

describe('Counter App', () => {
  const counterPage = new CounterPage();
  beforeEach(() => {
    counterPage.visit();
  });

  it('increments the counter when pressing increment button', () => {
    counterPage.getCounterValue().should('be.visible');
    counterPage.getCounterValue().should('have.text', '0');
    counterPage.clickIncrement();
    counterPage.getCounterValue().should('have.text', '1');
  });
});