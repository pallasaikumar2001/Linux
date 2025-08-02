import org.junit.After;
import org.junit.AfterClass;

import org.junit.Before;
import org.junit.BeforeClass;

import org.junit.Ignore;
import org.junit.Test;

public class annotation {

    @BeforeClass
    public static void beforeclass(){
        System.out.println("it is before class");
    }
    @AfterClass
    public static void afterclass(){
        System.out.println("it is after class");
    }
    @Before
    public void before(){
        System.out.println("it is before");
    }
    @After
    public void after(){
        System.out.println("it is after");
    }
    @Test
    public void test(){
        System.out.println("it is test");
    } 
    @Ignore
    public void ignoretest(){
        System.out.println("it is ignore test");
    }
}
