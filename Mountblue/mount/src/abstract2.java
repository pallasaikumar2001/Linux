abstract class Vehicle {
    abstract void start();
    void stop(){
        System.out.println("vehicle is stopped");
    }

    
}
class Car extends Vehicle{
    void start(){
        System.out.println("car started");
    }
}

public class abstract2 {
    public static void main(String[] args) {
        Vehicle mycar=new Car();
        mycar.start();
        mycar.stop();
    }
}
