///<reference types="cypress-xpath"/>
import "cypress-iframe";
describe("frame test", function () {
  it("Demo example", function () {
    cy.visit("https://chercher.tech/practice/frames1")
    cy.frameLoaded("#frame3")
    //cy.get('#a').check()
    cy.iframe().get('#a').check()
  // cy.iframe().find("input#a").check().should('be.checked')
  })
})