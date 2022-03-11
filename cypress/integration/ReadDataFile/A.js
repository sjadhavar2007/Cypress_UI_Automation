///<reference types="cypress"/>
var CsvData;
var InputFile = 'cypress\\fixtures\\csvData.csv'; 
var OutputFile= 'Read.json';
let csvToJson = require('convert-csv-to-json');

describe('Read data from csv file', function(){
    before(function(){
      cy.readFile(InputFile).then((data) => {
        CsvData= data
        console.log(CsvData)
        
        csvToJson.generateJsonFileFromCsv(InputFile,OutputFile);
        
        let json = csvToJson.getJsonFromCsv(InputFile);
        
        console.log(json)
        
        for(let i=0; i<json.length;i++){
        
          console.log(json[i]);
        }
        csvToJson.parseSubArray('*',',').getJsonFromCsv(InputFile);
       })
      })

     it('Read-Data', function(){
      console.log('it block')
     })
    
})
