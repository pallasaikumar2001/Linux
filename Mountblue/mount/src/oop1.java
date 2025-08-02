public class oop1 {
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
    public static void main(String[] args) {
        oop1 outer=new oop1();
        Student student1=outer.new Student(1, "Saikumar", 72.1f);
        student1.displayInfo();
    }
}
