///<reference types="cypress-xpath"/>
describe('AlertBox', function(){
    it('Alert', function(){
        cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.xpath('//a[@href="#Textbox"]').click()
        cy.window().then(($win) =>{
            cy.stub($win, 'prompt').returns('Machchhindra Jadhavar')
            cy.contains('click the button to demonstrate the prompt box ').click()
        })
        cy.get('#demo1').contains('Hello Machchhindra Jadhavar How are you today')
        cy.get('#demo1').should('be.visible')
    })
})