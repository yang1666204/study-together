/**
 * 70.爬楼梯
 * 
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 这道题和斐波那契算是dp的启蒙题目了，想清楚求爬 n 阶楼梯需要多少种方法，就好比问你求爬 n-1 和 n-2 阶楼梯需要多少种方法,
 * 因为爬到n阶楼梯的上一次一定是 n-1 或者 n-2阶 所以 => dp[n] = dp[n-1] + dp[n-2]
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const dp = [1];
    for (let i = 1; i < n; i++) {
        if (i !== 1) {
            dp[i] = dp[i - 1] + dp[i - 2];
        } else {
            dp[i] = dp[i - 1] + 1;
        }
    }
    return dp[dp.length - 1];
};