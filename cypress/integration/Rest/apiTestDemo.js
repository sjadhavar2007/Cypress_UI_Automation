///<reference types="cypress"/>
describe('UserManager API Automation Test', function(){
    it('GET-list user', function(){
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal('Michael')
        })
    })
    it('POst-list user', function(){
        var user={
            "name": "Machchhindra",
            "job": "AutomationTester"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)

                })
    })
    it('Update-user', function(){
        var user1={
            "name": "Machchhindra",
            "job": "Yogiti"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2',user1).then((response)=>{
        expect(response.status).equal(200)
        expect(response.body.name).equal(user1.name)
        expect(response.body.job).equal(user1.job)
    })
    })
    it('Update-user', function(){
       
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response)=>{
        expect(response.status).equal(204)
    })
    })
})