/// <reference types ="cypress"/>

class HomePage {
  enterURL() {
  cy.visit("https://qaautomationlabs.com/");
  }
  validateMenus(menus) {
  cy.contains(menus);
  return this;
  }
  verifyPageTitle() {
  return cy.title().should("eq", "About Us — QAAutomationLabs");
  }
  }
  const homepage = new HomePage();
  export default homepage;