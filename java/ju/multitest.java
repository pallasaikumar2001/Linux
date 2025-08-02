import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class multitest {
    private int value1=23,value2=4;
    @Test
    public void testAdd(){
        int result=value1*value2;
        assertTrue("multiplication value1 and value2 must be 90",result==92);
    }    
}
