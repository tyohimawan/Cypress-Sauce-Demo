import BasePage from '../BasePage';
import selectors from '../elements/inventoryPage.json';

class InventoryPage extends BasePage {
  getInventoryItems() {
    return cy.xpath(selectors.inventoryItem);
  }

  addToCartByProductName(productName) {
    cy.xpath(`//div[@class='inventory_item_name' and text()='${productName}']/ancestor::div[@class='inventory_item']//button[contains(@data-test, 'add-to-cart')]`).click();
  }

  viewCart() {
    this.clickElement(selectors.cartIcon);
  }

  getProductTitles() {
    return cy.xpath(selectors.productTitle);
  }

  getProductDescriptions() {
    return cy.xpath(selectors.productDescription);
  }

  getProductPrices() {
    return cy.xpath(selectors.productPrice);
  }
}

export default InventoryPage; 