describe('Table', () => {
  beforeEach('Navigate to practice page ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
    cy.wait(100) 
  })
  it('Verify table has enough the number of rows ', () => {
    cy.get('table[name="courses"] tr').should('be.have',11)
    cy.wait(100)
  })
  it('Verify table has enough the number of columns ', () => {
    cy.get('table[name="courses"] tr td').should('be.have', 3 )
    cy.wait(100)
  })
  it('Find a row ', () => {
    cy.contains('Selenium Webdriver with Java Basics + Advanced + Interview Guide')
    .parent('table[name="courses"] tbody tr ')
    .within(() => {
      // all searches are automatically rooted to the found tr element
      cy.get('td').eq('0','Rahul Shetty').should('be.visible')
      cy.get('td').eq('1','Selenium Webdriver with Java Basics + Advanced + Interview Guide').should('be.visible')
      cy.get('td').eq('2','30').should('be.visible')
    })
  })
})

describe('Fixed header table', () => {
  beforeEach('Navigate to practice page ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
   cy.wait(100) 
  })
  it('Row head is fixed when scroll table',() => {
    cy.get('table#product thead ').find('tr:first-child').should('be.visible')
    cy.get('.tableFixHead', {ensureScrollable: false}).scrollTo("bottom")
  })

  it('Check the value of the line Total Amount is same with the summary of the values in the Amount columns',() => {
    const items = [];
    cy.get('.tableFixHead>table>tbody> tr > td:nth-child(4)').each(($li) => {
      items.push(Number($li.text()));
    }).then(() => {
      const sums = items.reduce((acc, curr) => acc + curr, 0);
      cy.log(sums)
    })
  })
})
