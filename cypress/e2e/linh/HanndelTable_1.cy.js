describe("Handle Table", () => {
  beforeEach("login", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("Check number row & colum", () => {
    //row
    cy.get('div[class="tableFixHead"]>table>tbody>tr').should(
      "have.length",
      "9"
    );
    //colum
    cy.get('div[class="tableFixHead"]>table>thead>tr>th').should(
      "have.length",
      "4"
    );
  });

  it("Check cell data form specific row & colum", () => {
    cy.get(
      'div[class="tableFixHead"]>table>tbody tr:nth-child(2) td:nth-child(3)'
    ).contains("Bengaluru");
  });

  it("Read all the row & colum data in the first page", () => {
    cy.get('div[class="tableFixHead"]>table>tbody>tr').each(
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
    cy.get(".totalAmount").then((e) => {
      let mytext = e.text(); //Total Amount Collected: 296
      totalPages = mytext.substring(mytext.indexOf(":") + 1);
      cy.log("Total number of page in table ===> " + totalPages);
    });
  });

  /*it("Pagination 2", () => {
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
  });*/
});
