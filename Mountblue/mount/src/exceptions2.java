import java.util.*;
public class exceptions2 {
    static Scanner userInput=new Scanner(System.in);
    public static void main(String[] args) {
        System.out.print("how old are you?");
        int age=checkvalidage();
        if (age!=0){
            System.out.println("You are "+age+" years old");
        }
    }
    public static int checkvalidage(){
        try{
            return userInput.nextInt();
        }
        catch(InputMismatchException e){
            userInput.next();
            System.out.println("that is not a whole number");
            System.out.println("Please enter the whole numbers only");
            return 0;
        }
    }
}
