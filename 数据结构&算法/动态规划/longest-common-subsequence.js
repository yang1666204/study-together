/**
 * 1143. 最长公共子序列
 *
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
 * 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
 * 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
 *
 * 示例 1：
 *
 * 输入：text1 = "abcde", text2 = "ace"
 * 输出：3
 * 解释：最长公共子序列是 "ace" ，它的长度为 3 。
 * 
 * 思路：
 * 因为需要比较两个字符串，二维数组可以很好的表示两个字符串分别走到哪了，所以使用二维dp
 * 
 * dp[i][j]表示比较到其中一个字符串的第i个字符和另外一个字符串的第j个字符时的最大公共子序列的长度
 * 
 * 状态转移方程推导由来：
 * 分别遍历两个字符串的某个字符，如果这两个字符相同，那么当前dp最大值为两个字符串遍历到这个字符的前一项 + 1，
 * +1表示这个字符是需要的，公共子序列长度+1；
 * 如果两个字符不同，说明当前dp最大值为其中一个字符串遍历到这个字符的前一项
 * 
 * dp[i][j] = { text1[i] === text2[j] ? dp[i-1][j-1] : max(dp[i-1][j],dp[i][j-1]) }
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let dp = new Array(text1.length + 1)
    .fill(0)
    .map(() => new Array(text2.length + 1).fill(0));
  for (let i = 1; i <= text1.length; i++) {
    let str1 = text1[i - 1];
    for (let j = 1; j <= text2.length; j++) {
      let str2 = text2[j - 1];
      if (str1 === str2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[text1.length][text2.length];
};
