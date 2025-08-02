import java.util.HashMap;
import java.util.TreeMap;

public class sortmap {
    public static void main(String[] args) {
        HashMap<Integer,String> map=new HashMap<>();
        map.put(3,"Three");
        map.put(1,"One");
        map.put(2,"Two");
        TreeMap<Integer,String> sortedMap=new TreeMap<>(map);
        System.out.println("Sorted Map: "+sortedMap);
    }
}
