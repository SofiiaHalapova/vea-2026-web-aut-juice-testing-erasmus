import { BasePage } from '../pageObjects/basePage';

export class AddressPage extends BasePage {
  static get url() {
    return '/#/';
  }
  
  static get addNewAddressButton() {
    return cy.get('.mat-mdc-raised-button');
  }
  
  static get countryField() {
    return cy.contains('mat-form-field', 'Country').find('input');
  }

  static get nameField() {
    return cy.contains('mat-form-field', 'Name').find('input');
  }

  static get phoneField() {
    return cy.contains('mat-form-field', 'Mobile Number').find('input');
  }

  static get zipField() {
    return cy.contains('mat-form-field', 'ZIP Code').find('input');
  }

  static get addressField() {
    return cy.get('#address');
  }

  static get cityField() {
    return cy.contains('mat-form-field', 'City').find('input');
  }

  static get stateField() {
    return cy.contains('mat-form-field', 'State').find('input');
  }

  static get submitButton() {
    return cy.get('#submitButton');
  }

  static get addressList() {
    return cy.get('.mdc-card');
  }
}