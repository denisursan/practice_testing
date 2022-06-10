const { expect } = require("chai");
const chai = require('chai')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
/// <reference types="cypress" />
describe('Handle js alerts', () => {
    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/')
    })
    it('Confirm js alerts contains text', () => {
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return true;
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    });

    it('Confirm js alerts contains text and cancel it ', () => {
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    });
    it.only('Confirm js alerts contains text and stub it ', () => {
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(()=>{
            return true
        }).then(()=>{
            cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
        })

    });
})