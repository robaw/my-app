/// <reference types="cypress" />

describe('Home page', function () {
  it('loads properly', function () {
    cy.visit('http://localhost:3000/');
    cy.get('body').happoScreenshot();
  });
});
