package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

import java.time.Duration;

public class MainTest {

    @Test
    public static void main(String[] args) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.get("https://accounts.google.com/v3/signin/identifier?ifkv=AeZLP98r0TIWl-Ga37LttW-BHlXYI66uwhq-3-ocfdV-C-mGf0OsZ2KUOoWgloCxXoTqiISwUmq2HA&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1944867518%3A1735811662715142&ddm=1");

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        WebElement loginid = wait.until(ExpectedConditions.elementToBeClickable(By.id("identifierId")));
        loginid.click();
        loginid.sendKeys("pallasaikumar203@gmail.com");

        WebElement nextid = wait.until(ExpectedConditions.elementToBeClickable(By.className("VfPpkd-RLmnJb")));
        nextid.click();

        // Additional wait or assertion to ensure the next page loads
        wait.until(ExpectedConditions.presenceOfElementLocated(By.name("password")));

        // Add more steps if needed, e.g., enter the password
         WebElement password = wait.until(ExpectedConditions.elementToBeClickable(By.name("password")));

//         Thread.sleep(2000);

//        driver.quit();
    }
}
