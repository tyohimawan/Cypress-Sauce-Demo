import BasePage from '../BasePage';
import selectors from '../elements/loginPage.json';

class LoginPage extends BasePage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  fillUsername(username) {
    this.typeIntoElement(selectors.usernameInput, username);
  }

  fillPassword(password) {
    this.typeIntoElement(selectors.passwordInput, password);
  }

  submit() {
    this.clickElement(selectors.loginButton);
  }

  getError() {
    return cy.xpath(selectors.errorMessage);
  }
}

export default LoginPage; 