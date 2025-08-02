package org.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class flipkartnavigation{
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");

        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();

        try {
            FlipkartHomePage homePage = new FlipkartHomePage(driver);
            FlipkartMobilesPage mobilesPage = new FlipkartMobilesPage(driver);

            //Open Flipkart home page
            String homeUrl = "https://www.flipkart.com";
            homePage.openHomePage(homeUrl);
            System.out.println("Opened Flipkart home page");

            //Close the login popup if present
            homePage.closeLoginPopup();

            //Navigate to the Mobiles page
            String mobilesUrl = "https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_98520173-e464-4b16-9d49-72dd2a5c1689_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=ZRQ4DKH28K8J";
            mobilesPage.openMobilesPage(mobilesUrl);
            System.out.println("Navigated to Mobiles category page");
            Thread.sleep(3000);

            //Go back to the home page
            driver.navigate().back();
            System.out.println("Navigated back to Flipkart home page");
            Thread.sleep(3000);

            //Navigate forward to the Mobiles page
            driver.navigate().forward();
            System.out.println("Navigated forward to Mobiles category page");
            Thread.sleep(3000);

            // Refresh the Mobiles page
            driver.navigate().refresh();
            System.out.println("Refreshed the Mobiles page");
            Thread.sleep(3000);

        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        } finally {
            // Close the browser
            driver.quit();
            System.out.println("Test Completed and Browser Closed.");
        }
    }
}
