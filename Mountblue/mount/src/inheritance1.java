public class inheritance1 {
    public static void main(String[] args) {
       Child child1=new Child("Saikumar", 23) ;
       child1.displayInfo();
    }
}
class Parent{
    String car="TATA";
    String bike="RE Hunter";
    int cash=20000;

}
class Child extends Parent{
    String name;
    int age;
    Child(String name,int age){
        this.name=name;
        this.age=age;
    }
    void displayInfo(){
        System.out.println(name);
        System.out.println(age);
        System.out.println(bike);
        System.out.println(car);
        System.out.println(cash);
    }
}
