///<reference types="cypress"/>
describe('File upload Test', function(){
    it('File upload using cypress npm tool', function(){
       cy.visit('https://fineuploader.com/demos.html')
       const yourfixturepath ='Logo.png';
       cy.get('div.container.marketing.demo-list:nth-child(2) div.row-fluid div.span10 section.demo-section:nth-child(3) div:nth-child(7) div.qq-uploader-selector.qq-uploader div.buttons div.qq-upload-button-selector.qq-upload-button > input:nth-child(2)').attachFile(yourfixturepath)
       cy.get('#trigger-upload').contains('Upload').click()
       cy.get('.qq-upload-file-selector').should('be.visible')


    })
})