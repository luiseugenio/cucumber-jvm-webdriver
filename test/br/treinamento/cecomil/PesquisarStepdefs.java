/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package br.treinamento.cecomil;

import br.treinamento.page.HomePage;
import static org.junit.Assert.*;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 *
 * @author luis
 */
public class PesquisarStepdefs {

    private WebDriver driver = new FirefoxDriver();
    private String baseUrl = "http://cecomil.com.br/";
    private HomePage page;

    @Before
    public void setUp() {
        if (page == null) {
            page = new HomePage(driver);
        }
    }

    @After
    public void tearDown() {
        page.fecharBrowser();
    }

    @Dado("^que sou um cliente navengando no site$")
    public void que_sou_um_cliente_navengando_no_site() throws Throwable {
        page.acessarSite(baseUrl);
    }

    @Quando("^eu escrever na caixa de texto \"([^\"]*)\"$")
    public void eu_escrever_na_caixa_de_texto(String arg1) throws Throwable {
        page.escreverProduto(arg1);
    }

    @Quando("^clicar no botao de pesquisar$")
    public void clicar_no_botao_de_pesquisar() throws Throwable {
        page.clicarNoBotaoPesquisaSemIdCecomil();
    }

    @Entao("^devo ver a listagem de produtos que atendam os requisitos$")
    public void devo_ver_a_listagem_de_produtos_que_atendam_os_requisitos() throws Throwable {
        assertTrue(page.existeDivColunas());
    }

    @Quando("^eu clicar sobre o produto \"([^\"]*)\"$")
    public void eu_clicar_sobre_o_produto(String arg1) throws Throwable {
        page.clicarNaImageDoBotao(arg1);
    }

    @Entao("^o botao comprar deve estar presente$")
    public void o_botao_comprar_deve_estar_presente() throws Throwable {
        assertTrue(page.existeBotaoComprar());
    }

    @Quando("^clicar no botao de comprar$")
    public void clicar_no_botao_de_comprar() throws Throwable {
        page.clicarNoBotaoComprar();
    }

    @Entao("^deve redirecionar para o \"([^\"]*)\"$")
    public void deve_redirecionar_para_o(String arg1) throws Throwable {
        assertEquals(arg1, page.urlCorrente());
    }

    @Entao("^devo ver a mensagem \"([^\"]*)\"$")
    public void devo_ver_a_mensagem(String arg1) throws Throwable {
        assertTrue(page.corpoDaPagina().contains(arg1));
    }
}
