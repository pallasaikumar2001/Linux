package org.example;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import org.testng.internal.thread.ThreadExecutionException;

import java.time.Duration;

public class gmail {

    WebDriver driver;
    WebDriverWait wait;
    @BeforeClass
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        driver = new ChromeDriver();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        System.out.println("Opening ChromeDriver...");
    }
    @Test
    public void opengmail() throws InterruptedException {
        System.out.println("opening gmail login page");
        driver.get("https://www.edureka.co/");
        WebElement signup= driver.findElement(By.xpath("/html/body/div[1]/div/nav/div[4]/button"));
        System.out.println("opening signingUp");
        signup.click();

        WebElement login= driver.findElement(By.xpath("/html/body/div[3]/div/div/div/form[1]/div[5]/span"));
        System.out.println("oepning login page");
        login.click();
        Thread.sleep(2000);

        WebElement ID=driver.findElement(By.id("loginFormEmail"));
        ID.sendKeys("pallasaikumar2001@gmail.com");
        System.out.println("sending id");
        ID.submit();
//        Thread.sleep(2000);

        WebElement password=driver.findElement(By.id("loginPassword"));
        password.sendKeys("AP04@n6291");
        System.out.println("sending password");
        Thread.sleep(2000);
        password.submit();
    }

}
