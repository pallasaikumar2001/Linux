public class App {
    public static void main(String[] args) throws Exception {
        int[] randomarray;
        int[] numberarray=new int[10];
        randomarray=new int[20];
        randomarray[1]=2;
        String[] stringarray={"just","random","words"};
        for (int i=0;i<numberarray.length;i++){
            numberarray[i]=i;
        }

        int k=1;
        while (k<=41){System.out.print("-");k++;}
        
        for (int j=0; j<numberarray.length;j++){
            System.out.print("| "+j+" ");
        }
        System.out.println("|");

        String[][] multiarray=new String[10][10];
        for (int i=0;i<multiarray.length;i++){
            for (int j=0;j<multiarray.length;j++){
                multiarray[i][j]=i+" "+j;
            }
        }
        k=1;
        
        while (k<=100){System.out.print("-");k++;}

        for (int i=0;i<multiarray.length;i++){
            for (int j=0;j<multiarray.length;j++){
                System.out.print("| "+multiarray[i][j]+" = "+i*j);
            }
            System.out.println();
        }

        System.out.println();
        for (int row :numberarray){
            System.out.print(row);
        }
        System.out.println("\n");

    }
}
