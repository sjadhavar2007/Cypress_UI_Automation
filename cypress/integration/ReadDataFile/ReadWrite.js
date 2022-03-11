///<reference types="cypress"/>
describe('Read and write data from file', function(){
    it('write function', function(){

        cy.writeFile('cypress\\fixtures\\ReadWrite.json',{
            name: 'Machchhindra',
            pass: 'Jadhavar@123'
        })
    })
    it('read data', function(){

        cy.fixture('ReadWrite').then((data)=>{
            expect(data.name).to.eq('Machchhindra')
        })
    })

    it('Login Check', function(){
        cy.visit('https://login.salesforce.com/?locale=in')
        cy.fixture('ReadWrite').then((data)=>{
            cy.get('#username').type(data.name)
        cy.get('#password').type(data.pass)

        })
        
    })
})