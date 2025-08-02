package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {
    public static void main(String[] args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        WebDriver driver=new ChromeDriver();
        driver.get("https://www.google.com");
        Thread.sleep(2000);
        try{
            driver.findElement(By.name("fake")).click();
//            driver.switchTo().alert().accept();
        }
        catch(NoSuchElementException e) {
            System.out.println("Element not found");
            System.out.println("Hello");
//            throw (e);
//            e.printStackTrace();
        }
//        driver.switchTo().frame("Fail");
//        driver.close();

    }
}