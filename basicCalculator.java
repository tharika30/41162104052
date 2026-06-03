import java.util.Scanner;
public class basicCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a = sc.nextDouble();
        double b = sc.nextDouble();
        char ch = sc.next().charAt(0);
        if( ch == '+'){
            System.out.println("a+b");
        }
        else if(ch == '-'){
            System.out.println("a-b");

        }
        else if (ch == '*'){
            System.out.println("a*b");
        }
        else{
            if(b == 0){
                System.out.println("Dividion is not possible");
            }
            System.out.println (a/b);
        }
        sc.close();

    }
    
}
