describe("Check Ui Elemant", () => {
  it("Checking Radio Button", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    //visibility of Radio button
    cy.xpath('//input[@id="female"]').should("be.visible");
    cy.xpath('//input[@id="male"]').should("be.visible");

    //selecting radio buttons
    cy.xpath('//input[@id="female"]').check().should("be.checked");
    cy.xpath('//input[@id="male"]').should("not.be.checked");

    cy.xpath('//input[@id="male"]').check().should("be.checked");
    cy.xpath('//input[@id="female"]').should("not.be.checked");
  });

  it("Checking check box", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    //visibility of Radio button
    cy.xpath('//input[@id="monday"]').should("be.visible");

    //selecting single checkbox
    cy.xpath('//input[@id="monday"]').check().should("be.checked");

    //Unselecting checkbox
    cy.xpath('//input[@id="monday"]').uncheck().should("not.be.checked");

    //selecting all the checkbox
    cy.xpath('//label[@class="form-check-label"]//input[@type="checkbox"]')
      .check()
      .should("be.checked");

    //Unselecting all the checkbox
    cy.xpath('//label[@class="form-check-label"]//input[@type="checkbox"]')
      .uncheck()
      .should("not.be.checked");

    //Select first checkbox
    cy.xpath('//label[@class="form-check-label"]//input[@type="checkbox"]')
      .first()
      .check()
      .should("be.checked");

    //Select last checkbox
    cy.xpath('//label[@class="form-check-label"]//input[@type="checkbox"]')
      .last()
      .check()
      .should("be.checked");
  });
});
