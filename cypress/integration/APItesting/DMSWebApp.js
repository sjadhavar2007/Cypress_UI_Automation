///<reference types="cypress"/>
var header_data;
before(function(){
    cy.fixture('dmsAPI').then(function(data){
        header_data= data
    })
})

describe('DMSWebApp', function(){
    it('DMSWebApp User Management and Add User click operation', function(){
        cy.visit('https://dms-web-app-uitzd.ondigitalocean.app/home')
        cy.get('#mat-expansion-panel-header-4 > .mat-content').click()
        cy.get('#cdk-accordion-child-4 > .mat-expansion-panel-body > .mat-list > .mat-list-item > .mat-list-item-content').click()
        
    })

})