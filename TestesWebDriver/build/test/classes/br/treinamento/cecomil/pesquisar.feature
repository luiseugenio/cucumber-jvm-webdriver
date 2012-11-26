# language: pt
Funcionalidade: Como um cliente Gostaria de pesquisar os produtos do site Para efetuar uma compra
    Pesquisa dos produtos do site

Cenario: Encontrou o produto pesquisado com venda apenas na loja
    Dado que sou um cliente navengando no site
    Quando eu escrever na caixa de texto "call of duty"
    E clicar no botao de pesquisar
    Entao devo ver a listagem de produtos que atendam os requisitos
    Quando eu clicar sobre o produto desejado
    Entao devo ver somente o jogo selecionado com o valor de '499.00'

Cenario: Encontrou o produto pesquisado com venda no site e na loja
    Dado que sou um cliente navengando no site
    Quando eu escrever na caixa de texto "fifa 2013"
    E clicar no botao de pesquisar
    Entao devo ver a listagem de produtos que atendam os requisitos
    Quando eu clicar sobre o produto desejado
    Entao devo ver somente o jogo selecionado com o valor de '179.00'
    E o botao comprar deve estar presente
    Quando clicar no botao de comprar
    Entao deve redirecionar para o "http://cecomil.com.br/carrinho.asp"

Cenario: Nao encontrou o produto pesquisado
    Dado que sou um cliente navengando no site
    Quando eu escrever na caixa de texto "the walking dead"
    E clicar no botao de pesquisar
    Entao devo ver a mensagem "Não foi encontrado nenhum produto"


    