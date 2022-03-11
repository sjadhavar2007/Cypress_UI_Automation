///<reference types="cypress-xpath"/>
var headerInfo;
    before(function(){
        cy.fixture('PomData').then(function(data){
            headerInfo= data
        })
    })
class PomLocator{
    openURL(){
        cy.visit(headerInfo.url)
    }
    userName(){
      cy.xpath('//input[@name="userName"]').clear().type(headerInfo.UserName)
    }
    passWord(){
         cy.xpath('//input[@name="password"]').clear().type(headerInfo.Password)
    }
    submitButton(){
      return cy.xpath('//input[@name="submit"]').click()
    }
 }
 export default PomLocator