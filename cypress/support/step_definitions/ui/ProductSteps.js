import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../page/ui/ProductPage";

When("seleciono View Product ao localizar o produto {string}", (produto) => {
  ProductPage.acessarProduto(produto);
});

Then("devo visualizar os detalhes de nome e preço do produto", () => {
  ProductPage.visualizarDetalhesDoProdutoSelecionado();
});

When("adiciono o produto ao carrinho", () => {
  ProductPage.adicionarProdutoAoCarrinho();
});

Then("devo visualizar a mensagem de sucesso ao adicionar produto", () => {
  ProductPage.validarExibicaoDeMensagemDeSucessoAoAdicionarProdutoAoCarrinho();
});
