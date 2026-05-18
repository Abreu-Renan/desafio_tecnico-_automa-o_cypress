import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário acesse a página de login", () => {
  cy.visit('/');
});

And('clicar no botão "Signup"', () => {
  cy.contains('Signup').click();
});
