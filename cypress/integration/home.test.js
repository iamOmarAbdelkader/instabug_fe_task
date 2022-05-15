// https://docs.cypress.io/api/table-of-contents
///  <reference types="cypress" />

describe('Home', () => {
  it('opens successfuly and show mocked employees data', () => {
    cy.visit('http://localhost:8080/');
    cy.contains('Moses Mueller'); // first record name
    cy.contains('Durham Ross'); // second record name
    cy.contains('Penny Alexander'); // third record name
    cy.contains('Rose Morrison'); // third record name
  });
});
