const { expect } = require("chai")

const { describe } = require("mocha")

describe('Popup alert', () => {
  beforeEach('Navigate to the page and type name into the form name',() => { 
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')   
    cy.get('input[placeholder="Enter Your Name"]').type('thuy vui') 
  })
  it('Popup alert display when clicking on alert button', () => {
    cy.get('input[value="Alert"]').click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).equal('Hello thuy vui, share this practice page and share your knowledge')
    })
  })
  it('Popup confirm display when clicking on alert button', () => {
    cy.get('input[value="Confirm"]').click()
    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).equal('Hello thuy vui, Are you sure you want to confirm?')
      return false
    })
  }) 
})


describe('Open window',() => {
  it('Open new browser window when clicking on "Open windown" button', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#openwindow').click().window()
  })
})

describe('Open tab',() => {
  it('Open new tab when clicking on hyper-link button', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').click().url('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('[class="blinkingText"]').should('eq', 'Free Access to InterviewQues/ResumeAssistance/Material')
  })
})

// describe('Mouse Hover', () => {
//   it('Two options display when hover the mouse over the button "Mousehover"', () => {
//     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//     cy.get('#mousehover').trigger('Mouse Hover')
//     cy.get(' body > div:nth-child(6) > div > fieldset > div > div > a:nth-child(1)').eq('Top').should('be.visible')    
//   })
// }) 

