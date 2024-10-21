[216. 组合总和 III](https://leetcode.cn/problems/combination-sum-iii/)

找出所有相加之和为 `n` 的 `k` 个数的组合，且满足下列条件：

- 只使用数字1到9
- 每个数字 **最多使用一次** 

返回 *所有可能的有效组合的列表* 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

**示例 :**

```
输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
解释:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
没有其他符合的组合了。
```

思路：利用回溯找到每一种组合的可能，针对一些情况进行剪枝，如超过了 k 个数的组合 、合已经大于 n 的组合

```js
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9], res = [];
    function dfs(combine, idx, target) {
        if (idx > inputArr.length || combine.length > k || target < 0) return;
        if (target === 0 && combine.length === k) res.push(combine);
        for (let i = idx; i < inputArr.length; i++) {
            dfs([...combine, inputArr[i]], i + 1, target - inputArr[i])
            /**
             * 这里其实隐藏着回溯，可以写成这样就很容易看出来了
             * combine.push(inputArr[i]);
             * dfs([...combine], inputArr[i]], i + 1, target - inputArr[i]);
             * combine.pop();
             */
        }
    }
    dfs([], 0, n);
    return res;
};
```

