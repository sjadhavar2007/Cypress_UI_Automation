///<reference types="cypress"/>
describe('Alert-Type 1', function(){
    it('Basic Level', function(){
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })
        cy.on('window:confirm', () => true);
        cy.get('#result').contains('You successfully clicked an alert')
    })
})