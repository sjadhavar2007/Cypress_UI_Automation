/// <reference types="cypress-xpath"/>
describe('Google page xpath', function(){
   
    it('Search on google', function(){
        cy.visit('http://demo.guru99.com/test/newtours/')
        cy.xpath('//input[@name="userName"]').type('QQQQQ')
        cy.xpath('//input[@name="password"]').type('qqqqq')
        cy.xpath('//input[@name="submit"]').click()

    })
    
})