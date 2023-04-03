describe('Test login', () => {
    it('login sucessfully', () => {
        cy.visit('https://strawpoll.com/login/')
        cy.xpath('//input[@id="email"]').type('camlinh15172@gmail.com');
        cy.xpath('//input[@id="password"]').type('12345678');
        cy.xpath('//button[@type="submit"]').click();
        cy.title().should('eq', 'Dashboard - Account Overview - StrawPoll.com');
        
        let expName="Linh";
        cy.xpath('//span[@x-text="$store.user.displayname"]').then( (x) => {

            let actName = x.text()

            //BDD Style
            expect(actName).to.equal(expName)
            // expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName, expName)
            // assert.notEqual(actName, expName)

        })

    })
})