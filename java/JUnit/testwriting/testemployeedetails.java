import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class testemployeedetails {
    Employeebusinesslogic employeebusinesslogic=new Employeebusinesslogic();
    Employeedetails employee=new Employeedetails();
    
    @Test
    public void testcalculateappraisal(){
        
        employee.setname("Saikumar");
        employee.setage(25);
        employee.setmonthlysalary(8000);
        double appraisal=employeebusinesslogic.calculateapprisal(employee);
        assertEquals(500,appraisal,0.0);

    }

    @Test
    public void testyearlysalary(){
        employee.setname("Saikumar");
        employee.setage(25);
        employee.setmonthlysalary(8000);

        double salary=employeebusinesslogic.calculatepackage(employee);
        assertEquals(96000, salary, 0.0);
    }
}
