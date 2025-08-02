package org.example;


import io.opentelemetry.api.incubator.events.EventBuilder;
import io.opentelemetry.api.incubator.events.EventLogger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.events.EventFiringDecorator;
import org.openqa.selenium.support.events.WebDriverListener;

public class MainTest {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");

        WebDriver baseDriver = new ChromeDriver();

        // Create an instance of your listener
        EventLogger listener = new EventLogger() {
            @Override
            public EventBuilder builder(String s) {
                return null;
            }
        };

        // Decorate the WebDriver with the listener
        WebDriver driver = new EventFiringDecorator<>((WebDriverListener) listener).decorate(baseDriver);

        try {
            // Navigate to a webpage
            driver.get("https://example.com");

            // Interact with elements
            WebElement element = driver.findElement(By.tagName("h1"));
            element.click();

        } catch (Exception e) {
            System.out.println("An error occurred during execution.");
        } finally {
            // Quit the WebDriver
            driver.quit();
        }

    }
}
