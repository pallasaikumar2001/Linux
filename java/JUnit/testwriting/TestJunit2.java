import org.junit.Test;
// import org.junit.Ignore;
import static org.junit.Assert.assertEquals;

public class TestJunit2 {

    String message = "Saikumar";	
    MessageUtil1 messageUtil = new MessageUtil1(message);
 
    @Test
    public void testSalutationMessage() {
        System.out.println("Inside testunit2 testSalutationMessage()");
        message = "Hi!" + "Saikumar";
        assertEquals(message,messageUtil.salutationMessage());
    }
}