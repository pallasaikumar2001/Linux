import java.util.Arrays;
import java.util.Collection;
 
import org.junit.Test;
import org.junit.Before;

import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import org.junit.runner.RunWith;
import static org.junit.Assert.assertEquals;

@RunWith(Parameterized.class)
public class primetest {
    private Integer inputNumber;
    private Boolean expected;
    private prime Prime;

    @Before
    public void initialize(){
        Prime=new prime();
    }
    public primetest(Integer inputNumber, Boolean expected){
        this.inputNumber=inputNumber;
        this.expected=expected;
    }

    @Parameterized.Parameters
    public static Collection primeNumbers(){
        return Arrays.asList(new Object[][]{
            { 2, true },
            { 6, false },
            { 19, true },
            { 22, false },
            { 23, true }
        });
    }
    @Test
    public void testprimecheck(){
        System.out.println("parameterized number is: "+inputNumber);
        assertEquals(expected,
        prime.validate(inputNumber));
    }
}
