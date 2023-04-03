import "cypress-iframe";
describe("Mouse Operations", () => {
  it("MouseHover", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get(
      "body > div:nth-child(6) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)"
    ).should("not.be.visible");
    cy.get("#mousehover").should("be.visible");
    cy.wait(5000);
    cy.get("#mousehover").trigger("mouseover");
    // cy.get(
    //   "body > div:nth-child(6) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)"
    // ).should("be.visible");
  });

  it("MouseHover", () => {
    cy.visit("https://demo.opencart.com/");
    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("not.be.visible");
    cy.get(".nav > :nth-child(1) > .dropdown-toggle")
      .trigger("mouseover")
      .click();
    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("be.visible");
  });
  it("Right click", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    //Appraoch1
    // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
    // cy.get(
    //   ".context-menu-item.context-menu-icon.context-menu-icon-copy"
    // ).should("be.visible");

    //Appraoch2
    cy.get(".context-menu-one.btn.btn-neutral").rightclick();
    cy.get(
      ".context-menu-item.context-menu-icon.context-menu-icon-copy"
    ).should("be.visible");
  });

  it("Double click", () => {
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
    );
    cy.frameLoaded("#iframeResult"); //Load the frame

    // trigger
    // cy.iframe("#iframeResult")
    //   .find("button[ondblclick='myFunction()']")
    //   .trigger("dblclick");
    // cy.iframe("#iframeResult")
    //   .find("#field2")
    //   .should("have.value", "Hello World!");

    // dbclick
    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .dblclick();
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");
  });
  it("drag and drop using plugin", () => {
    cy.visit(
      "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    cy.get("#box6").drag("#box106", { force: true });
  });
  it.only("scrolling page", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#gf-BIG").scrollIntoView({ duration: 2000 });
  });
});
