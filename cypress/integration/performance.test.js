// https://docs.cypress.io/api/table-of-contents
///  <reference types="cypress" />

describe('Performance', () => {
  it('navigates from home to performance successfully', () => {
    cy.visit('http://localhost:8080/');
    // navigate to performance page
    cy.contains('Team performance chart page').click();
    // assert the url has changed

    // filters are visible
    cy.contains('Start Date:');
    cy.contains('Start Date:');

    cy.location('href').should('contain', '/team-performance');
  });
});
