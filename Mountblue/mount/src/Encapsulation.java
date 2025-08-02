class encapse{
    private String name;
    
    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name=name;
    }
}

public class Encapsulation {
    public static void main(String[] args) {
        encapse obj=new encapse();
        obj.setName("Saikumar");
        System.out.println(obj.getName());
    }
}
