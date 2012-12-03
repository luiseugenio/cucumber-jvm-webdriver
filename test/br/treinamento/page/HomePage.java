/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package br.treinamento.page;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;

/**
 *
 * @author luis
 */
public class HomePage {

    private final WebDriver driver;

    public HomePage(WebDriver driver) {
        this.driver = driver;
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    public void acessarSite(String url) {
        driver.get(url);
    }

    public void fecharBrowser() {
        driver.quit();
    }

    public void escreverNaCaixaDeTextoOValor(String caixaDeTexto, String valor) {
        driver.findElement(By.name(caixaDeTexto)).clear();
        driver.findElement(By.name(caixaDeTexto)).sendKeys(valor);
    }

    public void escreverProduto(String valor) {
        driver.findElement(By.name("produto")).clear();
        driver.findElement(By.name("produto")).sendKeys(valor);
    }

    public void clicarNoBotao(String botao) {
        driver.findElement(By.id(botao)).click();
    }
    
    public void clicarNoBotaoComprar() {
        driver.findElement(By.id("bt_comprar")).click();
    }

    public void clicarNoBotaoPesquisaSemIdCecomil() {
        driver.findElement(By.cssSelector("input[type=\"image\"]")).click();
    }

    public void clicarNaImageDoBotao(String imagem) {
        driver.findElement(By.xpath("//img[@alt='" + imagem + "']")).click();
    }

    public String corpoDaPagina() {
        return driver.findElement(By.tagName("body")).getText();
    }

    public String urlCorrente() {
        return driver.getCurrentUrl();
    }

    public Boolean existeComponentePorId(String componente) {
        return isElementPresent(By.id(componente));
    }

    public Boolean existeBotaoComprar() {
        return isElementPresent(By.id("bt_comprar"));
    }
    
    public Boolean existeComponentePorCss(String componente) {
        return isElementPresent(By.cssSelector(componente));
    }
    
    public Boolean existeDivColunas() {
        return isElementPresent(By.cssSelector("div.colunas"));
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
