///<reference types="cypress"/>

class Login{
   userName(){
    return cy.get('input[type="text"]')
   }
   passWord(){
       return cy.get('input[type="password"]')
   }
   submitButton(){
      const submitButton = cy.get('input[type="submit"]').contains('Submit')
      return submitButton
   }
}
export default Login