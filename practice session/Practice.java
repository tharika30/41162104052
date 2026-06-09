public class Practice {
    public static void main(String[] args){
        // right 
        // for(int i=1;i<=4;i++){
        //     for(int j=1;j<=i;j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }
        // inverted
        // for(int i=1;i<=4;i++){
        //     for(int j=0;j<=4-i;j++){
        //         System.out.print("* ");
        //     }
        //     System.out.println();
        // }
        // square
        // for(int i=1;i<=4;i++){
        //     for(int j=1;j<=4;j++){
        //         System.out.print("* ");
        //     }
        //     System.out.println();
        // }
        // number triangle
        // for(int i=1;i<=4;i++){
        //     for(int j=1;j<=i;j++){
        //         System.out.print(j);
            
        //     }
        //     System.out.println();
        // }
        //number inverted
        // for(int i=0;i<=4;i++){
        //     for(int j=1;j<=4-i;j++){
        //         System.out.print(j);
        //     }
        //     System.out.println();
        // }
        //straight pyramid
        int n=5;
        for(int i=1;i<=n;i++){
            for(int j=n;j>i;j--){
                System.out.print(" ");
            }
            for(int k=1;k<=i;k++){
                System.out.print(" *");
            }
            System.out.println();
        }
        for(int i=1;i<n;i++){
            for(int j=0;j<=i;j++){
                System.out.print(" ");
            }
             for(int k=n;k>i;k--){
                System.out.print("* ");
        }
        System.out.println();
    }
    }
}


