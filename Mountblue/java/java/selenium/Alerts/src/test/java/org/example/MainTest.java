package org.example;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class MainTest {
    public static void main(String[] args) throws InterruptedException {
        // Set up the Chrome WebDriver
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        ChromeDriver driver = new ChromeDriver();
        driver.manage().window().maximize();

        driver.get("https://demoqa.com/alerts");
        driver.findElement(By.xpath("//*[@id=\"confirmButton\"]")).click();

        Thread.sleep(3000);
        Alert alert = driver.switchTo().alert();
        alert.accept();

        driver.findElement(By.xpath("//*[@id=\"confirmButton\"]")).click();
        Thread.sleep(3000);

        Alert alert1 = driver.switchTo().alert();
        alert1.dismiss();

    }
}
