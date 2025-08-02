import java.util.ArrayList;
import java.util.Iterator;
import java.util.Arrays;

public class arraylist {
    public static void main(String[] args){
        ArrayList arraylistone;
        arraylistone =new ArrayList();
        ArrayList arraylisttwo=new ArrayList();
        ArrayList <String>names=new ArrayList();
        names.add("saikumar");
        names.add("kumar");
        // names.add();

        names.add(0,"PallaSaikumar");

        for (int i=0; i<names.size();i++){
            System.out.println(names.get(i));
        }
    }    
}
