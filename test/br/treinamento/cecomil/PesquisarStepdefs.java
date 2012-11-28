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
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 *
 * @author luis
 */
public class PesquisarStepdefs {

    private WebDriver driver = new FirefoxDriver();
    private String baseUrl = "http://cecomil.com.br/";

    @Before
    public void setUp() {
        if (driver == null) {
            driver = new FirefoxDriver();
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        }
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    @Dado("^que sou um cliente navengando no site$")
    public void que_sou_um_cliente_navengando_no_site() throws Throwable {
        driver.get(baseUrl);
    }

    @Quando("^eu escrever na caixa de texto \"([^\"]*)\"$")
    public void eu_escrever_na_caixa_de_texto(String arg1) throws Throwable {
        driver.findElement(By.name("produto")).clear();
        driver.findElement(By.name("produto")).sendKeys(arg1);
    }

    @Quando("^clicar no botao de pesquisar$")
    public void clicar_no_botao_de_pesquisar() throws Throwable {
        driver.findElement(By.cssSelector("input[type=\"image\"]")).click();
    }

    @Entao("^devo ver a listagem de produtos que atendam os requisitos$")
    public void devo_ver_a_listagem_de_produtos_que_atendam_os_requisitos() throws Throwable {
        assertTrue(isElementPresent(By.cssSelector("div.colunas")));
    }

    @Quando("^eu clicar sobre o produto \"([^\"]*)\"$")
    public void eu_clicar_sobre_o_produto(String arg1) throws Throwable {
        driver.findElement(By.xpath("//img[@alt='" + arg1 + "']")).click();
    }

    @Entao("^devo ver somente o jogo selecionado com o valor de (\\d+)$")
    public void devo_ver_somente_o_jogo_selecionado_com_o_valor_de_(int arg1) throws Throwable {
        String pagina = driver.findElement(By.tagName("body")).getText();
        assertTrue(pagina.contains(String.valueOf(arg1)));
    }

    @Entao("^o botao comprar deve estar presente$")
    public void o_botao_comprar_deve_estar_presente() throws Throwable {
        assertTrue(isElementPresent(By.id("bt_comprar")));
    }

    @Quando("^clicar no botao de comprar$")
    public void clicar_no_botao_de_comprar() throws Throwable {
        driver.findElement(By.id("bt_comprar")).click();
    }

    @Entao("^deve redirecionar para o \"([^\"]*)\"$")
    public void deve_redirecionar_para_o(String arg1) throws Throwable {
        assertEquals(arg1, driver.getCurrentUrl());
    }

    @Entao("^devo ver a mensagem \"([^\"]*)\"$")
    public void devo_ver_a_mensagem(String arg1) throws Throwable {
        String pagina = driver.findElement(By.tagName("body")).getText();
        assertTrue(pagina.contains(arg1));
    }

    private boolean isElementPresent(By by) {
        try {
            driver.findElement(by);
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }
}
