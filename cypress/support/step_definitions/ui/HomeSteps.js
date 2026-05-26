import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../page/ui/HomePage";

Given("que acesso o site Automation Exercise", () => {
  HomePage.acessarAutomationExercise();
});

When("navego para Signup Login", () => {
  HomePage.acessarMenuDeCadastroLogin();
});

When("navego para meu carrinho", () => {
  HomePage.acessarMenuDeCarrinho();
});

Then("devo visualizar o usuário logado com sucesso", () => {
  HomePage.validarLoginComSucesso();
});
