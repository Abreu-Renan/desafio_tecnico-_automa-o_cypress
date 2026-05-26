import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../page/ui/CartPage";

Then(
  "devo validar as informações de nome e valor do produto no carrinho",
  () => {
    CartPage.validarExibicaoDeNomeEValorDoProdutoNoCarrinho();
  },
);
