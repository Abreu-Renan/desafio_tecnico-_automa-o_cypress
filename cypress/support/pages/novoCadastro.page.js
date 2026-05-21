import { expect } from "chai";

const NOME = '[data-qa="signup-name"]';
const EMAIL = '[data-qa="signup-email"]';
const BOTAO_SIGNUP = '[data-qa="signup-button"]';
const TITLE_mr = '#id_gender1';
const PASSWORD = '[data-qa="password"]';
const DAYS = '[data-qa="days"]';
const MONTHS = '[data-qa="months"]';
const YEARS = '[data-qa="years"]';
const FIST_NAME = '[data-qa="first_name"]';
const LAST_NAME = '[data-qa="last_name"]';
const COMPANY = '[data-qa="company"]';
const ADDRESS = '[data-qa="address"]';
const ADDRESS2 = '[data-qa="address2"]';
const COUNTRY = '[data-qa="country"]';
const STATE = '[data-qa="state"]';
const CITY = '[data-qa="city"]';
const ZIPCODE = '[data-qa="zipcode"]';
const MOBILE_NUMBER = '[data-qa="mobile_number"]';
const BOTAO_CREATE_ACCOUNT = '[data-qa="create-account"]';

const DIAS_DISPONIVEIS = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
const MESES_DISPONIVEIS = [
  '- Please Select -',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12'
];
const ANOS_DISPONIVEIS = Array.from({ length: 2024 - 1900 + 1 }, (_, i) => String(1900 + i));

const PAISES_DISPONIVEIS = [

 "- Please Select -",
        "India",
        "United States",
        "Canada",
        "Australia",
        "New Zealand",
        "Singapore-Benz",];

//================================
//CLASSE PRINCIPAL DO FORMULÁRIO 
//================================
class NovoCadastro {
  fazerCadastro() {
    cy.get(NOME).should('be.visible').type(Cypress.env('nomeCompleto'));
    cy.get(EMAIL).should('be.visible').type(Cypress.env('email'));
    cy.get(BOTAO_SIGNUP).should('be.visible').click();
    // aguardar o formulário de cadastro completo aparecer
    cy.get(TITLE_mr, { timeout: 10000 }).should('be.visible').check();
    cy.get(PASSWORD).should('be.visible').type(Cypress.env('password'));
    cy.get(DAYS).should('be.visible').select('1');
    cy.get(MONTHS).should('be.visible').select('1');
    cy.get(YEARS).should('be.visible').select('1990');
    cy.get(FIST_NAME).should('be.visible').type(Cypress.env('nome'));
    cy.get(LAST_NAME).should('be.visible').type(Cypress.env('sobrenome'));
    cy.get(COMPANY).should('be.visible').type(Cypress.env('empresa'));
    cy.get(ADDRESS).should('be.visible').type(Cypress.env('endereco'));
    cy.get(ADDRESS2).should('be.visible').type(Cypress.env('endereco2'));
    // aguardar select existir, ser visível, ser único e ter options carregadas
    cy.get(COUNTRY)
      .should('have.length', 1)
      .should('be.visible')
      .and('have.prop', 'tagName', 'SELECT')
      .within(() => {
        cy.get('option').should('have.length.greaterThan', 0);
      });

    // Selecionar país pelo texto visível
    this.selecionarPais('United States');

    cy.get(STATE).should('be.visible').type(Cypress.env('estado'));
    cy.get(CITY).should('be.visible').type(Cypress.env('cidade'));
    cy.get(ZIPCODE).should('be.visible').type(Cypress.env('cep'));
    cy.get(MOBILE_NUMBER).should('be.visible').type(Cypress.env('celular'));
    cy.get(BOTAO_CREATE_ACCOUNT).click();

  }

  verificarCadastro() {
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  }

  preencherNomeEmail() {
    cy.get(NOME).should('be.visible').type(Cypress.env('nomeCompleto'));
    cy.get(EMAIL).should('be.visible').type(Cypress.env('email'));
  }

  clicarSignupButton() {
    cy.get(BOTAO_SIGNUP).should('be.visible').click();
  }

  selecionarPais(pais) {
    cy.get(COUNTRY)
      .should('have.length', 1)
      .should('be.visible')
      .and('have.prop', 'tagName', 'SELECT')
      .then($select => {
        cy.wrap($select)
          .find('option')
          .should('have.length.greaterThan', 0);
        cy.wrap($select).select(pais);
      });

    cy.get(COUNTRY).find('option:selected').should('have.text', pais);
  }
}

export default new NovoCadastro();
