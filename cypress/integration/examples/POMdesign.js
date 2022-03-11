///<reference types="cypress"/>
import Login from '../pageObjects/Login'
const login=new Login()

describe('Login', function(){
    it("Sign-in", function(){
        cy.visit('http://demo.guru99.com/test/newtours/')
        login.userName().type('QQQQQ')
        login.passWord().type('qqqqq')
        login.submitButton().should('be.visible').click()
        
    })
})