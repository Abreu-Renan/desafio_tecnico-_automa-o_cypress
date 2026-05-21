import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import CadastroBackEnd from "../pages/cadastroBackEnd.api";

Given("que faço uma requisição na API cadastro", () => {
    CadastroBackEnd.fazerRequisicaoCadastro();
});

Then("valido as informações do response", () => {
    CadastroBackEnd.validarResponse();
}); 
