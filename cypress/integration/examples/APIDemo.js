/// <reference types="cypress-xpath"/>
Cypress.config('baseUrl', '')
describe('API-Demo', function(){
    it('GET-read', function(){
        cy.request('GET', 'http://dummy.restapiexample.com/api/v1/employees').then((Response) => {
            expect(Response).to.have.property('status', 200)
            expect(Response.body).to.not.be.null
            expect(Response.body.data).to.have.length(24)
            
        })

    })
    it('POST-create'
    , function(){
        const items = {"name":"test","salary":"123","age":"23"}
        cy.request('POST', 'http://dummy.restapiexample.com/api/v1/createcls', items)
        .its('body')
        .its('data')
        //.should('data.eq', items)
        .should('include',{name:'test'})
    })
    it('PUT-update', function(){
        //const items=
       // cy.request('PUT', 'http://dummy.restapiexample.com/api/v1/update/21')
    })
})
