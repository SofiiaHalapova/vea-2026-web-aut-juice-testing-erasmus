import { AccountPage } from '../pageObjects/accountPage';
import { HomePage } from '../pageObjects/HomePage';
import { LoginPage } from '../pageObjects/loginPage';
import { RegistrationPage } from '../pageObjects/registrationPage';
import { OrderPage } from '../pageObjects/orderPage';
import { AddressPage } from '../pageObjects/addressPage';


describe('Juice-shop scenarios', () => {
  context('Without auto login', () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it('Login', () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type('demo');
      // Set password value to "demo"
      LoginPage.passwordField.type('demo');
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should('contain.text', 'demo')
    });

    it('Registration', () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerLink.click()
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const randomNum = Math.floor(Math.random() * 10);
      const email = `email_${randomNum}@ebox.com`;
      RegistrationPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
      const password = 'password123';
      RegistrationPage.passwordField.type(password);
      RegistrationPage.passwordRepeatField.type(password);
      // Click on Security Question menu
      RegistrationPage.securityQuestionDropdown.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestionOptions.contains("Name of your favourite pet?");
      // Fill in answer
      RegistrationPage.securityAnswer.type("Rando");
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type("email");
      // Set password value to previously used password value
      LoginPage.passwordField.type("password");
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should('contain.text', email)
    });
  });

  context('With auto login', () => {
    beforeEach(() => {
      cy.login('demo', 'demo');
      HomePage.visit();
    });

    it('Search and validate Lemon', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchInputField.type('Lemon{enter')
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should('contain.text', 'Sour but full of vitamins.')
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it('Search 500ml and validate Lemon, while having multiple cards', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchInputField.type('500ml{enter')
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should('contain.text', 'Sour but full of vitamins.')
    });

    it('Search 500ml and validate Lemon, while having multiple cards', () => {
      // Create scenario - Search 500ml and validate cards
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchInputField.type('500ml{enter')
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productNames.contains('Eggfruit Juice (500ml)').click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productCard.should('contain.text', 'Now with even more exotic flavour.')
      // Close the card
      HomePage.closeCardButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should('contain.text', 'Sour but full of vitamins.')
      // Close the card
      HomePage.closeCardButton.click()
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productNames.contains('Strawberry Juice (500ml)').click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productCard.should('contain.text', 'Sweet & tasty!');
    });

  
    // Create scenario - Read a review
    it('Read a review', () => {
      // Click on search icon
      HomePage.searchIcon.click()
      // Search for King
      HomePage.searchInputField.type('King')
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productNames.contains('King of the Hill').click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.expandReviewButton.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.expandedReviewCard.should('contain.text', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!')
    });
    
    // Create scenario - Add a review
    it('Add a review', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchInputField.type('Raspberry{enter}');
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productNames.contains('Raspberry Juice (1000ml)').click();
      // Type in review - "Tastes like metal"
      const myReview = "Tastes like metal";
      HomePage.reviewTextArea.type(myReview).trigger('input');
      // Click Submit
      // HomePage.submitReviewButton.click();
      HomePage.submitReviewButton.click({ force: true });
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.expandReviewButton.click();
      // Validate review -  "Tastes like metal"
      cy.contains(myReview).should('be.visible');
    });

    // Create scenario - Validate product card amount
    it('Validate product card amount', () => {
      // Validate that the default amount of cards is 12
      HomePage.productCards.should('have.length', 12);
      // Change items per page to 24
      HomePage.itemsPerPageSelect.click({ force: true });
      HomePage.itemsPerPageOption(24).click({ force: true });
      // Validate that the amount of cards is 24
      HomePage.productCards.should('have.length', 24);
      // Change items per page to 36
      HomePage.itemsPerPageSelect.click({ force: true });
      HomePage.itemsPerPageOption(36).click({ force: true });
      // Validate that the amount of cards is 36
      HomePage.productCards.should('have.length', 36);
    });

    // Create scenario - Buy Girlie T-shirt
    it('Buy Girlie T-shirt', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Girlie
      HomePage.searchInputField.type('Girlie{enter}');
      // Add to basket "Girlie"
      HomePage.productNames.contains('Girlie').closest('mat-card').find('button[aria-label="Add to Basket"]').click();
      // Click on "Your Basket" button
      cy.get('button[routerlink="/basket"]').click();
      // Click on "Checkout" button
      OrderPage.checkoutButton.click();
      // Select address containing "United Fakedom"
      OrderPage.addressContaining('United Fakedom').find('mat-radio-button').click();
      // Click Continue button
      OrderPage.continueButton.click();
      // Select delivery speed Standard Delivery
      OrderPage.deliveryOption('Standard Delivery').find('mat-radio-button').click();
      // Click Continue button
      OrderPage.continueButton.click();
      // Select card that ends with "5678"
      OrderPage.cardEndingWith('5678').find('mat-radio-button').click();
      // Click Continue button
      OrderPage.continueButton.click();
      // Click on "Place your order and pay"
      OrderPage.placeOrderButton.click();
      // Validate confirmation - "Thank you for your purchase!"
      OrderPage.confirmationMessage.should('contain.text', 'Thank you for your purchase!');
    });

    // Create scenario - Add address
    it('Add address', () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      AccountPage.ordersAndPaymentButton.click();
      // Click on My saved addresses
      AccountPage.savedAddressesButton.click();
      // Click on Add New Address
      AddressPage.addNewAddressButton.click();
      // Fill in the necessary information
      const address = {
        country: 'Ukraine',
        name: 'Sofiia',
        phone: '123456789',
        zip: 'test',
        address: 'test street',
        city: 'Kyiv',
        state: 'Kyiv'
      };
      AddressPage.countryField.type(address.country);
      AddressPage.nameField.type(address.name);
      AddressPage.phoneField.type(address.phone);
      AddressPage.zipField.type(address.zip);
      AddressPage.addressField.type(address.address);
      AddressPage.cityField.type(address.city);
      AddressPage.stateField.type(address.state);
      // Click Submit button
      AddressPage.submitButton.click();
      // Validate that previously added address is visible
      AddressPage.addressList.should('contain.text', address.name);
    });

  
    // Create scenario - Add payment option
    it.only('Add payment option', () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      AccountPage.ordersAndPaymentButton.click();
      // Click on My payment options
      AccountPage.paymentOptionsButton.click();
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      // Fill in Name
      // Fill in Card Number
      // Set expiry month to 7
      // Set expiry year to 2090
      // Click Submit button
      // Validate that the card shows up in the list
    });
  });
});
