$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027br/treinamento/cecomil/pesquisar.feature\u0027");
formatter.feature({
  "id": "como-um-cliente-gostaria-de-pesquisar-os-produtos-do-site-para-efetuar-uma-compra",
  "description": "  Pesquisa dos produtos do site",
  "name": "Como um cliente Gostaria de pesquisar os produtos do site Para efetuar uma compra",
  "keyword": "Funcionalidade",
  "line": 2,
  "comments": [
    {
      "value": "# language: pt",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "como-um-cliente-gostaria-de-pesquisar-os-produtos-do-site-para-efetuar-uma-compra;encontrou-o-produto-pesquisado-com-venda-apenas-na-loja",
  "description": "",
  "name": "Encontrou o produto pesquisado com venda apenas na loja",
  "keyword": "Cenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "que sou um cliente navengando no site",
  "keyword": "Dado ",
  "line": 6
});
formatter.step({
  "name": "eu escrever na caixa de texto \"call of duty\"",
  "keyword": "Quando ",
  "line": 7
});
formatter.step({
  "name": "clicar no botao de pesquisar",
  "keyword": "E ",
  "line": 8
});
formatter.step({
  "name": "devo ver a listagem de produtos que atendam os requisitos",
  "keyword": "Entao ",
  "line": 9
});
formatter.step({
  "name": "eu clicar sobre o produto \"GAME CALL OF DUTY BLACK OPS 2 PRO EDITION XBOX\"",
  "keyword": "Quando ",
  "line": 10
});
formatter.step({
  "name": "devo ver a mensagem \"R$ 499,00\"",
  "keyword": "Entao ",
  "line": 11
});
formatter.match({
  "location": "PesquisarStepdefs.que_sou_um_cliente_navengando_no_site()"
});
formatter.result({
  "duration": 4991701689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "call of duty",
      "offset": 31
    }
  ],
  "location": "PesquisarStepdefs.eu_escrever_na_caixa_de_texto(String)"
});
formatter.result({
  "duration": 192022285,
  "status": "passed"
});
formatter.match({
  "location": "PesquisarStepdefs.clicar_no_botao_de_pesquisar()"
});
formatter.result({
  "duration": 3235406249,
  "status": "passed"
});
formatter.match({
  "location": "PesquisarStepdefs.devo_ver_a_listagem_de_produtos_que_atendam_os_requisitos()"
});
formatter.result({
  "duration": 117806135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GAME CALL OF DUTY BLACK OPS 2 PRO EDITION XBOX",
      "offset": 27
    }
  ],
  "location": "PesquisarStepdefs.eu_clicar_sobre_o_produto(String)"
});
formatter.result({
  "duration": 3163517117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R$ 499,00",
      "offset": 21
    }
  ],
  "location": "PesquisarStepdefs.devo_ver_a_mensagem(String)"
});
formatter.result({
  "duration": 625236174,
  "status": "passed"
});
formatter.scenario({
  "id": "como-um-cliente-gostaria-de-pesquisar-os-produtos-do-site-para-efetuar-uma-compra;encontrou-o-produto-pesquisado-com-venda-no-site-e-na-loja",
  "description": "",
  "name": "Encontrou o produto pesquisado com venda no site e na loja",
  "keyword": "Cenario",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "que sou um cliente navengando no site",
  "keyword": "Dado ",
  "line": 14
});
formatter.step({
  "name": "eu escrever na caixa de texto \"fifa 2013\"",
  "keyword": "Quando ",
  "line": 15
});
formatter.step({
  "name": "clicar no botao de pesquisar",
  "keyword": "E ",
  "line": 16
});
formatter.step({
  "name": "devo ver a listagem de produtos que atendam os requisitos",
  "keyword": "Entao ",
  "line": 17
});
formatter.step({
  "name": "eu clicar sobre o produto \"GAME FIFA 2013 XBOX\"",
  "keyword": "Quando ",
  "line": 18
});
formatter.step({
  "name": "devo ver a mensagem \"R$ 179,00\"",
  "keyword": "Entao ",
  "line": 19
});
formatter.step({
  "name": "o botao comprar deve estar presente",
  "keyword": "E ",
  "line": 20
});
formatter.step({
  "name": "clicar no botao de comprar",
  "keyword": "Quando ",
  "line": 21
});
formatter.step({
  "name": "deve redirecionar para o \"http://cecomil.com.br/carrinho.asp\"",
  "keyword": "Entao ",
  "line": 22
});
formatter.match({
  "location": "PesquisarStepdefs.que_sou_um_cliente_navengando_no_site()"
});
formatter.result({
  "duration": 5035464612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fifa 2013",
      "offset": 31
    }
  ],
  "location": "PesquisarStepdefs.eu_escrever_na_caixa_de_texto(String)"
});
formatter.result({
  "duration": 85604655,
  "status": "passed"
});
formatter.match({
  "location": "PesquisarStepdefs.clicar_no_botao_de_pesquisar()"
});
formatter.result({
  "duration": 3446642411,
  "status": "passed"
});
formatter.match({
  "location": "PesquisarStepdefs.devo_ver_a_listagem_de_produtos_que_atendam_os_requisitos()"
});
formatter.result({
  "duration": 14173239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GAME FIFA 2013 XBOX",
      "offset": 27
    }
  ],
  "location": "PesquisarStepdefs.eu_clicar_sobre_o_produto(String)"
});
formatter.result({
  "duration": 2366956287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R$ 179,00",
      "offset": 21
    }
  ],
  "location": "PesquisarStepdefs.devo_ver_a_mensagem(String)"
});
formatter.result({
  "duration": 519922952,
  "status": "passed"
});
formatter.match({
  "location": "PesquisarStepdefs.o_botao_comprar_deve_estar_presente()"
});
formatter.result({
  "duration": 6175175,
  "status": "passed"
});
formatter.match({
  "location": "PesquisarStepdefs.clicar_no_botao_de_comprar()"
});
formatter.result({
  "duration": 3228039076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://cecomil.com.br/carrinho.asp",
      "offset": 26
    }
  ],
  "location": "PesquisarStepdefs.deve_redirecionar_para_o(String)"
});
formatter.result({
  "duration": 11360267,
  "status": "passed"
});
formatter.scenario({
  "id": "como-um-cliente-gostaria-de-pesquisar-os-produtos-do-site-para-efetuar-uma-compra;nao-encontrou-o-produto-pesquisado",
  "description": "",
  "name": "Nao encontrou o produto pesquisado",
  "keyword": "Cenario",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "que sou um cliente navengando no site",
  "keyword": "Dado ",
  "line": 25
});
formatter.step({
  "name": "eu escrever na caixa de texto \"the walking dead\"",
  "keyword": "Quando ",
  "line": 26
});
formatter.step({
  "name": "clicar no botao de pesquisar",
  "keyword": "E ",
  "line": 27
});
formatter.step({
  "name": "devo ver a mensagem \"Não foi encontrado nenhum produto\"",
  "keyword": "Entao ",
  "line": 28
});
formatter.match({
  "location": "PesquisarStepdefs.que_sou_um_cliente_navengando_no_site()"
});
formatter.result({
  "duration": 5384222478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the walking dead",
      "offset": 31
    }
  ],
  "location": "PesquisarStepdefs.eu_escrever_na_caixa_de_texto(String)"
});
formatter.result({
  "duration": 131018138,
  "status": "passed"
});
formatter.match({
  "location": "PesquisarStepdefs.clicar_no_botao_de_pesquisar()"
});
formatter.result({
  "duration": 2779304329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Não foi encontrado nenhum produto",
      "offset": 21
    }
  ],
  "location": "PesquisarStepdefs.devo_ver_a_mensagem(String)"
});
formatter.result({
  "duration": 502917537,
  "status": "passed"
});
});