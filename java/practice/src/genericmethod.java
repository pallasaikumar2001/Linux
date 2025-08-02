class ArrayUtils{
    public static <T> void printArray(T[] array){
        for (T element:array){
            System.out.print(element+" ");
        }
        System.out.println();
    }
}

public class genericmethod {
    public static void main(String[] args) {
        Integer[] intArray = {1, 2, 3, 4, 5};
        String[] strArray = {"Hello", "World"};
        Double[] doubleArray = {2.5, 3.5, 4.5};

        System.out.println("Integer Array: ");
        ArrayUtils.printArray(intArray);

        System.out.println("String Array: ");
        ArrayUtils.printArray(strArray);

        System.out.println("double Array: ");
        ArrayUtils.printArray(doubleArray);
    }
}
