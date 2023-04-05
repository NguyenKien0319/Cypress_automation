import Login from "../../PageObject/LoginPage";
describe("POM", () => {
  it("login sucessfully", () => {
    cy.visit("https://strawpoll.com/login/");
    const ln = new Login();
    ln.setEmail("camlinh15172@gmail.com");
    ln.setPassword("12345678");
    ln.clickSubmit();
    ln.verifyLogin("Dashboard");
  });

  //using POM with fixture
  it("login sucessfully", () => {
    cy.visit("https://strawpoll.com/login/");
    cy.fixture("login1").then((data) => {
      const ln = new Login();
      ln.setEmail(data.email);
      ln.setPassword(data.password);
      ln.clickSubmit();
      ln.verifyLogin(data.expected);
    });
  });
});
