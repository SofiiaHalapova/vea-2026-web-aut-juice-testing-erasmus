import { BasePage } from '../pageObjects/basePage';

export class AccountPage extends BasePage {
  static get url() {
    return '/#/';
  }

  static get ordersAndPaymentButton() {
    return cy.get("button[aria-label='Orders & Payment']");
  }

  static get savedAddressesButton() {
    return cy.get("button[aria-label='My saved addresses']");
  }

  static get paymentOptionsButton() {
    return cy.get("button[aria-label='My payment options']");
  }
}