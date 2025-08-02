public class baseexception {
    public static void main(String[] args) {
        try{
            int result=10/0;
            System.out.println("result: "+result);
        }catch(ArithmeticException e){
            System.out.println("Caught an Arithmetic execption : "+e.getMessage());
        }
        System.out.println("Program completed");
    }
}
