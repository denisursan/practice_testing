class ContactUs_PO{
    contactForm_Submission(firstName, lastName, email, body, $selector, textToLocate){
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('[name="message"]').type(body)
        cy.get('[type="submit"]').click()
        cy.get($selector).contains(textToLocate,{timeout:6000})
    }
}

export default ContactUs_PO;