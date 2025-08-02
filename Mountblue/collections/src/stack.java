import java.util.Stack;

public class stack {
    public static void main(String[] args) {
        Stack<String> stack=new Stack<>();
        stack.push("Apple");
        stack.push("Banana");

        System.out.println("Stack: "+stack);

        stack.pop();
        System.out.println("After pop: "+stack);

        System.out.println("is stack empty? "+stack.isEmpty());
    }
}
