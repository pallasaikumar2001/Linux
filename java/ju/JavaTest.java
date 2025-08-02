// import org.junit.Test;
// import static org.junit.Assert.assertEquals;

// public class TestJunit {
//    @Test
	
//    public void testAdd() {
//       String str = "Junit is working fine";
//       assertEquals("Junit is working fine",str);
//    }
// }
// import junit.framework.*;
import static org.junit.Assert.*;
import org.junit.Test;

public class JavaTest {
    private int value1 = 3, value2 = 2;

    @Test
    public void testAdd() {
        int result = value1 + value2;
        assertTrue("Sum of value1 and value2 should be 6", result == 6);
    }
}
