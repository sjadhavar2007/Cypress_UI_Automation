///<reference types="cypress-xpath"/>
describe('Mercury-Tours Site', function(){
    before(function(){
        cy.fixture('Data').then(function(data){
            this.data= data
        })
    })
    it('Mercury-Tours', function(){
        cy.visit('http://demo.guru99.com/test/newtours/')
        cy.get('input[name="userName"]').clear().type(this.data.UserName)
        cy.get('input[name="password"]').clear().type(this.data.Password)
        cy.get('input[name="submit"]').click()


    })
})