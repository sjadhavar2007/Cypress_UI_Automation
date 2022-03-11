describe('Login Functionality', function(){
    it('Mercury-Tours', function(){
        cy.visit('http://demo.guru99.com/test/newtours/')
        cy.get('input[type="text"]').type('ZZZZZ')
        cy.get('input[type="password"]').type('zzzzz')
        cy.get('input[type="submit"]').click()

    })
})