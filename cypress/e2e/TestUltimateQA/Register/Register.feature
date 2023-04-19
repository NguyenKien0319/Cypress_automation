Feature: Register new account

Scenario: I want to register a new account
          I type informations
          I click submit

          Given  I navigate to the register page
          # When  I fill my informations into the form
          #       |firstName| lastName|address|emailAddress| phone|
          #       |vui       | vo       |Danang |vtthuyvui2000@gmail.com|0123456789|
          And   I choose my gender
          And   I choose my hobbies
          And   I choose my language
          And   I select my skill
          And   I select my country
          And   I choose my date of birth
          And   I type password and confirm password
                |password| confirm password|
                |thuyvui|thuyvui|
          And  I click on submit button
          Then I check my account
