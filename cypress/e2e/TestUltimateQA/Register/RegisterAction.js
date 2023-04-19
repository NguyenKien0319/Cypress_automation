// import { RgtPage } from "../../PageObject/RegisterTestQAPageObject";
// const register = new  RgtPage()
export class Register{
  beforEach(){
    cy.viewport(1280,800)
  }
  
  loadRegisterPage(){
    cy.visit('https://demo.automationtesting.in/Register.html')
    cy.get("h1")
      .should("contain", "Automation Demo Site ")
      .should("be.visible")
  };      

  chooseGender(){
    cy.get('input[value="FeMale"]').click()
    cy.get('input[value="FeMale"]')
      .should('be.checked')
      .and('not.be.disabled')
  }
  selectHobbies(){
    cy.get('input[value="Cricket"]').check()
    cy.get('input[value="Cricket"]').should('not.be.disabled')
  }
  selectLanguage(){
    cy.get("#msdd").click()
    cy.get('.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content.ui-corner-all')
      .contains('Arabic').click()
    cy.get('div[class="container center"]')
      .click(5, 60, { force: true })
      }
  selectSkill(){
    cy.get('.col-md-4.col-xs-4.col-sm-4 > select#Skills' )
      .select('Adobe InDesign')
      .should('have.value','Adobe InDesign')
  }
  selectCountry() {
    cy.get('span[class="selection"]').click()
    cy.get('input[type="search"]').type('Hong Kong')
    cy.get('span[class="select2-results"]'). should('have.length',1);
    cy.get('span[class="select2-results"]').each(($el) => {
       if($el.text() ==="Hong Kong"){
          cy.wrap($el).click()
      }})
    cy.get('#select2-country-container')
      .contains('Hong Kong')
      .should('be.visible')
   }
  }