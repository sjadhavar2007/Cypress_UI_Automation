/// <reference types="cypress" />
describe('nopCommerce Site', function(){
    it('Verify product', function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('#small-searchterms').type('Appale MacBook Pro 13-inch')
        cy.get("button[type='submit']").click()
        cy.get("div.master-wrapper-page:nth-child(6) div.master-wrapper-content div.master-column-wrapper div.side-2 div.block.block-manufacturer-navigation:nth-child(2) div.title > strong:nth-child(1)").click()
        cy.get('a[href="/apple"]').click()
        cy.get('img[src="https://demo.nopcommerce.com/images/thumbs/0000024_apple-macbook-pro-13-inch_415.jpeg"]').click()
        
    })
})