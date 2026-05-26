import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import LoginCadastroPage from "../../page/ui/LoginCadastroPage";
import gerarUsuario from "../../data/generators/CadastroUsuario";
import CadastroUsuarioManager from "../../data/CadastroUsuarioManager";

When("realizo um novo cadastro de usuário", () => {
  CadastroUsuarioManager.setUsuario(gerarUsuario());
  LoginCadastroPage.cadastrarNovoUsuario(CadastroUsuarioManager.getUsuario());
  LoginCadastroPage.preencherDadosDeNovoUsuarioEFinalizarCadastro(
    CadastroUsuarioManager.getUsuario(),
  );
});

When("realizo login com credenciais validas", () => {
  const usuario = CadastroUsuarioManager.getUsuario();
  LoginCadastroPage.realizarLogin(usuario);
});
