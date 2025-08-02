public class throwingexception {
    public static void main(String[] args) {
        try{
            validateage(15);
        }
        catch (IllegalArgumentException e){
            System.out.println("Caught exception: "+e.getMessage());
        }
        System.out.println("Program is completed");
    }
    public static void validateage(int age){
        if (age<18){
            throw new IllegalArgumentException("Age muste be atleast 18.");
        }
        System.out.println("Age is valid!");
    }
}
