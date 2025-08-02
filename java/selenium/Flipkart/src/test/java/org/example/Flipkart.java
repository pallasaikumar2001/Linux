package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
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
import java.util.Set;

public class Flipkart {
    WebDriver driver;
    WebDriverWait wait;

    @BeforeClass
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        driver = new ChromeDriver();
        wait = new WebDriverWait(driver, Duration.ofSeconds(15));
    }

    @Test(priority = 1)
    public void openFlipkart() {
        System.out.println("Opening Flipkart...");
        driver.get("https://www.flipkart.com");
        try {
            WebElement closeModal = driver.findElement(By.xpath("//button[contains(text(),'✕')]"));
            closeModal.click();
        } catch (Exception e) {
            System.out.println("No login modal displayed.");
        }

        String pageTitle = driver.getTitle();
//        System.out.println(pageTitle);
        Assert.assertEquals(pageTitle,"Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
        System.out.println("Flipkart opened successfully.");
    }

    @Test(priority = 2, dependsOnMethods = "openFlipkart")
    public void selectOnePlusNord() {
        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.sendKeys("oneplus nord CE4");
        System.out.println("Searching for OnePlus Nord CE4...");
        searchBox.submit();

        WebElement firstItem = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"container\"]/div/div[3]/div[1]/div[2]/div[2]/div/div/div/a/div[2]/div[1]/div[1]")));
        firstItem.click();
        System.out.println("Selecting an item in the list...");

        String mainWindow = driver.getWindowHandle();
        Set<String> allWindows = driver.getWindowHandles();
        for (String window : allWindows) {
            if (!window.equals(mainWindow)) {
                driver.switchTo().window(window);
                break;
            }
        }

        String currentURL = driver.getCurrentUrl();
//        assert currentURL != null;
        Assert.assertTrue(currentURL.contains("oneplus"), "Failed to navigate to the selected item's page!");
        System.out.println("Navigated to the item's page successfully.");
    }

    @Test(priority = 3, dependsOnMethods = "selectOnePlusNord")
    public void addToCart() {
        WebElement addToCart = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"container\"]/div/div[3]/div[1]/div[1]/div[2]/div/ul/li[1]/button")));
        System.out.println("Adding to cart...");
        addToCart.click();

        // Retry mechanism for handling stale element
        for (int i = 0; i < 3; i++) {
            try {
                WebElement cartIcon = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[contains(text(), 'Cart')]")));
                Assert.assertTrue(cartIcon.isDisplayed(), "Failed to add the item to the cart!");
                System.out.println("Item is added to the cart successfully.");
                break; // exit loop if successful
            } catch (StaleElementReferenceException e) {
                System.out.println("Encountered a stale element. Retrying...");
            }
        }
    }


    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
        System.out.println("Browser closed.");
    }
}
