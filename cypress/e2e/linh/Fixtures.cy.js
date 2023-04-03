describe("MyTestSuite", () => {
  /*it("FixtureDemoTest", () => {
    cy.visit("https://strawpoll.com/login/");

    cy.fixture("login1").then((data) => {
      cy.get("#email").type(data.email);
      cy.get("#password").type(data.password);
      cy.get("button[type='submit']").click();
      cy.get("#polls-title").should("contain", data.expected);
    });
  });*/

  //Access through hook - for multiple it blocks
  let userdata;
  before(() => {
    cy.fixture("login1").then((data) => {
      userdata = data;
    });
  });
  it("FixtureDemoTest", () => {
    cy.visit("https://strawpoll.com/login/");

    cy.fixture("login1").then((data) => {
      cy.get("#email").type(userdata.email);
      cy.get("#password").type(userdata.password);
      cy.get("button[type='submit']").click();
      cy.get("#polls-title").should("contain", userdata.expected);
    });
  });
});
