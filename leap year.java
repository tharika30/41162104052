import java.util.Scanner;
public class Leapyear{
    public static void main(string[] args){
    Scanner sc = new Scanner(System.in);
    int year = sc.nextInt();
    if(year % 400 == 0 || year %100 == 0 && year %4 == 0){
        System.out.println("the given year is the leap year");
    }else {
        System.out.println("Is not a leap year");
    }
    sc.close();

}


}