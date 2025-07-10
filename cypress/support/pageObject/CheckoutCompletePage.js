import BasePage from '../BasePage';
import selectors from '../elements/checkoutCompletePage.json';

class CheckoutCompletePage extends BasePage {
  getCompleteHeader() {
    return cy.xpath(selectors.completeHeader);
  }

  getCompleteText() {
    return cy.xpath(selectors.completeText);
  }

  backHome() {
    this.clickElement(selectors.backHomeButton);
  }
}

export default CheckoutCompletePage; 