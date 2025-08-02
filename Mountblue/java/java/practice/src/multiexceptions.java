public class multiexceptions {
    public static void main(String[] args) {
        try {
            int[] arr={10,20};
            System.out.println(arr[3]);
            int result=10/0;
        }
        catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("array error: "+e.getMessage());
        }catch(ArithmeticException e){
            System.out.println("Math error: "+e.getMessage());
        }
        finally{
            System.out.println("Finally block executed.");
        }
    }
}
