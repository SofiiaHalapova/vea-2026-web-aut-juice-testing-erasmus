import { BasePage } from './basePage';

export class PaymentMethodsPage extends BasePage {
  static get addNewCardButton() {
    return cy.get('.mat-expansion-panel-header-title'); 
  }
  
  static get nameField() {
    return cy.contains('mat-form-field', 'Name').find('input');
  }

  static get cardNumberField() {
    return cy.contains('mat-form-field', 'Card Number').find('input');
  }
  
  static get expiryMonthDropdown() {
    return cy.contains('mat-form-field', 'Expiry Month').find('select');
  }

  static get expiryYearDropdown() {
    return cy.contains('mat-form-field', 'Expiry Year').find('select');
  }
  
  static get submitButton() {
    return cy.contains('button', 'Submit');
  }

  static get paymentList() {
    return cy.get('.mdc-card');
  }
}