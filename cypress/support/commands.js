// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("selectProduct", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el) => {
        if ($el.text() === productName) {
            cy.wrap($el).click()
        }
    })
});
Cypress.Commands.add("addProductToBasket", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index,) => {
        if ($el.text() === productName) {
            cy.log($el.text())
            cy.wrap($el).click()
            cy.get('.cart').click()
            cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        }
    })
});
Cypress.Commands.add("webdriverUni_ContactForm_Submission", (firstName, lastName, email, body, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('[name="message"]').type(body)
    cy.get('[type="submit"]').click()
    cy.get($selector).contains(textToLocate)
})

Cypress.Commands.add("navigate_to_Checkboxes_page", () => {
    cy.visit("/")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
})



// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';