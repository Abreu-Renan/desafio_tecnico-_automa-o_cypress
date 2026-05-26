/// <reference types="cypress" />

const elements = {
  PRODUCT_NAME_CART: (nomeProduto, options = {}) =>
    cy.contains(".cart_description a", nomeProduto, { ...options }),

  PRODUCT_PRICE_CART: (nomeProduto, options = {}) =>
    cy
      .contains(".cart_description a", nomeProduto, { ...options })
      .closest("tr")
      .find(".cart_price p"),
};

class CartPage {
  //Obter atraves de aliases o nome e o valor do produto obtidos anteriormente
  validarExibicaoDeNomeEValorDoProdutoNoCarrinho() {
    cy.get("@nomeProdutoSelecionado").then((nome) => {
      cy.get("@valorProdutoSelecionado").then((preco) => {
        elements
          .PRODUCT_NAME_CART(nome, { timeout: 25000 })
          .should("be.visible");
        elements.PRODUCT_PRICE_CART(nome).should("contain", preco);
      });
    });
  }
}

export default new CartPage();
