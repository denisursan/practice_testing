import AutoStore_Homepage_Po from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO'
import AutoStore_HairCare_Po from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'

describe('add multiple items to basket', () => {
    const homePageAutoStore = new AutoStore_Homepage_Po();
    const hairCareAutoStore = new AutoStore_HairCare_Po();
    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data
        })
    })
    beforeEach(() => {
        homePageAutoStore.navigateToHomepage()
        homePageAutoStore.clickonHairCareLink()
    })
    it('Add specific items to basket', () => {
       hairCareAutoStore.addHairCareProductsToBasket()
    })
})
