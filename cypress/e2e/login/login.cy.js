import LoginPage from '../../support/pageObject/LoginPage';

// Use test data from fixtures
const users = require('../../fixtures/loginData.json');

const loginPage = new LoginPage();

describe('SauceDemo Login - Data Driven', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  users.forEach((user) => {
    it(`Login attempt for user: ${user.username}`, () => {
      loginPage.fillUsername(user.username);
      loginPage.fillPassword(user.password);
      loginPage.submit();

      if (user.expected === 'success') {
        cy.url().should('include', '/inventory');
        loginPage.getError().should('not.exist');
      } else if (user.expected === 'locked_out') {
        loginPage.getError().should('contain', 'locked out');
      } else if (user.expected === 'invalid') {
        loginPage.getError().should('be.visible');
      }
    });
  });
}); 