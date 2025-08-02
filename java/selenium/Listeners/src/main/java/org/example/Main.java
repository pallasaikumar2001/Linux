package org.example;//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Main {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver","/usr/bin/chromedriver");
        WebDriver driver=new ChromeDriver();
        JavascriptExecuter js=(JavascriptExecuter)driver;
        EveneFiringWebDriver eventHandler=new EventFiringWebDriver(driver);
        EventCapture eCapture= newEventCapture();
    }
}