#utf-8
#language: pt

Funcionalidade: Novo Cadastro

  Cenário: Realizar um novo cadastro
    Dado que o usuário acesse a página de login
     E clicar no botão "Signup"
    Quando o usuário preencher os campos nome e email
    E clicar no botão "signup-button"
    # Então o sistema deve exibir uma mensagem de sucesso "Cadastro realizado com sucesso!"