import BasePage from '../BasePage';
import selectors from '../elements/checkoutInfoPage.json';

class CheckoutInfoPage extends BasePage {
  fillFirstName(firstName) {
    this.typeIntoElement(selectors.firstNameInput, firstName);
  }

  fillLastName(lastName) {
    this.typeIntoElement(selectors.lastNameInput, lastName);
  }

  fillPostalCode(postalCode) {
    this.typeIntoElement(selectors.postalCodeInput, postalCode);
  }

  continue() {
    this.clickElement(selectors.continueButton);
  }

  cancel() {
    this.clickElement(selectors.cancelButton);
  }
}

export default CheckoutInfoPage; 