describe('Chrome web security', () => {
    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/')
    })
    it('Should be able to submit a succesful submission via contact us form', () => {
    //     cy.visit('https://webdriveruniversity.com/')
    //     //cy.get('#contact-us').invoke('removeAttr','target').click()
    //    cy.visit('https://www.google.com')
    });
    it('Should not be able to submit a succesful submission via contact us form as all field are required', () => {
        cy.get('#automation-test-store').invoke('removeAttr','target').click()
    });
})