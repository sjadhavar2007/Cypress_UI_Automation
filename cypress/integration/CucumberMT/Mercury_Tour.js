///<reference types="cypress"/>
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
//const url = "http://demo.guru99.com/test/newtours/";
var headerInfo;
before(function(){
    cy.fixture('CucumberMT').then(function(data){
        headerInfo= data
    })
})
Given('open the url of mercury tour site', function(){
    cy.visit(headerInfo.url)
})
When('Enter the Username', function(data1){
    data1.hashes().forEach(element => {
        cy.get('input[name="userName"]').clear().type(element.username)
    });
})
When('Enter the Password', function(data2){
    data2.hashes().forEach(element =>{
        cy.get('input[name="password"]').clear().type(element.password)
    })
})
And('Click on submit button', function(){
    cy.get('input[name="submit"]').click()
})
Then('click on sign in button again', function(){
    cy.get('[width="67"] > a').click()
})
