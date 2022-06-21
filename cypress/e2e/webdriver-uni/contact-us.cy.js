import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import ContactUs_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types="cypress" />


describe('Test Contact Us form via WebdriverUni', () => {
    const homePage_PO = new Homepage_PO();
    const contactUs_PO = new ContactUs_PO()
    
    beforeEach(() => {
        homePage_PO.visitHomePage();
        homePage_PO.clickOn_ContactUs_Button()
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    })
    it.only('Should be able to submit a succesful submission via contact us form', () => {
        contactUs_PO.contactForm_Submission(Cypress.env("firstName"), data.lastName, data.email, data.body, "h1", 'Thank You for your Message!')
        cy.get('#fountainG').should('be.visible')
        cy.url().should('eq', 'https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
    });
    it('Should not be able to submit a succesful submission via contact us form as all field are required', () => {
        contactUs_PO.contactForm_Submission(data.firstName, data.lastName, " ", data.body, "body", 'Error: Invalid email address')
        //cy.webdriverUni_ContactForm_Submission(data.firstName, data.lastName, " ", data.body, "body", 'Error: Invalid email address',)
    });

}) 