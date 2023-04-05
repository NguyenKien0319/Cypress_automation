class Login {
  txtEamil = "#email";
  txtPassword = "#password";
  btnSubmit = "button[type='submit']";
  lblmsg = "#polls-title";
  setEmail(email) {
    cy.get(this.txtEamil).type(email);
  }
  setPassword(password) {
    cy.get(this.txtPassword).type(password);
  }
  clickSubmit() {
    cy.get(this.btnSubmit).click();
  }
  verifyLogin(expected) {
    cy.get(this.lblmsg).should("contain", expected);
  }
}
export default Login;
