import java.util.HashMap;

public class map {
    public static void main(String[] args) {
        HashMap<String,Integer> map=new HashMap<>();
        map.put("apple",100);
        map.put("banana",200);
        System.out.println(map);
        System.out.println("Value of banana: "+map.get("banana"));
        System.out.println("Contains key 'apple': "+map.containsKey("apple"));
        for (String key:map.keySet()){
            System.out.println(key+" = "+map.get(key));
        }
        map.remove("apple");
        System.out.println("After remove: "+map);
        System.out.println("Map size: "+map.size());
    }
}
