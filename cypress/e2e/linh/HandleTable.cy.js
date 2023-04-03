describe("Handle Table", () => {
  beforeEach("login", () => {
    cy.visit("https://demo.opencart.com/admin/");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get('button[type="submit"]').click();

    cy.get(".btn-close").click();

    cy.get("#menu-customer>a").click();
    cy.get("#menu-customer>ul>li:first-child").click();
  });

  it("Check number row & colum", () => {
    //row
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should(
      "have.length",
      "10"
    );
    //colum
    cy.get(
      'table[class="table table-bordered table-hover"]>thead>tr>td'
    ).should("have.length", "7");
  });

  it("Check cell data form specific row & colum", () => {
    cy.get(
      'table[class="table table-bordered table-hover"]>tbody tr:nth-child(2) td:nth-child(3)'
    ).contains("olaola@das.com");
  });

  it("Read all the row & colum data in the first page", () => {
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });

  it.only("Pagination", () => {
    let totalPages;
    cy.get(".col-sm-6.text-end").then((e) => {
      let mytext = e.text(); //Showing 1 to 10 of 11699 (1170 Pages)
      totalPages = mytext.substring(
        mytext.indexOf("(") + 1,
        mytext.indexOf("Pages") - 1
      );
      cy.log("Total number of page in table ===> " + totalPages);
    });
  });

  it("Pagination 2", () => {
    let totalPages = 5;
    for (let p = 1; p <= totalPages; p++) {
      if (totalPages > 1) {
        cy.log("Active page is ===> " + p);
        cy.get('ul[class="pagination"]>li:nth-child(' + p + ")").click();

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(
          ($row, index, $rows) => {
            cy.wrap($row).within(() => {
              cy.get("td:nth-child(3)").then((e) => {
                cy.log(e.text()); //email
              });
            });
          }
        );
      }
    }
  });
});
