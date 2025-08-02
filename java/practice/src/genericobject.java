import java.util.ArrayList;

public class genericobject {

    public static void main(String[] args){
        ArrayList list=new ArrayList();
        list.add("Hello");
        String str=(String) list.get(0);
        System.out.println("Without Generics: "+str);

        ArrayList<String> genericList=new ArrayList<>();
        genericList.add("Hello Generics");
        String genericstr=genericList.get(0);
        System.out.println("With Generics: "+genericstr);
    }
}