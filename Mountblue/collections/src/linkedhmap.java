import java.util.LinkedHashMap;
import java.util.Map;

public class linkedhmap {
    public static void main(String[] args) {
        LinkedHashMap<Integer,String> map=new LinkedHashMap<>();
        map.put(1,"One");
        map.put(2,"two");
        map.put(1,"Updated one");
        System.out.println(map);
        System.out.println(map.get(1));
        map.remove(1);
        System.out.println(map);
        System.out.println(map.containsKey(1));
        System.out.println(map.containsKey(2));
        System.out.println(map.containsValue("two"));
        System.out.println(map.containsValue("one"));
        map.clear();
        System.out.println(map.isEmpty());
        System.out.println(map.size());
        map.put(1, "One");
        map.put(2, "Two");
        System.out.println(map.keySet());
        System.out.println(map.values());
        
        // for loop on map:

        for (Map.Entry<Integer,String>entry:map.entrySet()){
            System.out.println(entry.getKey()+"="+entry.getValue());
        }

    }
}
