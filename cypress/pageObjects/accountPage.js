import { BasePage } from '../pageObjects/basePage';

export class AccountPage extends BasePage {
  static get url() {
    return '/#/';
  }

  static get ordersAndPaymentButton() {
    return cy.contains('button', 'Orders & Payment');
  }

  static get savedAddressesButton() {
    return cy.contains('button', 'My saved addresses');
  }

  static get paymentOptionsButton() {
    return cy.contains('button', 'My Payment Options');
  }
}