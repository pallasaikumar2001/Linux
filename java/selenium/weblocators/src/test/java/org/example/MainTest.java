package org.example;

//import static org.testng.Assert.*;

import org.junit.jupiter.api.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import static org.junit.jupiter.api.Assertions.*;

public class MainTest {
    private WebDriver driver;

    @BeforeEach
    public void setUp(){
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");

        driver=new ChromeDriver();
        driver.manage().window().maximize();
        //opening gmail
        driver.get("https://www.gmail.com");
    }
//    @Test
    public void testLocatedById(){
        WebElement emailInput=driver.findElement(By.id("identifierId"));
        assertNotNull(emailInput, "Email input field should be located by ID");
        emailInput.sendKeys("saiuppalur@gmail.com");
    }

    @Test
    public void testLocateByCssSelector() throws InterruptedException {
        WebElement emailInput=driver.findElement(By.id("identifierId"));
        emailInput.sendKeys("saiuppalur@gmail.com");

        WebElement nextButton=driver.findElement(By.cssSelector(".VfPpkd-RLmnJb"));
        assertNotNull(nextButton,"Next button should be located by css selector");
        Thread.sleep(3000);
    }

//    @Test
    public void testLocateByClassName(){
        WebElement nextButton=driver.findElement(By.className("VfPpkd-LgbsSe"));
        assertNotNull(nextButton,"Next button should be located by classname");
    }

//    @Test
//    public void testLocateByLinkText(){
//        WebElement learnMoreLink=driver.findElement(By.linkText("Learn more"));
//        assertNotNull(learnMoreLink,"Learnmore link should be located by LinkText");
//        System.out.println("Link Text: "+learnMoreLink.getText());
//    }

//    @Test
    public void testLocateByPartialLinkText(){
        WebElement partialLearnMoreLink=driver.findElement(By.partialLinkText("Learn"));
        assertNotNull(partialLearnMoreLink,"Partial learn more link should be locatedby partialLinkText");
        System.out.println("Partial link text: "+partialLearnMoreLink.getText());
    }

    @AfterEach
    public void tearDown(){
        if(driver!=null){
            driver.quit();
        }
    }


}


