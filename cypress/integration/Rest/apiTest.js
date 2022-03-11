///<reference types="cypress"/>
describe('UserManager API Automation Test', function(){
    var header_data;
    var user={
            "name": "Machchhindra",
            "job": "AutomationTester"
        }
    var user1={
            "name": "Machchhindra",
            "job": "Yogiti"
        }   
    before(function(){
        cy.fixture('api').then(function(data){
            header_data= data
        })
    })
    it('GET-list user', function(){
        cy.request('GET', header_data.GETurl).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal(header_data.NAME)
        })
    })
    it('POst-list user', function(){
        
        cy.request('POST', header_data.POSTurl, user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)

                })
    })
  
    it('Update-user', function(){
       
        cy.request('PUT', header_data.PUTurl, user1).then((response)=>{
        expect(response.status).equal(200)
        expect(response.body.name).equal(user1.name)
        expect(response.body.job).equal(user1.job)
    })
    })
    it('Update-user', function(){
       
        cy.request('DELETE', header_data.DeleteURL).then((response)=>{
        expect(response.status).equal(204)
    })
    })
})