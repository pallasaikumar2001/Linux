import java.util.ArrayList;
import java.util.Collections;

public class utility {
    public static void main(String[] args) {
        ArrayList<Integer> list=new ArrayList<>();
        Collections.addAll(list,3,2,5,4,3,6);

        Collections.sort(list);
        System.out.println("Sorted: "+list);
        
        Collections.sort(list,Collections.reverseOrder());
        System.out.println("Reverse Sorted: "+list);
        
        Collections.shuffle(list);
        System.out.println("Shuffled: "+list);

        System.out.println("Max value: "+Collections.max(list));
    }
}
