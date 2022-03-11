///<reference types="cypress"/>

var header_data;

describe('DMSWebApp API Automation Test', function(){
    before(function(){
        cy.fixture('dmsAPI').then(function(data){
            header_data= data
        })
    })
    it('Tc01 - To verify the success code of DMSWebApp of Admin User', function(){
        cy.request({
            method: 'GET',
            url: header_data.adminURL,
            
        }).then(function(res){
             this.responseBody = res
            expect(this.responseBody.status).to.equal(200)
        })
    })

    it('Tc02 - To verify the success code of DMSWebApp of Admin User', function(){
        cy.request({
            method: 'GET',
            url: header_data.adminURL,
            
        }).then(function(res){
             this.responseBody = res
            expect(this.responseBody.status).to.equal(200)
        })
    })

        it('DMSWebApp of Admin User for POST Method', function(){
            cy.request({
                method: 'POST',
                url: header_data.adminURL,
                failOnStatusCode: false,
                
            }).then((response)=>{
                cy.log(response.body)
                expect(response.status).equal(400)
            })
    
        })

    it('DMSWebApp of Master User', function(){
        cy.request({
            method: 'GET',
            url: header_data.masterURL,
            failOnStatusCode: false,
        }).then((response)=>{
            cy.log(response.body)
            expect(response.status).equal(404)
            
        })   
    })

})
