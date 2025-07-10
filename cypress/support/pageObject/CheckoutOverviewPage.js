import BasePage from '../BasePage';
import selectors from '../elements/checkoutOverviewPage.json';

class CheckoutOverviewPage extends BasePage {
  getSummaryInfo() {
    return cy.xpath(selectors.summaryInfo);
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

  finish() {
    this.clickElement(selectors.finishButton);
  }

  cancel() {
    this.clickElement(selectors.cancelButton);
  }
}

export default CheckoutOverviewPage; 