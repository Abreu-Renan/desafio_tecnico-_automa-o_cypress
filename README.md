# Desafio Técnico - Automação Cypress

Projeto de automação de testes usando Cypress com Cucumber (BDD) para o site `https://www.automationexercise.com/`.

## Tecnologias

- Cypress `^15.15.0`
- `cypress-cucumber-preprocessor` para suporte a `.feature`
- `@faker-js/faker` para geração de dados fake
- Chai para asserções

## O que está automatizado

- Cenário de cadastro de usuário (`cypress/e2e/novo-cadastro.feature`)
- Page Objects em `cypress/support/pages`
- Step definitions em `cypress/support/step-definitions`
- Requisição backend de cadastro em `cypress/support/pages/cadastroBackEnd.api.js`

## Estrutura principal do projeto

- `cypress/e2e/` - arquivos `.feature` do Cucumber
- `cypress/support/pages/` - classes de página e helpers
- `cypress/support/step-definitions/` - definições de passos BDD
- `cypress/plugins/` - plugins Cypress
- `cypress.env.json` - variáveis de ambiente sensíveis
- `cypress.config.js` - configuração do Cypress

## Configuração

1. Instale as dependências:

```bash
npm install
```

2. Configure variáveis sensíveis em `cypress.env.json`:

```json
{
  "email": "seu-email@example.com",
  "password": "sua-senha-segura",
  "celular": "11999999999"
}
```

> O arquivo `cypress.env.json` deve permanecer fora do controle de versão. Ele já está listado em `.gitignore`.

## Executar os testes

### Modo interativo

```bash
npx cypress open
```

### Modo headless

```bash
npx cypress run --spec "cypress/e2e/novo-cadastro.feature"
```

## Observações

- O helper `cadastroBackEnd.api.js` gera campos de cadastro fake usando `faker` para dados não sensíveis.
- Dados sensíveis como `email`, `password` e `celular` devem ser mantidos em `cypress.env.json`.
- A configuração do Cypress aponta para `https://www.automationexercise.com/` como `baseUrl`.

## Suporte

Se precisar ajustar casos de teste ou adicionar novos cenários, adicione novas feature files em `cypress/e2e/` e implemente os passos correspondentes em `cypress/support/step-definitions/`.
