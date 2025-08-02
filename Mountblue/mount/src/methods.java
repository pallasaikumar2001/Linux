import java.util.Scanner;
public class methods {
    static double pie=3.14159;
    static Scanner input=new Scanner(System.in);
    public static void main(String[] args) {
        System.out.println("Global "+pie);
        System.out.println("Please provide a value");
        int a=input.nextInt();
        System.out.println("please provide b value");
        int b=input.nextInt();
        addthem(a, b);
    }
    public static int addthem(int a, int b){
        int c=a+b;
        pie=pie+3;
        System.out.println("global "+pie);
        System.out.println(c);
        return 1;
    }
}
