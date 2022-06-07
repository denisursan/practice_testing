/// <reference types="cypress" />
describe('Handling checkboxes and radio buttons', () => {
    it('Verify checkboxes via webdriveruniversity', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(3) > input').check().as('option-1')   
        cy.get('@option-1').check().should('be.checked')   
     });

     it('uncheck option 3', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#checkboxes > :nth-child(5) > input').uncheck().should('not.be.checked')
     });
     it('check multiple checkboxes', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
       cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked')
     });

})