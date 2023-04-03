describe("Element interaction", () => {
  it("should be able to complete the form", () => {
    cy.visit("/login");
    cy.xpath('//input[@name="username"]').type("tomsmith");
    cy.xpath('//input[@name="password"]').type("SuperSecretPassword!");
    cy.xpath('//button[@class="radius"]').click();
    cy.title().should("eq", "The Internet");
  });
});
