describe('Iterate over elements', () => {
    beforeEach(()=>{
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

    })
    it('Log informations from the products', () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index) => {
            cy.log("Index: " + index + " : " + $el.text())

        })
    });
    it('Add specific product to basket', () => {
      cy.selectProduct('Pantene Pro-V Conditioner, Classic Care')
    });
    it.only('Add another specific product to basket', () => {
      cy.selectProduct('Seaweed Conditioner')
    });
    
    it('Add another specific product to basket', () => {
      cy.selectProduct('Curls to straight Shampoo')
    });
})