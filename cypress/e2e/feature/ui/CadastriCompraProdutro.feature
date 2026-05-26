#utf-8
#language: pt

Funcionalidade: Cadastro e compra de produto

  Cenário: Cadastrar usuário e validar produto no carrinho
    Dado que acesso o site Automation Exercise
    Quando navego para Signup Login
    E realizo um novo cadastro de usuário
    Então devo visualizar o usuário logado com sucesso
    Quando seleciono View Product ao localizar o produto "Blue Top"
    Então devo visualizar os detalhes de nome e preço do produto
    Quando adiciono o produto ao carrinho
    Então devo visualizar a mensagem de sucesso ao adicionar produto
    Quando navego para meu carrinho
    Então devo validar as informações de nome e valor do produto no carrinho
    
  Cenário: Cadastrar usuário pela API e validar produto no carrinho
    Dado que possuo dados válidos e dinâmicos para criação de usuário via API
    Quando envio a requisição para criar o usuário via API
    Então devo validar que o status code da criação de usuário é 201
    E devo validar a mensagem 'User created!' na resposta da criação de usuário com sucesso
    Dado que acesso o site Automation Exercise
    Quando navego para Signup Login
    E realizo login com credenciais validas
    Então devo visualizar o usuário logado com sucesso
    Quando seleciono View Product ao localizar o produto "Blue Top"
    Então devo visualizar os detalhes de nome e preço do produto
    Quando adiciono o produto ao carrinho
    Então devo visualizar a mensagem de sucesso ao adicionar produto
    Quando navego para meu carrinho
    Então devo validar as informações de nome e valor do produto no carrinho