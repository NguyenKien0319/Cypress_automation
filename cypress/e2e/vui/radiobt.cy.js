const { expect } = require("chai")

const { describe } = require("mocha")

describe('Navigate ', () => {
  beforeEach('Navigate to practice page',() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')})
  it('Navigate to document request page ', () => {
    cy.get('a[class="blinkingText"]').click()
    cy.get('h1').should('contain','Documents request')
})
  it('Navigate to home page when clicking on the logo', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('img[class="logoClass"]').click()
    cy.get('img[alt="First slide"]').should('be.visible')
   })
   it('Navigate to home page when clicking on Home button ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('a button').click()
    cy.get('img[alt="First slide"]').should('be.visible')
      })
})
describe('Dropdown',() => {
  it('User can select any option on the dropdown list', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
       cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
       cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')
       cy.get('#dropdown-class-example').select('Select').should('have.value','')
  })
})

describe('Radio button', () => {
  it('User can chose any option on the radio button ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('input[name="radioButton"]').click({multiple: true })
    cy.get("input[name='radioButton']")
    .should('be.checked')
    .and('not.be.disabled')
   })
})

describe('Suggestion text form',() =>{
  it('User can type contend into the suggestion text form ', () =>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('input[placeholder="Type to Select Countries"]').type('I have no idea').should('be.visible')
  })
})

describe('Checkbox',() =>{
  it('All checkboxes display checked when clicking on', () =>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('input[type="checkbox"]').check().should('be.checked')
  })
  it('A checkbox display checked when clicking on', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('input[type="checkbox"]').first().check().should('be.checked')
  })
})

    
