public class Employeebusinesslogic {
    public double calculatepackage(Employeedetails employeedetails){
        double pkg=0;
        pkg=employeedetails.getmonthlysalary()*12;
        return pkg;
    }

    public double calculateapprisal(Employeedetails employeedetails){
        double appraisal=0;

        if (employeedetails.getmonthlysalary()<10000){
            appraisal=500;
        }
        else{
            appraisal=1000;
        }
        return appraisal;
    }
}
