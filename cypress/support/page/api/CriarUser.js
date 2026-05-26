/// <reference types="cypress" />

class CriarUser {
  criarUsuario(usuario) {
    return cy
      .request({
        method: "POST",
        url: "https://automationexercise.com/api/createAccount",
        form: true,
        body: {
          name: usuario.nomeCompleto,
          email: usuario.email,
          password: usuario.senha,
          title: usuario.titulo,
          birth_date: usuario.diaNascimento,
          birth_month: usuario.mesNascimento,
          birth_year: usuario.anoNascimento,
          firstname: usuario.nome,
          lastname: usuario.sobrenome,
          company: usuario.empresa,
          address1: usuario.endereco,
          address2: usuario.enderecoComplemento,
          country: usuario.pais,
          zipcode: usuario.cep,
          state: usuario.estado,
          city: usuario.cidade,
          mobile_number: usuario.celular,
        },
        failOnStatusCode: false,
      })
      .as("responseCriacaoUsuario");
  }

  parseBody(response) {
    return typeof response.body === "string"
      ? JSON.parse(response.body)
      : response.body;
  }

  validarStatusCodeSucesso() {
    cy.get("@responseCriacaoUsuario").then((response) => {
      const body = this.parseBody(response);
      expect(body.responseCode).to.eq(201);
    });
  }

  validarMensagemDeSucessoDeUsuarioCriado(mensagemEsperada) {
    cy.get("@responseCriacaoUsuario").then((response) => {
      const body = this.parseBody(response);
      expect(body.message).to.eq(mensagemEsperada);
    });
  }

  validarEstruturaDaResposta(response) {
    cy.get("@responseCriacaoUsuario").then((response) => {
      const body = this.parseBody(response);
      expect(body).to.have.property("responseCode");
      expect(body).to.have.property("message");
    });
  }
}

module.exports = new CriarUser();
