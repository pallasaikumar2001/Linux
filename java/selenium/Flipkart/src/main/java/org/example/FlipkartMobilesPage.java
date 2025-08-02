package org.example;

import org.openqa.selenium.WebDriver;

public class FlipkartMobilesPage {
    WebDriver driver;

    // Constructor
    public FlipkartMobilesPage(WebDriver driver) {
        this.driver = driver;
    }

    // Methods
    public void openMobilesPage(String url) {
        driver.navigate().to(url);
    }
}

