describe("Alerts", () => {
  it("Js Alerts", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.xpath('//input[@id="alertbtn"]').click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains(
        "Hello , share this practice page and share your knowledge"
      );
    });
  });

  it("Js confirm alert", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.xpath('//input[@id="confirmbtn"]').click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("Hello , Are you sure you want to confirm?");
    });
  });

  it("Js confirm alert - cancel", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.xpath('//input[@id="confirmbtn"]').click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("Hello , Are you sure you want to confirm?");
    });
    cy.on("windown:confirm", () => false); //cypress close alert windown using cancel button
  });

  it("Js confirm alert - Ok", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.xpath('//input[@id="confirmbtn"]').click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("Hello , Are you sure you want to confirm?");
    });
    cy.on("windown:confirm", () => true); //cypress close alert windown using ok button
  });

  it("Js Prompt alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("linh");
    });
    cy.xpath('//button[@onclick="jsPrompt()"]').click();
    cy.get("#result").should("have.text", "You entered: linh");
  });

  it("Js Prompt alert - cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("linh");
    });
    cy.xpath('//button[@onclick="jsPrompt()"]').click();

    cy.on("windown:confirm", () => false);

    cy.get("#result").should("have.text", "You entered: linh");
  });
});
