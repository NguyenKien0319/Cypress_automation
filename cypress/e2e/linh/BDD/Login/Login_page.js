export class Login {
  input_Emaill = "#username";
  input_Password = "#password";
  button_Login = "input[name='login']";
  error_msg = ".woocommerce-error";
  enterEmail(email) {
    cy.get(this.input_Emaill).type(email);
  }
  enterPassword(password) {
    cy.get(this.input_Password).type(password);
  }
  clickButtonLogin() {
    cy.get(this.button_Login).click();
  }
  verifyLoginSuccessfully() {
    cy.title().should("eq", "My Account – Automation Practice Site");
  }
  verifyErrorMsg() {
    cy.get(this.error_msg).should("be.visible");
  }
}
