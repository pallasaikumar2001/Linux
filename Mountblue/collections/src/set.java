// import java.util.HashSet;

import java.util.HashSet;

public class set {
    public static void main(String[] args) {
        HashSet <String> set=new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple");
        System.out.println("Set is : "+set);

        System.out.println("Contains Banana: "+set.contains("Banana"));

        set.remove("Banana");
        System.out.println("After removal: "+set);
        System.out.println("Set size is: "+set.size());
        set.clear();
        System.out.println("Is set empty: "+set.isEmpty());
    }
}
