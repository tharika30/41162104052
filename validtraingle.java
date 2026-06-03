import java.util.Scanner;
public class validtraingle {
   public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter the size of A");
    int A = sc.nextInt();
    System.out.print("Enter the size of B");
    int B = sc.nextInt ();
    System.out.print("Enter the size of C");
    int C = sc.nextInt();
    if(A+B > B && A+C > B && B+A >C ){
        System.out.println("given sides form a triangle");
    }else{
        System.out.println("given sides are not form a triangle");
    }
    sc.close();

   }
   

    
}
