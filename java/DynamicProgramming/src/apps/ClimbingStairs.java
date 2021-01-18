package apps;

public class ClimbingStairs {
    public String appName = "Climbing Stairs";
    int[] input = { 3, 5, 7 };
    int amount = 13;

    public AppClass getApp() {
        int output = coinChange(input, amount);
        String title = this.appName;
        AppClass app = new AppClass(title, output);
        return app;
    }

    public int coinChange(int[] coins, int amount) {
        if (amount < 1)
            return 0;
        return helper(coins, amount, new int[amount]);
    }

    private int helper(int[] coins, int rem, int[] count) { // rem: remaining coins after the last step; count[rem]:
                                                            // minimum number of coins to sum up to rem
        System.out.println("Rem :" + rem);
        if (rem < 0)
            return -1; // not valid
        if (rem == 0)
            return 0; // completed
        if (count[rem - 1] != 0)
            return count[rem - 1]; // already computed, so reuse
        int min = Integer.MAX_VALUE;
        for (int coin : coins) {
            // System.out.println("Coin: " + coin);
            // System.out.println("Rem - coin: " + (rem - coin));
            int res = helper(coins, rem - coin, count);
            if (res >= 0 && res < min)
                min = 1 + res;

        }
        count[rem - 1] = (min == Integer.MAX_VALUE) ? -1 : min;
        return count[rem - 1];
    }
}