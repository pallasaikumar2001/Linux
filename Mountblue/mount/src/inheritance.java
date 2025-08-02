class parent{
    int value;
    void display(){
        System.out.println("value: "+value);
    }
}
class child extends parent{
    void setValue(int val){
        value=val;
    }
}


public class inheritance{
    public static void main(String[] args) {
        child obj=new child();
        obj.setValue(10);
        obj.display();        
    }
}