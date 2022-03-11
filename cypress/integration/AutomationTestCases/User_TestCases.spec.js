///<reference types="cypress-xpath"/>
import fromPage from "../Pages/fromPage";

var frompage = new fromPage();
describe('DMS UI Automation Test Cases', function(){
    var baseUrl;
    var inputValue;
    before(function(){
        cy.fixture('commonConfig').then(function(data){
            baseUrl=data.URL_openDMSportal   
            cy.visit(baseUrl);
        })
        cy.fixture('studentRegistrationFrom').then(function(data){
           inputValue =data
        })
    })
    beforeEach(function(){
        
    })
    describe('DMS_User_Module_TestCases', function(){
        it('TC01-Verify the Page is loaded properlly or not', function(){
            cy.url().should('include', 'demoqa')
            frompage.toolqaimg().should('be.visible')
            cy.scrollTo(0, 200)
        })
        it('TC02-click on froms and practice from', function(){
            frompage.froms().should('be.visible')
            frompage.froms().click()
            frompage.practiceFrom().should('be.visible')
            frompage.practiceFrom().click()
            cy.url().should('include', 'automation-practice-form')
        })
        it('TC03-check Student Registration Form is open or not', function(){
            frompage.StudentRegistrationForm().should('be.visible')
        })
        it('Tc04- Enter the firstName and lastName inside the filed', function(){
            frompage.firstName().clear().type(inputValue.firstName)
            frompage.lastName().clear().type(inputValue.lastName)
            frompage.email().clear().type(inputValue.email)
            frompage.gender().click().should('be.visible')
            frompage.mobile().clear().type(inputValue.phone)
        })
        it('TC05-Date of Birth', function(){
            
        })
    })
})
