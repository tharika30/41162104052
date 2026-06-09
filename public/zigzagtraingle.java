import java.util.*;
public class zigzagtraingle{
    static void zigzag(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                System.out.print("  ");
            }
        for(int j=1;j<=n;j++){
            if(j==n)
                System.out.print("*");
            else
                System.out.print("* ");
        }
        System.out.println();
    }
}
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter value n");
        int n = sc.nextInt();
        zigzag(n);
        sc.close();
    }

}