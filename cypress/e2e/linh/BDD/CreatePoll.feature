Feature: Create a poll
    Scenario: Create a Poll - Multiple choice
        Given A user login into homepage
        When A user click on create poll
        And A user fill title
        And A user select multiple choice
        And A user fill answer options
        And A user click on the Create poll button
        Then A user create poll successful