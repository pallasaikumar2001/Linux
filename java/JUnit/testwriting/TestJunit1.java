import org.junit.Test;
// import org.junit.Ignore;
import static org.junit.Assert.assertEquals;

public class TestJunit1 {

    String message = "Palla";	
    MessageUtil1 messageUtil = new MessageUtil1(message);
    
    @Test
    public void testPrintMessage() {	
        System.out.println("Inside testunit1PrintMessage()");    
        assertEquals(message, messageUtil.printMessage());     
    }
}
