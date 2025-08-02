package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class FlipkartHomePage {
    WebDriver driver;

    // Constructor
    public FlipkartHomePage(WebDriver driver) {
        this.driver = driver;
    }

    // Locators
    private By closeLoginPopup = By.xpath("//button[contains(text(),'✕')]");

    public void openHomePage(String url) {
        driver.get(url);
    }

    public void closeLoginPopup() {
        try {
            driver.findElement(closeLoginPopup).click();
            System.out.println("Login popup closed.");
        } catch (Exception e) {
            System.out.println("Login popup not present.");
        }
    }
}

