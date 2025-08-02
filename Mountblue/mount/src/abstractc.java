abstract class shape{
    abstract void draw();
}

class circle extends shape{
    void draw(){
        System.out.println("drawing circle");
    }
}

public class abstractc {
    public static void main(String[] args){
        shape obj=new circle();
        obj.draw();
    }
}
