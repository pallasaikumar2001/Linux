package org.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Main {
    public static void main(String[] args) {
        // Set ChromeDriver path
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");

        // Launch WebDriver
        WebDriver driver = new ChromeDriver();

        // Open Google's homepage
        driver.get("https://www.google.com");

        // Print the title
        System.out.println("Page Title: " + driver.getTitle());

        // Quit WebDriver
        driver.quit();
    }
}
