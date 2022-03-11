describe("visiting webpage using cypress json setting", () => {
   before('BeforeBlock', function(){
       console.log('Before_Block')
   })
   after('AftereBlock', function(){
    console.log('Aftere_Block')
})
beforeEach('before_Each',function () {
    cy.log("before each" );
  });
    afterEach('Afeter_Each',function () {
      cy.log("after each" );
    });

    it("dummy block 1", () => {
      cy.log("1st it block");
     
    })
    it("dummy block 2", function() {
      cy.log("2nd it block");
    })
  })