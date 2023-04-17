const faker = require("faker");
export class Register {
  input_Name = "#name";
  input_Email = "#email";
  input_Password = "#password";
  button_Swich = "#terms-privacy";
  button_SignUp = "button[type='submit']";
  error_Email = "[x-text='emailError']";
  name = `user_${faker.random.number()}`;
  email = faker.internet.email();
  password = "12345678";

  enterName() {
    cy.get(this.input_Name).type(this.name);
  }
  enterEmail() {
    cy.get(this.input_Email).type(this.email);
  }
  enterEmailAlreadyExist() {
    cy.get(this.input_Email).type("camlinh15172@gmail.com");
  }
  enterPassword() {
    cy.get(this.input_Password).type(this.password);
  }
  clickButtonSingUp() {
    cy.get(this.button_SignUp).click();
  }
  clickButtonSwich() {
    cy.get(this.button_Swich).click();
  }
  verifyRegisterSuccessfully() {
    cy.title().should("eq", "Activate Your Account - StrawPoll.com");
  }
  verifyErrorEmail() {
    cy.get(this.error_Email).should("have.text", "Email address already taken.");
  }
}
