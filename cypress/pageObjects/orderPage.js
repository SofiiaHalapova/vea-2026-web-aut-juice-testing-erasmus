import { BasePage } from '../pageObjects/basePage';

export class OrderPage extends BasePage {
  static get url() {
    return '/#/';
  }
  
  static get checkoutButton() {
    return cy.contains('button', ' Checkout');
  }
  
  static get confirmationMessage() {
    return cy.get('h1');
  }

  static get placeOrderButton() {
    return cy.contains('button', 'Place your order and pay');
  }
  
  static get continueButton() {
    return cy.contains('button', 'Continue');
  }
  
  static cardEndingWith(digits) {
    return cy.get('mat-row').contains(digits).closest('mat-row');
  }
  
  static deliveryOption(name) {
    return cy.get('mat-row').contains(name).closest('mat-row');
  }

    static addressContaining(text) {
    return cy.get('mat-row').contains(text).closest('mat-row');
  }
}