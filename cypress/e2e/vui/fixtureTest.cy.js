//import { get } from "cypress/types/lodash"


describe('Create a poll',  () => {
  beforeEach('Create a new poll with fixture', () => {
    cy.visit('https://strawpoll.com/create/')
  })
  it('Create a poll with a photo file', () => {    
    cy.get('input[name="title"]').type('hellohello')
    cy.xpath('//body/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/button[1]').click()
    cy.xpath("//input[@id='upload']").attachFile('vui.jpg')
    cy.get('input[placeholder="Option 1"]').type('1')
    cy.get('input[placeholder="Option 2"]').type('2')
    cy.get('button[type="submit"]').click()
    cy.get('h1').contains('hellohello').should('be.visible') 
    })
  it('create a new poll with a pdf file',() => {
    cy.get('input[name="title"]').type('hellothuyvui')
    cy.xpath('//body/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/button[1]').click()
    cy.xpath("//input[@id='upload']").attachFile('Rotating_earth_(large).gif')
    cy.get('input[placeholder="Option 1"]').type('choose')
    cy.get('input[placeholder="Option 2"]').type('choose 2')
    cy.get('button[type="submit"]').click()
    cy.get('h1').contains('hellothuyvui').should('be.visible') 
  })
})
