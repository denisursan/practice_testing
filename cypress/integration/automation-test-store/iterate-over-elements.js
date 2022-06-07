describe('Iterate over elements', () => {
    it('Log informations from the products', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index) => {
            cy.log("Index: " + index + " : " + $el.text())

        })
    });
    it('Add specific product to basket', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').each(($el) => {

            if ($el.text() === 'Pantene Pro-V Conditioner, Classic Care') {
                cy.wrap($el).click()
            } else {
                cy.log("product not found")
            }
        })
    });
})