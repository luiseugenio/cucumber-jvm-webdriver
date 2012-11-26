/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package br.treinamento;

import static org.junit.Assert.*;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 *
 * @author luis
 */
public class WebDriverTest {

    private static WebDriver driver;
    private static String baseUrl;

    @BeforeClass
    public static void setUpClass() {
        driver = new FirefoxDriver();
        baseUrl = "http://cecomil.com.br/";
    }

    @AfterClass
    public static void tearDownClass() {
        driver.quit();
    }

    @Test
    public void testWebDriver() {
        driver.get(baseUrl);
        driver.findElement(By.name("produto")).clear();
        driver.findElement(By.name("produto")).sendKeys("call of duty");
        driver.findElement(By.cssSelector("input[type=\"image\"]")).click();
        driver.findElement(By.xpath("//img[@alt='GAME CALL OF DUTY BLACK OPS 2 PRO EDITION XBOX']")).click();
        assertEquals("CECOMIL INFORMÁTICA - GAME CALL OF DUTY BLACK OPS 2 PRO EDITION XBOX", driver.getTitle());
        String pagina = driver.findElement(By.tagName("body")).getText();
        assertTrue(pagina.contains("R$ 499,00"));
    }
}