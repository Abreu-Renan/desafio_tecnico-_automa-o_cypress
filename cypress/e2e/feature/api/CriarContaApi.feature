#utf-8
#language: pt

Funcionalidade: Cadastro de usuario pela API - Create/Register User Account
  Cenário: Cadastrar usuário pela API Create/Register User Account
   Dado que possuo dados válidos e dinâmicos para criação de usuário via API
   Quando envio a requisição para criar o usuário via API
   Então devo validar que o status code da criação de usuário é 201
   E devo validar a mensagem 'User created!' na resposta da criação de usuário com sucesso
   E devo validar a estrutura da resposta da criação de usuário