///<reference types="cypress-xpath"/>

import { login } from "../support/pageObjects/login.page";
const testData = require("../fixtures/testData.json");
describe('Read data from csv', function(){
    testData.forEach((testDataRow) => {
        const data = {
          username: testDataRow.username,
          password: testDataRow.password
        };
        context(`Generating a test for ${data.username}`, () => {
          it("should fail to login for the specified details", () => {
            login.visit();
            login.username.type(data.username);
            login.password.type(`${data.password}{enter}`);
            login.errorMsg.contains("Your username is invalid!");
            login.logOutButton.should("not.exist");
          });
        });
      });
    
})