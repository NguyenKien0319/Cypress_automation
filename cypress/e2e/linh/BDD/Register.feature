Feature: Register
    Scenario: Register successful
        Given A user open register page
        When A user enter the name
        And A user enter the email address
        And A user enter the password
        And A user click agree
        And A user click on the Sign up button
        Then A user register successful
    Scenario: Register Unsuccessful - Email Already exist
        Given A user open register page
        When A user enter the name
        And A user enter the email address already exist
        And A user enter the password
        And A user click agree
        And A user click on the Sign up button
        Then A user will be receving a error message email already exist