Feature: Login to Application
   As a valid user
   I want to login into Application

   Scenario: Login successfully
      Given A user open login page
      When A user enter the username "camlinh15172@gmail.com"
      And A user enter the password "camlinh@123"
      And A user click on the login button
      Then A user will be logged in

   Scenario: Login fail
      Given A user open login page
      When A user enter the username "camlinh15172@gmail.com"
      And A user enter the password "12345"
      And A user click on the login button
      Then A user will be receving a failed message

   Scenario: Login fail 2
      Given A user open login page
      When A user enter the username and password
         | username               |  | password |
         | camlinh15172@gmail.com |  | 123456   |
         | camlinh15172           |  | 123456   |
      And A user click on the login button
      Then A user will be receving a failed message

   Scenario: Login fail 3
      Given A user open login page
      When User enter "<username>" and "<password>"
      And A user click on the login button
      Then A user will be receving a failed message
      Examples:
         | username               |  | password |
         | camlinh15172@gmail.com |  | 123456   |
         | userfail               |  | passfail |
         | camlinh15172@gmail.com |  | 123456   |