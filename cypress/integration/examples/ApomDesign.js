///<reference types="cypress"/>
import PomLocator from '../pageObjects/PomLocator'
const login=new PomLocator()

describe('Login_Functionality', function(){
    it("Sign-in_Operation", function(){
        login.openURL()
        login.userName()
        login.passWord()
        login.submitButton()
    })
})
