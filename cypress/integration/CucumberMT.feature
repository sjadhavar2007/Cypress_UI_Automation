
Feature: Mercury Login Page

    I want to login mercury tour site
    Scenario: open login function of Mercury Tour
    Given open the url of mercury tour site
    When Enter the Username
        | username |
        | QQQQQ |
    When Enter the Password
        | password |
        | qqqqq |
    And Click on submit button
    Then click on sign in button again