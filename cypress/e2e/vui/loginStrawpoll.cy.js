describe('Login page Strawpoll ',() => {
  it('Login to Strawpoll page with email ',() =>{
   cy.visit('https://strawpoll.com/login')
   cy.get('input[type="email"]').type('vuivothithuy@gmail.com')
   cy.get('input[name="password"]').type('overthemoon123')
   cy.get('button[type="submit"] span[class="relative flex items-center justify-center"]').click()
  }) 
  
})
