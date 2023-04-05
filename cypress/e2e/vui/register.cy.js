describe('Login page Love space',() => {
  it('Navigate to ',() =>{
  cy.visit('https://www.rahulshettyacademy.com')
  cy.get('div[class="login-btn"] a[class="theme-btn register-btn"]').click()
  cy.origin('https://sso.teachable.com/secure/9521/identity/sign_up/email',()=>{
    cy.get('button[name="sign_up_method"][value="email"]').click()
    cy.get('input[name="name"]').type('Vo Thuy Vui')
    cy.get('input#user_email').type('vtthuyvui2000@gmail.com')
    cy.get('input#password').type('thuyvui2k')
    cy.get('input[type="submit"]').click()
  })
  })
})