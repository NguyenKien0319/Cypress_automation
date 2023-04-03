import "cypress-file-upload";
describe("File Uploads", () => {
  it("single file Upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("1.PDF");
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });
  it("File Upload - rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "1.PDF",
      fileName: "myfile.pdf",
    });
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });
  it("File Upload - Drap and drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("1.PDF", {
      subjectType: "drag-n-drop",
    });
    cy.wait(5000);
    cy.get("#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span").contains("1.PDF");
  });
  it("Multiple file Upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile(["1.PDF", "2.PDF"]);
    cy.wait(5000);
    cy.get(":nth-child(6) > strong").should("contain.text", "Files You Selected:");
  });
  it.only("Multiple file Upload", () => {
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
    cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile("1.PDF");
    cy.wait(5000);
    cy.get(".smart-item-name", { includeShadowDom: true }).contains("1.PDF");
  });
});
