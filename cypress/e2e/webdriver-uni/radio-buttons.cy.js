/// <reference types="cypress" />
describe('Verify radio btnns via webdriveruni', () => {
   beforeEach(()=>{
      cy.visit('https://webdriveruniversity.com/')
      cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

  })
    it('Check specific radiobuttons', () => {
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
     });
     it.only('validate the states of the specific radio buttons', () => {
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')
        cy.get("[value='cabbage']").should('be.disabled')
     });
})