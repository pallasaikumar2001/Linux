class Pair<T,U>{
    private T first;
    private U second;
    public Pair(T first, U second){
        this.first=first;
        this.second=second;
    }
    public T getFirst(){
        return first;
    }
    public U getSecond(){
        return second;
    }
    public void setFirst(T first){
        this.first=first;
    }
    public void setsecond(U second){
        this.second=second;
    }
}

public class generic {
    public static void main(String[] args) {
        Pair<String,Integer> pair=new Pair<>("age",23);
        System.out.println("First: "+pair.getFirst());
        System.out.println("Second: "+pair.getSecond());

        Pair<Double,Boolean> anotherPair=new Pair<>(3.14,true);
        System.out.println("First: "+anotherPair.getFirst());
        System.out.println("Second: "+anotherPair.getSecond());
    }
}
