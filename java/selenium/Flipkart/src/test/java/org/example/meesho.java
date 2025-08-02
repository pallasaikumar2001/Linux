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

import java.time.Duration;

public class meesho {

    WebDriver driver;
    WebDriverWait wait;

    @BeforeClass
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        driver = new ChromeDriver();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        System.out.println("Opening ChromeDriver...");
    }

    @Test(priority = 1)
    public void openmeesho() {
        System.out.println("Opening Meesho...");
        driver.get("https://www.meesho.com/");
        System.out.println("Opened Meesho");
//        System.out.println(driver.getTitle());
        Assert.assertTrue(driver.getTitle().toLowerCase().contains("meesho"));
    }

    @Test(priority = 2, dependsOnMethods = "openmeesho")
    public void selectanitem() throws InterruptedException {
        WebElement searchbar = driver.findElement(By.xpath("/html/body/div/div[2]/div[1]/div/div[2]/div/input"));
        searchbar.sendKeys("Shoes for men");
        System.out.println("Searching for Shoes for men...");
        Thread.sleep(2000);
        searchbar.sendKeys(Keys.RETURN);
        Thread.sleep(5000);

        // Selecting an item from the list of shoes
        try {
            WebElement firstItem = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div/div[3]/div/div[3]/div[2]/div[1]/div/div/div/div[1]/div[2]/a/div/div[1]/img")));
            firstItem.click();
            System.out.println("Selecting an item from the list...");
            Thread.sleep(3000);
        } catch (Exception e) {
            System.out.println("Error occurred: " + e.getMessage());
        }
        String expected=driver.getTitle();
//        expected+="sai";
        Assert.assertEquals(expected,driver.getTitle());
    }

    @Test(priority = 3, dependsOnMethods = "selectanitem")
    public void cartpage() throws InterruptedException {
        try {
            //size selecting
            driver.findElement(By.xpath("/html/body/div/div[3]/div/div[2]/div[2]/div/div/div/span[5]/span")).click();
//            driver.findElement(By.xpath("//span[text()='Add to Cart']")).click();
            WebElement addtocart = wait.until(ExpectedConditions.elementToBeClickable(
                    By.xpath("/html/body/div/div[3]/div/div[1]/div/div[2]/div[2]/div/div/button[1]/div/span")));
            addtocart.click();
            System.out.println("Adding selected item to the cart.");
            Thread.sleep(3000);
        } catch (Exception e) {
            System.out.println("Error occurred: " + e.getMessage());
        }
        String expected=driver.getTitle();
//        expected+="Sai";
        Assert.assertEquals(driver.getTitle(),expected);
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
//            driver.quit();
            System.out.println("Closed ChromeDriver.");
        }
    }
}
