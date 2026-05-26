/// <reference types="cypress" />

const elements = {
  SIGUP_NAME_INPUT: 'input[data-qa="signup-name"]',
  SIGUP_EMAIL_INPUT: 'input[data-qa="signup-email"]',
  NAME_INPUT: "#name",
  EMAIL_INPUT: "#email",
  SIGUP_BUTTON: 'button[data-qa="signup-button"]',
  TITLE_MR_RADIO: "#id_gender1",
  TITLE_MRS_RADIO: "#id_gender2",
  PASSWORD_INPUT: "#password",
  DAY_SELECT: "#days",
  MONTH_SELECT: "#months",
  YEAR_SELECT: "#years",
  FIRST_NAME_INPUT: "#first_name",
  LAST_NAME_INPUT: "#last_name",
  COMPANY_INPUT: "#company",
  ADDRESS_1_INPUT: "#address1",
  ADDRESS_2_INPUT: "#address2",
  COUNTRY_SELECT: "#country",
  STATE_INPUT: "#state",
  CITY_INPUT: "#city",
  ZIPCODE_INPUT: "#zipcode",
  MOBILE_NUMBER_INPUT: "#mobile_number",
  CREATE_ACCOUNT_BUTTON: 'button[data-qa="create-account"]',
  CONTINUE_BUTTON: 'a:contains("Continue")',
  EMAIL_LOGIN_INPUT: 'input[data-qa="login-email"]',
  PASSWORD_LOGIN_INPUT: 'input[data-qa="login-password"]',
  LOGIN_BUTTON: 'button:contains("Login")',
  ACCOUNT_CREATED_MESSAGE: (options = {}) =>
    cy.contains(
      "p",
      "Congratulations! Your new account has been successfully created!",
      { ...options },
    ),
};

class LoginCadastroPage {
  cadastrarNovoUsuario(usuario) {
    //Preencher dados de nome e email para iniciar cadastro de novo usuario
    cy.get(elements.SIGUP_NAME_INPUT, { timeout: 15000 })
      .should("be.visible")
      .type(usuario.nome);

    cy.get(elements.SIGUP_EMAIL_INPUT).should("be.visible").type(usuario.email);

    cy.get(elements.SIGUP_BUTTON).click();
  }

  preencherDadosDeNovoUsuarioEFinalizarCadastro(usuario) {
    // Setar qual radio sera utilizado para titulo
    const titulo =
      usuario.genero === "Mr"
        ? elements.TITLE_MR_RADIO
        : elements.TITLE_MRS_RADIO;

    // Validar exibição do formulario
    cy.get(elements.PASSWORD_INPUT, { timeout: 15000 }).should("be.visible");

    // Validar se campos de nome e email estão sendo preenchidos de acordo com os dados previamente preenchidos
    cy.get(elements.NAME_INPUT).should("have.value", usuario.nome);
    cy.get(elements.EMAIL_INPUT).should("have.value", usuario.email);

    // Preencher dados necessários para cadastrar novo usuario
    cy.get(elements.PASSWORD_INPUT).type(usuario.senha, { log: false });
    cy.get(titulo).check();
    cy.get(elements.DAY_SELECT).select(usuario.diaNascimento);
    cy.get(elements.MONTH_SELECT).select(usuario.mesNascimento);
    cy.get(elements.YEAR_SELECT).select(usuario.anoNascimento);
    cy.get(elements.FIRST_NAME_INPUT).type(usuario.nome);
    cy.get(elements.LAST_NAME_INPUT).type(usuario.sobrenome);
    cy.get(elements.COMPANY_INPUT).type(usuario.empresa);
    cy.get(elements.ADDRESS_1_INPUT).type(usuario.endereco);
    cy.get(elements.ADDRESS_2_INPUT).type(usuario.enderecoComplemento);
    cy.get(elements.COUNTRY_SELECT).select(usuario.pais);
    cy.get(elements.STATE_INPUT).type(usuario.estado);
    cy.get(elements.CITY_INPUT).type(usuario.cidade);
    cy.get(elements.ZIPCODE_INPUT).type(usuario.cep);
    cy.get(elements.MOBILE_NUMBER_INPUT).type(usuario.celular);

    //Pressionar criar e validar mensagem de sucesso e botão de continuar
    cy.get(elements.CREATE_ACCOUNT_BUTTON).click();
    elements.ACCOUNT_CREATED_MESSAGE({ timeout: 25000 }).should("be.visible");
    cy.get(elements.CONTINUE_BUTTON, { timeout: 2000 })
      .should("be.visible")
      .click();
  }

  realizarLogin(usuario) {
    //Preencher dados de email e senha para realizar login
    cy.get(elements.EMAIL_LOGIN_INPUT, { timeout: 15000 })
      .should("be.visible")
      .type(usuario.email);

    cy.get(elements.PASSWORD_LOGIN_INPUT)
      .should("be.visible")
      .type(usuario.senha);

    cy.get(elements.LOGIN_BUTTON).click();
  }
}

export default new LoginCadastroPage();
