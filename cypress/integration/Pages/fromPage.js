///<reference types="cypress-xpath"/>

class frompage{

    toolqaimg(){
        var toolqaimg = cy.xpath('//img[@src="/images/Toolsqa.jpg"]')
        return toolqaimg;
    }

    froms(){
        var froms = cy.get('.category-cards > :nth-child(2)')
        return froms;
    }
    practiceFrom(){
        var practiceFrom = cy.get(':nth-child(2) > .element-list > .menu-list > #item-0')
        return practiceFrom;
    }
    StudentRegistrationForm(){
        var StudentRegistrationForm = cy.get('h5')
        return StudentRegistrationForm;
    }
    firstName(){
        var firstName = cy.get('#firstName')
        return firstName;
    }
    lastName(){
        var lastName = cy.get('#lastName')
        return lastName;
    }
    email(){
        var email = cy.get('#userEmail')
        return email;
    }
    gender(){
        var gender = cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
        return gender;
    }
    mobile(){
        var mobile =cy.get('#userNumber')
        return mobile;
    }
    dob(){
        var dob =cy.get('#dateOfBirthInput')
        return dob;
    }
}
export default frompage;