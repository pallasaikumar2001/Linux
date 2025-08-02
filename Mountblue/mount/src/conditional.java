public class conditional {
    public static void main(String[] args) {
        // int numrand=(int)(Math.random()*51);
        // if (numrand<25){
        //     System.out.println(numrand+" is lessthan 25");
        // }  
        
        // else if (numrand<40){
        //     System.out.println(numrand+" is lessthan 40");
        // }  
        // else if (numrand==25){
        //     System.out.println(numrand+" is equal to 25");
        // }  
        // else{
        //     System.out.println(numrand+" is lessthan 25");
        // } 
        // if ((true) ^ (false)){
        //     System.out.println("the content is true");
        // }
        // int val1=10;
        // int val2=20;
        // int big=(val1>val2) ? val1:val2;
        // System.out.println(big+" is bigger number");
        char grade='D';
        switch (grade) {
            case 'A':
                System.out.println("Great Job");                            
                break;
            case 'B':
                System.out.println("Good job");
                break;
            case 'C':
                System.out.println("ok");
                break;
            default:
                System.out.println("You failed");
                break;
        }
    }
}
