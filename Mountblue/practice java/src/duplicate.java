import java.util.*;

public class duplicate{
    public static void main(String[] args){
        int[] arr={1,2,4,3,5,2,3,7};
        HashMap<Integer,Integer>map=new HashMap<>();
        for (int num:arr){
            map.put(num,map.getOrDefault(num, 0)+1);
        }
        System.out.println("Duplicate Elements: ");
        for (Map.Entry<Integer,Integer> entry : map.entrySet()){
            if (entry.getValue()>1){
                System.out.println(entry.getKey()+" ");
            }
        }
    }
}
