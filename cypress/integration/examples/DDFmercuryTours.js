/// <reference types="cypress-xpath"/>
describe('Register Page of Mercury Tours', function(){
    
    before(function(){
        cy.fixture('Data').then(function(data1){
            this.data1= data1
        })
    })

    it('Click_on_regesiter_button', function(){
        cy.visit(this.data1.url)

        cy.xpath("//a[contains(text(),'REGISTER')]").click();
        cy.url().should('include','register')
        cy.get(':nth-child(3) > td > p > font').should('be.visible')
        cy.get('input[name="firstName"]').clear().type(this.data1.FirstName)
        cy.xpath('//input[@name="lastName"]').clear().type(this.data1.LastName)
        cy.xpath('//input[@name="phone"]').clear().type(this.data1.Phone)
        cy.xpath('//input[@name="userName"]').clear().type(this.data1.Email)
        cy.xpath('//input[@name="address1"]').clear().type(this.data1.Adderess)
        cy.xpath('//input[@name="city"]').clear().type(this.data1.City)
        cy.xpath('//input[@name="state"]').clear().type(this.data1.State)
        cy.xpath('//input[@name="postalCode"]').clear().type(this.data1.PostalCode)
        cy.xpath('//select[@name="country"]').select(this.data1.Country).should('have.value', this.data1.Country)
        cy.xpath('//input[@name="email"]').clear().type(this.data1.UserName)
         cy.xpath('//input[@name="password"]').clear().type(this.data1.Password)
        cy.xpath('//input[@name="confirmPassword"]').clear().type(this.data1.Password)
        cy.get(':nth-child(17)>td>input').click()
        cy.get('td > :nth-child(2) > font > a').should('be.visible')
        

    })
    

})