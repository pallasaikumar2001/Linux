package org.example;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.jupiter.api.Assertions.*;
import java.util.concurrent.TimeUnit;
class MainTest {
    @Test
    public void main(){
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        WebDriver driver = new ChromeDriver();

        try {
            driver.manage().window().maximize();
            driver.manage().deleteAllCookies();
            driver.get("https://www.google.com/");
            WebElement searchBox = driver.findElement(By.name("q"));
            searchBox.sendKeys("Selenium");
            searchBox.submit();
            Thread.sleep(2000);
            String title = driver.getTitle();
            assertEquals(true, title.contains("Selenium"), "Title does not contain the search query");
        }
        catch (Exception e){
            e.printStackTrace();
            fail(e.getMessage());
        }finally {
//            driver.quit();
        }
    }
}