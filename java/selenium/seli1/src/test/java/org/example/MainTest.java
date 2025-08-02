package org.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.assertTrue;

public class MainTest {
    private WebDriver driver;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        driver = new ChromeDriver();
    }

    @Test
    public void testGoogleHomePageTitle() {
        // Open Google's homepage
        driver.get("https://www.google.com");

        // Verify the page title
        String title = driver.getTitle();
        System.out.println("Page Title: " + title);
        assertTrue("Page title should start with Google", title.startsWith("Google"));
    }

    @After
    public void tearDown() {
        // Quit WebDriver after the test
        if (driver != null) {
            driver.quit();
        }
    }
}
