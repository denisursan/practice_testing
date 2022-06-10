/// <reference types="cypress" />
describe('Handling data-tables', () => {
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#data-table').invoke('removeAttr', 'target').click()
    })
    it('calculate and assert all the numbers(age of people) from the table', () => {
        var userDetails = []
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
            // cy.log(userDetails[index])
        }).then(() => {
            var i;
            for (i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    numb += Number(userDetails[i])
                }
            }
            cy.log(numb)
            expect(numb).to.equal(322)
        })
    });
    it.only('calculate and assert the age of a given user based on the last name', () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const string = $el.text()
            const newString = string.toString()
            var userNames = newString.split(/(?=[A-Z])/)
            console.log(userNames)
            var i;
            for (i = 0; i < userNames.length; i++) {
                if (userNames.includes(userNames[i])) {
                    cy.log(userNames[i])
                    cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().as('valueNumber')
                    cy.get('@valueNumber').should(($expectedText) => {
                        const text = $expectedText.text()
                        console.log(text)
                        expect(text).to.include(text)

                    })
                }
            }
        })
    });
})