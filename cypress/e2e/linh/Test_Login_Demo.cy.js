import Login from "../../PageObject/LoginPageDemo";
describe("POM", () => {
  const login = new Login();
  beforeEach(() => {
    cy.visit("https://practice.automationtesting.in/my-account/");
  });

  //using POM with fixture
  it("login sucessfully", () => {
    cy.fixture("login_Demo").then((data) => {
      login.enterEmail(data.password_valid);
      login.enterPassword(data.password_valid);
      login.clickButtonLogin();
      login.verifyLoginSuccessfully(data.expected);
    });
  });
  it("Login with empty username and valid password", () => {
    cy.fixture("login_Demo").then((data) => {
      login.enterEmail(" ");
      login.enterPassword(data.password_valid);
      login.clickButtonLogin();
      login.verifyErrorMsg();
    });
  });
  it("Login with valid username and empty password", () => {
    cy.fixture("login_Demo").then((data) => {
      login.enterEmail(data.username_valid);
      login.enterPassword(" ");
      login.clickButtonLogin();
      login.verifyErrorMsg();
    });
  });
  it("Login with incorrect username and incorrect password", () => {
    cy.fixture("login_Demo").then((data) => {
      login.enterEmail(data.username_invalid);
      login.enterPassword(data.password_invalid);
      login.clickButtonLogin();
      login.verifyErrorMsg();
    });
  });
  it("Login with correct username and invalid password", () => {
    cy.fixture("login_Demo").then((data) => {
      login.enterEmail(data.username_valid);
      login.enterPassword(data.password_invalid);
      login.clickButtonLogin();
      login.verifyErrorMsg();
    });
  });
  it("Login with empty username and empty password", () => {
    cy.fixture("login_Demo").then((data) => {
      login.enterEmail(" ");
      login.enterPassword(" ");
      login.clickButtonLogin();
      login.verifyErrorMsg();
    });
  });
});
