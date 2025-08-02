package org.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.assertTrue;

public class MainTest {
    @Test
    public void main() throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.amazon.com/");
        driver.manage().window().maximize();
        Thread.sleep(2000);
        driver.findElement(By.id("twotabsearchtextbox")).sendKeys("Asus vivabak s14");
        Thread.sleep(2000);
        driver.findElement(By.id("nav-search-submit-button")).click();
        Thread.sleep(2000);
        driver.navigate().to("https://www.youtube.com/");

//            Thread.sleep(5000);

    }
}
