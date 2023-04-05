describe('Create a poll with out fixture',  () => {
  it('create a poll' ,() => {
  cy.visit('https://strawpoll.com/create/')
  cy.get('input[name="title"]').type('heoheo')
  cy.get('input[placeholder="Option 1"]').type('1')
  cy.get('input[placeholder="Option 2"]').type('2')
  cy.get('button[type="submit"]').click()
  cy.get('h1').contains('heoheo').should('be.visible') 
})
})