describe("Test login", () => {
  it("login sucessfully", () => {
    cy.visit("https://strawpoll.com/login/");
    cy.xpath('//input[@id="email"]').type("camlinh15172@gmail.com");
    cy.xpath('//input[@id="password"]').type("12345678");
    cy.xpath('//button[@type="submit"]').click();
    cy.title().should("eq", "Dashboard - Account Overview - StrawPoll.com");
  });
});
