public class exceptions {
    public static void main(String[] args) {
        dividebyzero(2);
    }
    public static void dividebyzero(int a){
        // System.out.println(a/0);

        try{
            System.out.println(a/0);
        }
        catch(ArithmeticException e){
            System.out.println("You can't do that");
            System.out.println(e.getMessage());
            System.out.println(e.toString());
        }
    }

}
