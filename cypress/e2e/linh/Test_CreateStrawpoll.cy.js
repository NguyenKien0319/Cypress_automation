describe("Create Strawpoll", () => {
  it("Create Strawpoll sucessfully", () => {
    cy.visit("https://strawpoll.com");
    cy.xpath('//a[contains(text(),"Create a poll")]').click();
    cy.xpath('//input[@id="title"]').type("title123");
    cy.xpath('//input[@id="option-0"]').type("hello");
    cy.xpath('//input[@id="option-1"]').type("hi");
    cy.xpath('//button[@type="submit"]').click();
    cy.get("H1").should("contain", "title123");
  });
});
