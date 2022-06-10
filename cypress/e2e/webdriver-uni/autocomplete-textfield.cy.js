describe('Test autocomplete textfield', () => {
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/')
    })
    it('Should be able to select a suggestion from field', () => {
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()
        cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const productToSelect = 'Avacado';
            if (prod === productToSelect) {
                $el.trigger('click')
                cy.get('#myInput').should('have.value',productToSelect)
                cy.get('#submit-button').click()
                cy.url().should('include',productToSelect)
            }
        }).then(()=>{
            cy.get('#myInput').type('g')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text()
                const productToSelect = 'Garlic';
                if (prod === productToSelect) {
                    $el.trigger('click')
                    cy.get('#myInput').should('have.value',productToSelect)
                    cy.get('#submit-button').click()
                    cy.url().should('include',productToSelect)
                }
            })
        })
    });
})