/// <reference types="Cypress" />
describe('Login Page', () => {
    it('should display the app name on the home page', () => {
      cy.visit('/'); // go to the home page
  
      // get the rocket element and verify that the app name is in it
      cy.get('.navbar-brand')
        .should('contain.text', 'E - Auction');
    });
  });