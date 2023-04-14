class Login {
  input_Eamil = "#email";
  input_Password = "#password";
  button_Login = "button[type='submit']";
  expected_Title = "#polls-title";
  setEmail(email) {
    cy.get(this.input_Eamil).type(email);
  }
  setPassword(password) {
    cy.get(this.input_Password).type(password);
  }
  clickSubmit() {
    cy.get(this.button_Login).click();
  }
  verifyLogin(expected) {
    cy.get(this.expected_Title).should("contain", expected);
  }
}
export default Login;
