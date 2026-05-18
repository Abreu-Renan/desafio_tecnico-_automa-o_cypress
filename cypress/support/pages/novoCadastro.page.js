const NOME = '[data-qa="signup-name"]';
const EMAIL = '[data-qa="signup-email"]';
const BOTAO_SIGNUP = '[data-qa="signup-button"]';

class NovoCadastro {
  fazerCadastro() {
    cy.get(NOME).type(Cypress.env('nomeCompleto'));
    cy.get(EMAIL).type(Cypress.env('email'));
    cy.get(BOTAO_SIGNUP).click();
  }

  verificarCadastro() {
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  }
}

export default new NovoCadastro();
