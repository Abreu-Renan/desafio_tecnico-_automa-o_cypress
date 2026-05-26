/// <reference types="cypress" />

const elements = {
  PRODUCT_NAME: ".product-information h2",
  PRODUCT_PRICE: ".product-information span span",
  ADD_TO_CART_BUTTON: ".btn.btn-default.cart",

  VIEW_PRODUCT_LINK: (nomeProduto, options = {}) =>
    cy
      .contains(".productinfo p", nomeProduto, { ...options })
      .closest(".product-image-wrapper")
      .contains("a", "View Product"),

  PRODUCT_ADDED_MESSAGE: (options = {}) =>
    cy.contains("p", "Your product has been added to cart.", { ...options }),

  CONTINUE_SHOPPING_BUTTON: (options = {}) =>
    cy.contains("button", "Continue Shopping", { ...options }),
};

class ProductPage {
  //Acessar um produto pelo nome
  acessarProduto(produto) {
    elements
      .VIEW_PRODUCT_LINK(produto, { timeout: 15000 })
      .should("be.visible")
      .click();
  }

  //Obter nome e valor do produto e adicionar ao alias para conseguir se obter em outras funções
  visualizarDetalhesDoProdutoSelecionado() {
    cy.get(elements.PRODUCT_NAME)
      .invoke("text")
      .then((nomeProduto) => {
        cy.wrap(nomeProduto.trim()).as("nomeProdutoSelecionado");
      });

    cy.get(elements.PRODUCT_PRICE)
      .invoke("text")
      .then((valorProduto) => {
        cy.wrap(valorProduto.trim()).as("valorProdutoSelecionado");
      });
  }

  //Ao estar dentro de um produto , clicar em adicionar ao carrinho
  adicionarProdutoAoCarrinho() {
    cy.get(elements.ADD_TO_CART_BUTTON).should("be.visible").click();
  }

  validarExibicaoDeMensagemDeSucessoAoAdicionarProdutoAoCarrinho() {
    elements.PRODUCT_ADDED_MESSAGE({ timeout: 10000 }).should("be.visible");
    elements
      .CONTINUE_SHOPPING_BUTTON({ timeout: 5000 })
      .should("be.visible")
      .click();
  }
}

export default new ProductPage();
