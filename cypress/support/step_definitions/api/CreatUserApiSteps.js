const {
  Given,
  When,
  Then,
  Before,
} = require("@badeball/cypress-cucumber-preprocessor");
const gerarUsuario = require("../../data/generators/CadastroUsuario");
const CreateUserAccountService = require("../../page/api/CriarUser");
const CadastroUsuarioManager = require("../../data/CadastroUsuarioManager");

let responseCriacaoUsuario;

Given(
  "que possuo dados válidos e dinâmicos para criação de usuário via API",
  () => {
    CadastroUsuarioManager.setUsuario(gerarUsuario());
  },
);

When("envio a requisição para criar o usuário via API", () => {
  CreateUserAccountService.criarUsuario(
    CadastroUsuarioManager.getUsuario(),
  ).then((response) => {
    responseCriacaoUsuario = response;
  });
});

Then(
  "devo validar que o status code da criação de usuário é 201",
  (statusCodeEsperado) => {
    CreateUserAccountService.validarStatusCodeSucesso();
  },
);

Then(
  "devo validar a mensagem {string} na resposta da criação de usuário com sucesso",
  (mensagemEsperada) => {
    CreateUserAccountService.validarMensagemDeSucessoDeUsuarioCriado(
      mensagemEsperada,
    );
  },
);

Then("devo validar a estrutura da resposta da criação de usuário", () => {
  CreateUserAccountService.validarEstruturaDaResposta(responseCriacaoUsuario);
});
