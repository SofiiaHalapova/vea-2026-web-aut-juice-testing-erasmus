import { BasePage } from '../pageObjects/basePage';

export class AddressPage extends BasePage {
  static get url() {
    return '/#/';
  }
  
  static get addNewAddressButton() {
    return cy.get('.mat-mdc-raised-button');
  }
  
  static get countryField() {
    return cy.get('#mat-input-2');
  }

  static get nameField() {
    return cy.get('#mat-input-3');
  }

  static get phoneField() {
    return cy.get('#mat-input-4');
  }

  static get zipField() {
    return cy.get('#mat-input-5');
  }

  static get addressField() {
    return cy.get('#address');
  }

  static get cityField() {
    return cy.get('#mat-input-7');
  }

  static get stateField() {
    return cy.get('#mat-input-8');
  }

  static get submitButton() {
    return cy.get('#submitButton');
  }

  static get addressList() {
    return cy.get('.mdc-card');
  }
}