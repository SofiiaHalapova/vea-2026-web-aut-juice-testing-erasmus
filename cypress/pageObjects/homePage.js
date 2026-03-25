import { BasePage } from '../pageObjects/basePage';

export class HomePage extends BasePage {
  static get url() {
    return '/#/';
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get('#navbarAccount');
  }

  static get loginButton() {
    return cy.get('#navbarLoginButton');
  }

  static get userProfileButton() {
    return cy.get("[name='securityQuestion']");
  }

  static get searchIcon() {
    return cy.get('#searchQuery');
  }

  static get searchInputField() {
    return cy.get('#searchQuery input');
  }

  static get productNames() {
    return cy.get('.item-name');
  }

  static get productCard() {
    return cy.get('.details-row'); 
  }

  static get closeCardButton() {
    return cy.get("button[aria-label='Close Dialog']");
  }

  static get expandReviewButton(){
    return cy.get('.mat-expansion-panel-header');
  }

  static get expandedReviewCard(){
    return cy.get('.mat-expanded')
  }

  static get reviewTextArea() {
    return cy.get("textarea[aria-label='Text field to review a product']");
  }

  static get submitReviewButton() {
    return cy.get('#submitButton');
  }
  
  static get productCards() {
    return cy.get('mat-card');
  }

  static get itemsPerPageSelect() {
  return cy.get('mat-paginator mat-select');
  }

  static itemsPerPageOption(amount) {
    return cy.get('mat-option').contains(amount);
  }
}