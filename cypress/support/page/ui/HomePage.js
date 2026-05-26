/// <reference types="cypress" />

const elements = {
  MENU_SIGNUP_LOGIN_LINK: (options = {}) =>
    cy.contains("a", "Signup / Login", { ...options }),
  MENU_LOGOUT_LINK: (options = {}) =>
    cy.contains("a", "Logout", { ...options }),
  MENU_CART_LINK: (options = {}) => cy.contains("a", "Cart", { ...options }),
};

class HomePage {
  acessarAutomationExercise() {
    cy.visit("/");
  }

  acessarMenuDeCadastroLogin() {
    elements
      .MENU_SIGNUP_LOGIN_LINK({ timeout: 15000 })
      .should("be.visible")
      .click();
  }

  acessarMenuDeCarrinho() {
    elements.MENU_CART_LINK({ timeout: 15000 }).should("be.visible").click();
  }

  validarLoginComSucesso() {
    elements.MENU_LOGOUT_LINK({ timeout: 20000 }).should("be.visible");
  }
}

export default new HomePage();
