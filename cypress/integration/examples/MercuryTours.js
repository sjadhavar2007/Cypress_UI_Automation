/// <reference types="cypress" />
describe('Login', function(){
    it('Flight Trip round', function(){
        cy.visit('http://demo.guru99.com/test/newtours/reservation.php')
        cy.url().should('include','newtours')
        cy.title().should('eq','Find a Flight: Mercury Tours:')
        cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked')
        cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click()
        
        cy.get('input[name="findFlights"]').should('be.visible').click()

    })
})