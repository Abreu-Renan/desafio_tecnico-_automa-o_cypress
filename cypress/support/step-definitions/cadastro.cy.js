import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import NovoCadastro from "../pages/novoCadastro.page";




When("o usuário preencher os campos nome e email", () => {
    NovoCadastro.preencherNomeEmail();

});

And('clicar no botão "signup-button"', () => {
    NovoCadastro.clicarSignupButton();
});

And ('verificar se o cadastro foi realizado com sucesso', () => {
    NovoCadastro.verificarCadastro();
});
