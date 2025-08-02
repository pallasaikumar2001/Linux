package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public interface EventCaptures {
    void beforeClick(WebElement element, WebDriver driver);

    void afterClick(WebElement element, WebDriver driver);

    void beforeFindElement(WebDriver driver, By locator);

    void afterFindElement(WebDriver driver, By locator, WebElement result);
}
