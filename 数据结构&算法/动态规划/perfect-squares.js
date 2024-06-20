/**
 * 279.完全平方数
 * 
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 * 
 * 示例 1：
 * 输入：n = 12
 * 输出：3 
 * 解释：12 = 4 + 4 + 4
 * 
 * 重点在于找到当前状态和前一个状态的关系，假设 dp[n] 是和为n的完全平方数的最少数量 要达到最少数量dp[n]的上一个状态为 dp[n - y*y]，
 * =>状态转移方程 dp[n] = Min(dp[n] + dp[n - y*y] + 1) 
 * 现在问题变成求y的值，y的值可以从1挨个遍历,最大可以等于 根号n
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i < dp.length; i++) {
        dp[i] = i; // 先假设为最坏情况 完全平方数为1
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
        }
    }
    return dp[dp.length - 1];
};