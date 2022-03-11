describe('My Second test', function(){
it("Verify Mercury-Tours Website", function(){
    cy.visit("http://demo.guru99.com/test/newtours/")
    cy.get('input[type="text"]').type('QQQQQ')
    cy.get('input[type="password"]').type('qqqqq')
    cy.get('input[type="submit"]').contains('Submit').should('be.visible').click()
    
})
})