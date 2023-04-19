import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

import Practice from "./Practice";


Given ('I navigate to the Login page', () => {
  Practice.loadLoginPage()
})
When('I type email and password',() => {
 Practice.typeUser()
})
When('I click on submit button',()=> {
 Practice.clickButton()
})
Then('I can see the Homepage',() =>{
  Practice.verifyHomepage()
})

// Given ('I navigate to the Login page', () => {
//   cy.visit('https://strawpoll.com/login')
//  })
//  When('I type right email and wrong password',() => {
//    cy.get('input[type="email"]').type('vuivothithuy@gmail.com')
//    cy.get('input[name="password"]').type('overthemoo')
//  })
//  When('I click on submit button',()=> {
//    cy.get('button[type="submit"] span[class="relative flex items-center justify-center"]').click()
//  })
//  Then(' Access is denied',() =>{
//    cy.get('h3').should('eq','Invalid email address/password.').should('be.visible')
//  })
 


