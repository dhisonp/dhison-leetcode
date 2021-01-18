import apps.AppClass;
import apps.ClimbingStairs;

public class App {
    static ClimbingStairs climbingStairs = new ClimbingStairs();

    public static void main(String[] args) throws Exception {

        printApp(climbingStairs.getApp());

    }

    public static void printApp(AppClass app) {
        System.out.println("Output for " + app.getTitle() + ":");
        System.out.println(app.getOutput());
    }
}
