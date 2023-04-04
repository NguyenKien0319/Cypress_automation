describe('iframe', () => {
  beforeEach('Go to the homepage ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(100)
  })
  it('Iframe Home page display on the home page',() => {
    cy.get('#courses-iframe').should('be.visible')
  })
  it('Navigate to "All Access plan" page when clicking on the All Access plan tab on the Nav bar of Home page')
})