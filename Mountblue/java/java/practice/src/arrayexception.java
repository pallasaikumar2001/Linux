public class arrayexception {
    public static void main(String[] agrs){
        int[] arr={10,20,30};
        try{
            System.out.println("value: "+arr[3]);
        }
        catch(ArrayIndexOutOfBoundsException e){
            System.out.println("Caught ArrayIndexOutOfBound: "+e.getMessage());
        }
        try{
            int[] invalidArray=new int[-5];

        }catch(NegativeArraySizeException e){
            System.out.println("Caught negativeArraySizeException: "+e.getMessage());
        }
    }
}
