describe('Test Contact Us form via Automation Test Store', () => {
    before(function(){
        cy.fixture("userDetails").as("user")
    })
    it('Should be able to submit a succesful submission via contact us form', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("@user").then((user)=>{
            cy.get('.info_links_footer li').eq(4).click()
            cy.get('#ContactUsFrm_first_name').type(user.firstName)
            cy.get('#ContactUsFrm_email').type(user.email)
            cy.get('#ContactUsFrm_enquiry').type('message')
        })
        cy.get('[title="Submit"]').click()
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=content/contact/success')
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log("Test has completed")
    });
}) 