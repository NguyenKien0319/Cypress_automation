Feature: Login feature 
          To access the site 
          As a user 
          I need to be able to login
Scenario: Login successfully
          Given I navigate to the Login page

          When I type email and password 
           |email        |password |
           |vtthuyvui2000|thuyvui2k|
          And I click on submit button
          Then I can see the Homepage

# Scenario: Login Fail
#           Given I navigate to the Login page
#           When I type right email and wrong password      
#           |email|password|
#           |vtthuyvui2000|thuyvui2k|
#           And I click on submit button
#           Then Access is denied