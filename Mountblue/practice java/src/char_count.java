import java.util.HashMap;

public class char_count{
    public static void main(String[] args){
        String input="hello";
        HashMap<Character,Integer> char_countmap=new HashMap<>();

        for (char ch:input.toCharArray()){
            char_countmap.put(ch,char_countmap.getOrDefault(ch,0)+1);
        }
        System.out.println(char_countmap);
    }
}