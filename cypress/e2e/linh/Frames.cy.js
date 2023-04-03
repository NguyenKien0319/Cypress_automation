import 'cypress-iframe'
describe('Handling frames', () => {
    it('appraoch1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        const iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type('welcom to linh {ctrl+a}')
        cy.get('[aria-label="Bold"]').click()

    })

    it('appraoch2 - by using custom command', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.getIframe('#mce_0_ifr').clear().type('welcom to linh {ctrl+a}')
        cy.get('[aria-label="Bold"]').click()

    })

    it('appraoch3 - by using cypress - ifram plugin', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr');   //load the frame
        cy.iframe('#mce_0_ifr').clear().type('welcom to linh {ctrl+a}')
        cy.get('[aria-label="Bold"]').click()
    })
})