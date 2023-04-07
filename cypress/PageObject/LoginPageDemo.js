class Login {
  input_Emaill = "#username";
  input_Password = "#password";
  button_Login = "input[value='Login']";
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
  verifyLoginSuccessfully(expected) {
    cy.title().should("eq", expected);
  }
  verifyErrorMsg() {
    cy.get(this.error_msg).should("be.visible");
  }
}
export default Login;
