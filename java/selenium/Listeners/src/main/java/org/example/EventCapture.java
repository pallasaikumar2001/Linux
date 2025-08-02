package org.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.openqa.selenium.support.events.WebDriverListener;

public class EventCapture implements WebDriverListener {

    @Override
    public void beforeFindElement(WebDriver driver, By locator) {
        System.out.println("Attempting to find element: " + locator);
    }

    @Override
    public void afterFindElement(WebDriver driver, By locator, WebElement element) {
        System.out.println("Found element: " + element);
    }

    @Override
    public void beforeClick(WebElement element, WebDriver driver) {
        System.out.println("Before clicking on: " + element.getText());
    }

    @Override
    public void afterClick(WebElement element, WebDriver driver) {
        System.out.println("Clicked on: " + element.getText());
    }

    @Override
    public void onError(Throwable error, WebDriver driver) {
        System.out.println("Error encountered: " + error.getMessage());
    }
}
