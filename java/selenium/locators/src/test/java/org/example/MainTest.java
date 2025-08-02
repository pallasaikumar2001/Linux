package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.jupiter.api.Assertions.*;
import java.util.concurrent.TimeUnit;
class MainTest {
    public static void main(String[] args) throws InterruptedException{
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        WebDriver driver=new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(40,TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
        driver.get("https://www.ebay.com/");
        Thread.sleep(1000);
        driver.findElement(By.xpath("//input[@id='gh-ac']")).sendKeys("Guitar");
        WebElement searchIcon=driver.findElement(By.xpath("//input[@id='gh-btn']"));
        searchIcon.click();

//        WebElement username=driver.findElement(By.id("login-username"));
//        username.sendKeys("saiuppalur@gmail.com");
//        WebElement nextbutton=driver.findElement(By.id("login-signin"));
//        nextbutton.click();
//        driver.findElement(By.partialLinkText("Forgot")).click();
//        Thread.sleep(3000);
//        driver.findElement(By.xpath("//input[@id='login-username']")).sendKeys("saiuppalur@gmail.com");
    }
}