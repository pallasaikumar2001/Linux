
import java.util.ArrayList;
public class list {
    public static void main(String[] args) {
        ArrayList<String> list=new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add(1,"Cherry"); //add element at an index
        System.out.println("List: "+list);

        System.out.println("Element at index 1: "+list.get(1));
        list.set(1,"Mango");  //replace with new element

        System.out.println(list);
        System.out.println("List contains Apple: "+list.contains("Apple"));
        System.out.println("List size is: "+list.size());  
        list.remove("Apple");
        System.out.println("After removal: "+list);
        list.clear();
        System.out.println("is list empty? "+list.isEmpty());      

    }
}
