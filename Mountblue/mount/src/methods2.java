import java.util.Scanner;
public class methods2 {
    static int randomnumber;
    static Scanner userinput=new Scanner(System.in);
    public static void main(String[] args) {
        System.out.println(getRandomNum());
        int guessresult=1;
        int randomguess=0;
        while(guessresult!=-1){
            System.out.println("guess a number between 0 and 50: ");
            randomguess=userinput.nextInt();
            guessresult=checkGuess(randomguess);
        }
        System.out.println("Yes the random number is :"+randomguess);
        
    }
    public static int getRandomNum(){
        randomnumber=(int)(Math.random()*51);
        return randomnumber;
    }
    public static int checkGuess(int guess){
        if (guess==randomnumber){
            return -1;

        }
        else{
            return guess;
        }
    }

}
