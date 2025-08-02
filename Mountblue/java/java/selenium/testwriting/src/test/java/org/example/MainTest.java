package org.example;

//import org.junit.After;
//import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

//import static org.junit.Assert.assertTrue;

public class MainTest {
    @Test
    public void main() throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.get("https://accounts.google.com/v3/signin/identifier?ifkv=AeZLP981EQnuFOhN6vZQZVdRver6sxcx7MviHMh0fW4nD74SRQl9PdsXTfm3jwCnoigkqTU3fTE9DA&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S876317630%3A1735551316475785&ddm=1");
        driver.manage().window().maximize();
        driver.findElement(By.id("identifierId")).sendKeys("saiuppalur@gmail.com");
        Thread.sleep(3000);
        driver.findElement(By.className("VfPpkd-vQzf8d"));
        Thread.sleep(2000);
        String at=driver.getTitle();
        String et="gmail";
        System.out.println(at);
//        driver.close();
        if (at.equalsIgnoreCase(et)){
            System.out.println("Test successfull");
        }
        else{
            System.out.println("Test failure");
        }


    }
}