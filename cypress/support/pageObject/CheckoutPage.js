import BasePage from '../BasePage';
import selectors from '../elements/checkoutPage.json';

class CheckoutPage extends BasePage {
  getCartItems() {
    return cy.xpath(selectors.cartItem);
  }

  getItemNames() {
    return cy.xpath(selectors.itemName);
  }

  getItemDescriptions() {
    return cy.xpath(selectors.itemDescription);
  }

  getItemPrices() {
    return cy.xpath(selectors.itemPrice);
  }

  removeItemByName(itemName) {
    cy.xpath(`//div[@class='inventory_item_name' and text()='${itemName}']/ancestor::div[@class='cart_item']//button[contains(@data-test, 'remove')]`).click();
  }

  proceedToCheckout() {
    this.clickElement(selectors.checkoutButton);
  }

  continueShopping() {
    this.clickElement(selectors.continueShoppingButton);
  }
}

export default CheckoutPage; 