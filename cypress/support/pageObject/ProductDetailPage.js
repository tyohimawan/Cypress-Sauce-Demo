import BasePage from '../BasePage';
import selectors from '../elements/productDetailPage.json';

class ProductDetailPage extends BasePage {
  getProductTitle() {
    return cy.xpath(selectors.productTitle);
  }

  getProductDescription() {
    return cy.xpath(selectors.productDescription);
  }

  getProductPrice() {
    return cy.xpath(selectors.productPrice);
  }

  addToCart() {
    this.clickElement(selectors.addToCartButton);
  }

  backToProducts() {
    this.clickElement(selectors.backToProductsButton);
  }

  assertProductDetailsMatch(inventoryItem) {
    this.getProductTitle().should('have.text', inventoryItem.title);
    this.getProductDescription().should('have.text', inventoryItem.description);
    this.getProductPrice().should('have.text', inventoryItem.price);
  }
}

export default ProductDetailPage; 