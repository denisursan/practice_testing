/// <reference types="cypress" />
describe('Test Contact Us form via WebdriverUni', () => {
    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/')
    })
    it('Should be able to submit a succesful submission via contact us form', () => {
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Smith')
        cy.get('[name="email"]').type('joesmith@gmail.com')
        cy.get('[name="message"]').type('TestMessage')
        cy.get('[type="submit"]').click()
        cy.get('#contact_reply > h1').should('have.text','Thank You for your Message!')
        cy.get('#fountainG').should('be.visible')
        cy.url().should('eq','https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
    });
    it('Should not be able to submit a succesful submission via contact us form as all field are required', () => {
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Smith')
        cy.get('[name="message"]').type('TestMessage')
        cy.get('[type="submit"]').click()
        cy.contains('Error: all fields are required').should('be.visible')
    });
    
})