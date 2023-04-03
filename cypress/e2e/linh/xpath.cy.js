describe("xpathlocator", () => {
  it("xpath", () => {
    cy.visit("https://www.lazada.vn/");
    cy.xpath("//input[@id='q']").type("T-Shirts"); //id tag is optional
    cy.xpath("//button[contains(text(),'Tìm kiếm')]").click();
    cy.get(".JrAyI").contains("T-Shirts"); // Assertion
  });
});
