/// <reference types="cypress-xpath"/>
describe('Register Page of Mercury Tours', function(){
    var headerInfo;
    before(function(){
        cy.fixture('Data').then(function(data1){
            headerInfo= data1
        })
    })
    it('Open_The_Url_Of_Mercury_Tour_Site', function(){
        cy.visit(headerInfo.url)
        cy.log("Successfully_Open_URL")
    })

    it('Click_on_regesiter_button', function(){
        cy.xpath("//a[contains(text(),'REGISTER')]").click();
        cy.url().should('include','register')
        cy.get(':nth-child(3) > td > p > font').should('be.visible')
    })
    it('Enter Personal Details:', function(){
         cy.get('input[name="firstName"]').clear().type(headerInfo.FirstName)
         cy.xpath('//input[@name="lastName"]').clear().type(headerInfo.LastName)
         cy.xpath('//input[@name="phone"]').clear().type(headerInfo.Phone)
        cy.xpath('//input[@name="userName"]').clear().type(headerInfo.Email)
   })
   it('Enter_Adderss_Deatis:',function(){
        cy.xpath('//input[@name="address1"]').clear().type(headerInfo.Adderess)
        cy.xpath('//input[@name="city"]').clear().type(headerInfo.City)
        cy.xpath('//input[@name="state"]').clear().type(headerInfo.State)
        cy.xpath('//input[@name="postalCode"]').clear().type(headerInfo.PostalCode)
        cy.xpath('//select[@name="country"]').select(headerInfo.Country).should('have.value', headerInfo.Country)
   })
   it('Set_UserName_AND_Pssword', function(){
    cy.xpath('//input[@name="email"]').clear().type(headerInfo.UserName)
     cy.xpath('//input[@name="password"]').clear().type(headerInfo.Password)
    cy.xpath('//input[@name="confirmPassword"]').clear().type(headerInfo.Password)
    cy.get(':nth-child(17)>td>input').click()
    cy.get('td > :nth-child(2) > font > a').should('be.visible')
   })
})