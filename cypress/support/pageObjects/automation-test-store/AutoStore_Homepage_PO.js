
class AutoStore_Homepage_Po{

  navigateToHomepage(){
      cy.visit('https://automationteststore.com/')
  }

  clickonHairCareLink(){
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
  }

}

export default AutoStore_Homepage_Po;