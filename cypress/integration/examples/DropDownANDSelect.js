/// <reference types="cypress"/>
describe('Suite Name', function(){
    it('Hobbies check boxes', function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.wait(2000)
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['Cricket','Hockey'])

    })
    it('Skills Drop-Down', function(){
        cy.get('#Skills').select('Android').should('have.value','Android')     
    })
})
