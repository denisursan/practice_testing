
class AutoStore_HairCare_Po{
addHairCareProductsToBasket(){
    globalThis.data.productName.forEach(function (element) {
        cy.addProductToBasket(element).then(()=>{
            debugger
        })
    })
    cy.get('.cart_total').should('include.text', '$46.45')
}
  }
  
  export default AutoStore_HairCare_Po;