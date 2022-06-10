const { expect } = require("chai");
/// <reference types="cypress" />
describe('Alias and invoke', () => {
    beforeEach(()=>{
        cy.visit('https://automationteststore.com/')
    })
    it('validate a specific hair product', () => {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productName')
        cy.get('@productName').its('length').should('be.gt', 5)
        cy.get('@productName').should('eq', 'Seaweed Conditioner')
    });
    it('validate a specific hair product', () => {
        cy.get(".thumbnail").as('productName')
        cy.get('@productName').its('length').should('eq', 16)
        cy.get('@productName').find('.productcart').invoke('attr', 'title').should('eq', 'Add to Cart')
    });
    it.only('Calculate total of normal and sale products', () => {
        cy.get(".thumbnail").as('productName')
        // cy.get('@productName').find('.oneprice').each(($el) => {
        //     cy.log($el.text())
        // })
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal;
            
            console.log("item price is ", itemPrice)
            cy.log("Non sale price items total" + itemsTotal)
        })
        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPriceTotal = 0;
            var saleItemPriceTotal = $linkText.split('$');
            var i;
            for (i = 0; i < saleItemPriceTotal.length; i++) {

                saleItemsPriceTotal += Number(saleItemPriceTotal[i])
            }
            itemsTotal += saleItemsPriceTotal

            cy.log("Sale price items total" + saleItemsPriceTotal)
            cy.log('Total price for all the products is ' + itemsTotal + "$")
        })
        .then(()=>{
            expect(itemsTotal).to.equal(648.5)
        })
    })
});
 