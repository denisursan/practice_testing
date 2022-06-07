describe('Test Contact Us form via WebdriverUni', () => {
    it('Should be able to submit a succesful submission via contact us form', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.url().should('include','contactus')
        cy.go('back')
        cy.reload()
       cy.reload(true) //reload without using cache
       cy.go('forward')
       cy.url().should('include','contactus')
    });

    it('Should be able to click on to do list and to go back to main page', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#to-do-list').invoke('removeAttr','target').click()
        cy.url().should('include','To-Do-List')
        cy.go('back')
       cy.url().should('include','https://webdriveruniversity.com/')
    }); 
})