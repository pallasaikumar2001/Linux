import java.util.LinkedList;
import java.util.Queue;

public class queue {
    public static void main(String[] args) {
        Queue<String> queue=new LinkedList<>();
        queue.offer("Banana");
        queue.add("Apple");
        queue.add("Apple");
        queue.add("Mango");
        System.out.println("Queue: "+queue);

        System.out.println("Head: "+queue.peek());
        queue.remove();
        System.out.println("After remove: "+queue);

        queue.poll();
        System.out.println("after poll: "+queue);

        System.out.println("Queue size is: "+queue.size());

        System.out.println("Is queue empty? "+queue.isEmpty());

    }
}
