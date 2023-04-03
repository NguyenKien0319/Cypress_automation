describe("DropDown", () => {
  it("Dropdown without select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.xpath('//select[@id="zcf_address_country"]')
      .select("Italy")
      .should("have.value", "Italy");
  });

  it("Auto sugget dropdown", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.xpath('//span[@id="select2-billing_country-container"]').click();
    cy.xpath('//input[@class="select2-search__field"]')
      .type("italy")
      .type("{enter}");
    cy.xpath('//span[@id="select2-billing_country-container"]').should(
      "have.text",
      "Italy"
    );
  });

  it("Dropdown without select", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.xpath('//input[@id="searchInput"]')
      .type("viet nam")
      .should("have.value", "viet nam");
    cy.get(".suggestion-title").contains("Vietnam Airlines").click();
  });

  it("Daynamic Dropdown", () => {
    cy.visit("https://www.google.com/");
    cy.get('input[name="q"]').type("cypress automation");
    cy.get("div.wM6W7d>span").should("have.length", 12);
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() === "cypress automation tutorial") {
        cy.wrap($el).click();
      }
    });
    cy.get('input[name="q"]').should(
      "have.value",
      "cypress automation tutorial"
    );
  });

  it("Dropdown without select", () => {
    cy.visit("https://strawpoll.com/create/");
    cy.xpath('//span[@x-text="selected.name"]').click();
    cy.xpath("//span[contains(text(),'Image poll')]")
      .click()
      .should("have.text", "Image poll");
  });
});
