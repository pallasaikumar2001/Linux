
class Box<T>{
    private T item;
    public void setItem(T item){
        this.item=item;
    }
    public T getItem(){
        return item;
    }
}

public class genericclass {
    public static void main(String[] args) {
        Box<Integer> intBox=new Box<>();
        intBox.setItem(1234);
        System.out.println("Integer value is : "+intBox.getItem());
        
        Box<String> strBox=new Box<>();
        strBox.setItem("Generics in Java");
        System.out.println("String value is : "+strBox.getItem());

        Box<Double> doubleBox=new Box<>();
        doubleBox.setItem(3.14);
        System.out.println("Double value: "+doubleBox.getItem());
    }
}
