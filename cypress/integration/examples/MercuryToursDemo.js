/// <reference types="cypress-xpath"/>
describe('Register Page of Mercury Tours', function(){
    it('Click_on_regesiter_button', function(){
        cy.visit('http://demo.guru99.com/test/newtours/')
        cy.xpath("//a[contains(text(),'REGISTER')]").click();
        cy.url().should('include','register')
    })
    it('Enter UserName', function(){
        cy.xpath('//input[@name="firstName"]').clear().type('Satish')
        cy.xpath('//input[@name="lastName"]').type('Jadhavar')
        cy.xpath('//input[@name="phone"]').type('8554025792')
        cy.xpath('//input[@name="userName"]').type('jadhavarmachchhindra@gmail.com')
    })
    it('Address Information', function(){
        cy.xpath('//input[@name="address1"]').type('KarveNagar')
        cy.xpath('//input[@name="city"]').type('Pune')
        cy.xpath('//input[@name="state"]').type('Maharashtra')
        cy.xpath('//input[@name="postalCode"]').type('411052')
        cy.xpath('//select[@name="country"]').select('INDIA').should('have.value', 'INDIA')
    })
    it('ID and Pass', function(){
        cy.xpath('//input[@name="email"]').type('SSSSS')
        cy.xpath('//input[@name="password"]').type('sssss')
        cy.xpath('//input[@name="confirmPassword"]').type('sssss')
    })
    it('Submit-Button',function(){
       // cy.xpath('//input[@name="submit"]').should('be.visible').click()
    })
})