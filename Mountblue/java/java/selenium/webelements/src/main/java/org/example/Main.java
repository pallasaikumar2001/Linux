package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        WebDriver driver = new ChromeDriver();

        try {
            driver.get("https://www.amazon.com/");
            Thread.sleep(4000);
            driver.findElement(By.id("twotabsearchtextbox")).sendKeys("Skemi Digital Watch");
            Thread.sleep(2000);
            driver.findElement(By.id("nav-search-submit-button")).click();
        } finally {
            Thread.sleep(5000);
//            driver.quit();
        }
    }
}
