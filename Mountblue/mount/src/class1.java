import java.util.Scanner;

public class class1 {
    static Scanner userInput=new Scanner(System.in);
    public static void main(String[] args)
    {
        System.out.println("your favourite number is : ");
        if (userInput.hasNextInt()){
            int n=userInput.nextInt();
            System.out.println("your favourite number is : "+n); 
            int nplus2=n+n;
            System.out.println(n+"+"+n+"="+nplus2);
            System.out.println(n+"%"+n+"="+n%3);
            n+=2;
            System.out.println(n);
            // n*=4;
            // System.out.println(n);
            int big=Math.max(5,n);
            System.out.println(big+"is bigger");
            int sml=Math.min(5,n);
            System.out.println(sml+"is smaller");
            double numsqr=Math.sqrt(n);
            System.out.println(numsqr+" is the sqeareroot of number :"+n);
            int numceil=(int) Math.ceil(numsqr);    //6
            int numfloor=(int) Math.floor(numsqr);  //5
            System.out.println(numceil);    
            System.out.println(numfloor);  
            int numround=(int) Math.round(numsqr);   // return lower value if decimalpoints less then 0.5 else higher value
            System.out.println(numround);
            int numrand=(int) (Math.random()*20);
            System.out.println(numrand);

        }
        else{
            System.out.println("enter an integer next time");
        }
    }
}
