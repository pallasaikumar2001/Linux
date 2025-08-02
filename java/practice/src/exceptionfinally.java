import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
public class exceptionfinally {
    public static void main(String[] args){
        Scanner scanner=null;
        try {
            scanner=new Scanner(new File("nonexistent.txt"));
            while (scanner.hasNextLine()){
                System.out.println(scanner.nextLine());
            }
        }catch(FileNotFoundException e){
            System.out.println("File not found: "+e.getMessage());
        }finally{
            System.out.println("Closing scanner in finally block...");
            if (scanner!=null){
                scanner.close();
            }

        }
        System.out.println("Program ends.");
    }
}
