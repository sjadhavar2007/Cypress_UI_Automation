///<reference types="cypress"/>
describe('Read data from csv file', function(){
    var CsvData;
    before(function(){
        cy.readFile('cypress\\fixtures\\csvData.csv')
        .then((data) => {
           cy.task('csvToJson', data).then((data) => {
                  console.log(CsvData)
              })
         })
        })

    before('ReadCSV', function(){
          //  cy.readFile('cypress\\fixtures\\csvData.csv')
        cy.readFile('cypress\\fixtures\\csvData.csv').then(function(data){
            CsvData = data;
            console.log(CsvData.Username)
            console.log(CsvData.Password)
            console.log(CsvData.Phone)
            console.log(CsvData.Address)
        })
    })

    
     it('Read-Data', function(){

    })
})
