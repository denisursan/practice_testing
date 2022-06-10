describe('Test amouse actions', () => {
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

    })
    it('Scroll elemtns into view', () => {
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()

    });
    it('should be able to drag and drop an item ', () => {
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.get('#droppable p').should('have.css', 'background-color', 'rgb(244, 89, 80)')
        cy.get('#droppable > p').should('have.text', 'Dropped!')

    });

    it('should be able to double click on an element', () => {
        cy.get('#double-click').dblclick()
            .should('have.css', 'background-color', 'rgb(147, 203, 90)')
    });

    it.only('should be able to hold click on an element', () => {
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($element) => {
            cy.get($element).should('have.css', 'background-color', 'rgb(0, 255, 0)')
            cy.get($element).should('have.text', 'Well done! keep holding that click now.....')
        })
        cy.get('#click-box').trigger('mouseup', { which: 1 }).then(($element) => {
            cy.get($element).should('have.css', 'background-color', 'rgb(255, 99, 71)')
            cy.get($element).should('have.text', 'Dont release me!!!')
        })
    });
})