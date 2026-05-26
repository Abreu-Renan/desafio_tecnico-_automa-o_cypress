# Desafio Técnico - Automação com Cypress

Projeto de automação de testes usando Cypress com Cucumber/BDD para validar cadastro de usuário, compra de produto e criação de conta via API.

## Descrição

Este repositório contém testes automatizados para o site `https://www.automationexercise.com/` utilizando:

- Cypress para automação de interface e execução de testes.
- Cucumber (feature files) para definir cenários em formato BDD.
- Faker para geração de dados dinâmicos.
- Cypress + API para criação de usuário e validação de envio de requisição.

## Recursos implementados

- Cadastro de usuário via interface web.
- Adição de produto ao carrinho e validação do nome e valor no carrinho.
- Criação de usuário via API e validação de resposta.
- Login com usuário criado pela API para validar fluxo de compra.

## Pré-requisitos

- Node.js instalado (recomendado versão 18+).
- `npm` disponível no ambiente.

## Instalação

1. Clone o repositório.
2. No diretório do projeto, rode:

```bash
npm install
```

## Como executar os testes

### Modo interativo

```bash
npx cypress open
```

### Modo headless

```bash
npx cypress run
```

> O Cypress está configurado para procurar arquivos `*.feature` em `cypress/e2e/**/*.feature`.

## Estrutura do projeto

- `cypress.config.js` - configuração principal do Cypress.
- `cypress/e2e/feature/` - arquivos de cenário BDD (`.feature`).
  - `api/CriarContaApi.feature` - cenário de cadastro de usuário via API.
  - `ui/CadastriCompraProdutro.feature` - cenários de cadastro, login e compra via interface.
- `cypress/support/` - comandos customizados, dados e suporte geral.
- `cypress/page/` - classes de página para abstração de ações de UI e API.
- `cypress/step_definitions/` - definição dos passos dos cenários BDD.

## Cenários principais

- Cadastro de usuário e validação de login bem-sucedido.
- Seleção de produto `Blue Top`, visualização de detalhes e adição ao carrinho.
- Validação de mensagem de sucesso ao adicionar produto ao carrinho.
- Validação do nome e do valor do produto no carrinho.
- Criação de usuário via API com status `201` e mensagem `User created!`.

## Dependências

- `cypress`
- `@badeball/cypress-cucumber-preprocessor`
- `@bahmutov/cypress-esbuild-preprocessor`
- `@faker-js/faker`
- `esbuild`

## Observações

- O `baseUrl` está configurado para `https://www.automationexercise.com/` no arquivo `cypress.config.js`.
- Os testes usam o preprocessor do Cucumber para permitir o uso de arquivos `.feature`.

---

Se quiser adicionar scripts npm personalizados, recomendo incluir algo como:

```json
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}
```

Isso facilita a execução futura dos testes.
