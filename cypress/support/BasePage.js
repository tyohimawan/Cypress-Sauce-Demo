class BasePage {
  waitForElement(xpath) {
    return cy.xpath(xpath).should('be.visible');
  }

  clickElement(xpath) {
    return cy.xpath(xpath).click();
  }

  typeIntoElement(xpath, text) {
    return cy.xpath(xpath).clear().type(text);
  }
}

export default BasePage; 