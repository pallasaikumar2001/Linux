import java.util.ArrayList;

public class wildcard {
    public static double sumNumbers(ArrayList<? extends Number> list){
        double sum=0;
        for (Number n : list){
            sum+=n.doubleValue();
        }
        return sum;
    }


    public static void main(String[] args) {
        ArrayList<Integer>intList=new ArrayList<>();
        intList.add(1);
        intList.add(2);
        intList.add(3);

        ArrayList<Double>doubleList=new ArrayList<>();
        doubleList.add(1.1);
        doubleList.add(2.2);


        System.out.println("Sum of the integers is : "+sumNumbers(intList));
        System.out.println("Sum of the doubles is : "+sumNumbers(doubleList));
    }
}
