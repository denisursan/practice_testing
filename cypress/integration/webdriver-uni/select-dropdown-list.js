/// <reference types="cypress" />
describe('interact with dropdown lists via webdriveruni', () => {
    it('select specific values via dropdown lists', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#dropdowm-menu-1').select('c#').should('have.value','c#')
        cy.get('#dropdowm-menu-1').find('[value="c#"]').should('be.selected')
     });
})