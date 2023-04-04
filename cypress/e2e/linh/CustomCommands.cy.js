describe("Custom commands", () => {
  it("handling links", () => {
    cy.visit("https://demo.nopcommerce.com/");

    //direct - without using custom command
    // cy.get(
    //   "div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)"
    // ).click();
    // cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch");

    //using custom command
    cy.clickLink("Apple MacBook Pro 13-inch");
    cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch");
  });
  it("handling links Practice", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //using custom command
    cy.clickLink("Free Access to InterviewQues/ResumeAssistance/Material");
    cy.get("h1").should("have.text", "Documents request");
  });

  it("overwriting existing command", () => {
    cy.visit("https://demo.nopcommerce.com/");

    //using custom command
    cy.clickLink("APPLE MACBOOK Pro 13-inch");
    cy.get("h1").should("have.text", "Apple MacBook Pro 13-inch");
  });
  it.only("Login command", () => {
    cy.visit("https://demo.nopcommerce.com/");
    cy.clickLink("Log in"); // custom command
    cy.loginapp("camlinh15172@gmail.com", "test123"); // custom command
    cy.get(".ico-account").should("have.text", "My account");
  });
});
