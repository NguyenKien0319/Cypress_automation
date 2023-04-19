import { defaults } from "cypress/types/lodash"

const url = 'https://strawpoll.com/login'

class Practice{
 loadLoginPage(){
    cy.viewport(1280,800)
    cy.visit(url)
    cy.get('input[name="email"]').should('be.visible')
    
 }
  typeUser(userInfor){
    userInfor.hashes().forEach(row =>{
    this.typeUser.typeEmail(row.email)
    this.typeUser.typePassword(row.password)
    })
  }
  clickButton(){
    cy.get('button[type="submit"] span[class="relative flex items-center justify-center"]').click()
  }
  verifyHomepage(){
    cy.get('img[class="h-12 w-12 rounded-full"]').should('be.visible')
  }
}
export default Practice;
