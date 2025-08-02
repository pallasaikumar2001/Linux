public class oop11 {
    public static void main(String[] args) {
        Student student1=new Student(1, "Saikumar", 71.3f);
        student1.displayInfo();
    }
}
class Student{
    String school="ZPHS";
    String Address="Uppalur";
    int rno;
    String name;
    float marks;
    Student(int rno,String name,float marks){
        this.rno=rno;
        this.name=name;
        this.marks=marks;
    }
    void displayInfo(){
        System.out.println("Roll Number :"+rno);
        System.out.println("Name :"+name);
        System.out.println("marks :"+marks);
        System.out.println("school :"+school);
        System.out.println("address :"+Address);
    }
}
