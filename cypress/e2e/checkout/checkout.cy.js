import LoginPage from '../../support/pageObject/LoginPage';
import InventoryPage from '../../support/pageObject/InventoryPage';
import CheckoutPage from '../../support/pageObject/CheckoutPage';
import CheckoutInfoPage from '../../support/pageObject/CheckoutInfoPage';
import CheckoutOverviewPage from '../../support/pageObject/CheckoutOverviewPage';
import CheckoutCompletePage from '../../support/pageObject/CheckoutCompletePage';

const users = require('../../fixtures/loginData.json');

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const checkoutPage = new CheckoutPage();
const checkoutInfoPage = new CheckoutInfoPage();
const checkoutOverviewPage = new CheckoutOverviewPage();
const checkoutCompletePage = new CheckoutCompletePage();

describe('SauceDemo Checkout Flow', () => {
  users.filter(u => u.expected === 'success').forEach((user) => {
    it(`should complete checkout for user: ${user.username}`, () => {
      // Login
      loginPage.visit();
      loginPage.fillUsername(user.username);
      loginPage.fillPassword(user.password);
      loginPage.submit();
      cy.url().should('include', '/inventory');
      inventoryPage.getProductTitles().should('exist');

      // Add first product to cart
      inventoryPage.getProductTitles().first().invoke('text').then((productName) => {
        inventoryPage.addToCartByProductName(productName);
        inventoryPage.viewCart();

        // Cart assertions
        checkoutPage.getItemNames().should('contain', productName);
        checkoutPage.proceedToCheckout();

        // Fill checkout info
        checkoutInfoPage.fillFirstName('John');
        checkoutInfoPage.fillLastName('Doe');
        checkoutInfoPage.fillPostalCode('12345');
        checkoutInfoPage.continue();

        // Overview assertions
        checkoutOverviewPage.getItemNames().should('contain', productName);
        checkoutOverviewPage.finish();

        // Complete assertions
        checkoutCompletePage.getCompleteHeader().should('contain', 'Thank you');
        checkoutCompletePage.getCompleteText().should('be.visible');
      });
    });
  });
}); 