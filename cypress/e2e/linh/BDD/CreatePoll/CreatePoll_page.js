export class CreatePoll {
  input_Emaill = "#email";
  input_Password = "#password";
  button_Submit = "button[type='submit']";
  button_CreatePoll = "//a[contains(text(),'Create Poll')]";
  input_Title = "#title";
  input_option1 = "#option-0";
  input_option2 = "#option-1";

  loginHomepage() {
    cy.viewport(1200, 800);
    cy.visit("https://strawpoll.com/login/");
    cy.get(this.input_Emaill).type("camlinh15172@gmail.com");
    cy.get(this.input_Password).type("12345678");
    cy.get(this.button_Submit).click();
  }
  clickButtonCreatePoll() {
    cy.xpath(this.button_CreatePoll).click();
  }
  enterTitle(title) {
    cy.get(this.input_Title).type(title);
  }
  selectMutipleChoice() {
    cy.get("#voting-type").click();
    cy.get("ul[role='listbox']").contains("Multiple choice").click();
  }
  selectMutipleChoice() {
    cy.get("#voting-type").click();
    cy.get("ul[role='listbox']").contains("Multiple choice").click();
  }
  fillOptions(option1, option2) {
    cy.get(this.input_option1).type(option1);
    cy.get(this.input_option2).type(option2);
  }
  clickButtonSubmit() {
    cy.get(this.button_Submit).click();
  }
  verifyLoginCreateSuccessfully(title) {
    cy.get("H1").should("contain", title);
  }
}
