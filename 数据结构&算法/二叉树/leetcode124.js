/**
 * 124. 二叉树中的最大路径和
 * 二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。
 * 该路径 至少包含一个 节点，且不一定经过根节点。
 * 路径和 是路径中各节点值的总和。
 * 给你一个二叉树的根节点 root ，返回其 最大路径和 。
 * 
 * 示例：
 *       -10
 *      /   \
 *     9    20
 *         /  \
 *        15   7
 * 
 * 最优路径为：15 -> 20 -> 7 最大路径和为 15+20+7=42
 * 
 * 思路：后序遍历，遍历到每一个结点返回当前结点的“最大路径和”给父节点
 *     a        遍历到a时，要么返回 a + b 要么返回 a + c 或者返回 0(前面两种情况都小于0时，意味着这个结点不要了)
 *    / \       整棵树的“最大路径和” 和当前结点的“最大路径和”的关系是什么呢？
 *   b   c      所有结点的最大路径和中值最大的一个结点的最大路径和，再加上那个结点下另外一个子节点的最大路径和（如何该子节点的最大路径和大于0）
 *              拿示例举例：所有结点的最大路径和是 15->20 再加上另外一个子节点的最大路径和 7 得到最终答案
 * 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let max;
    const dfs = (node) => {
        if (!node) return 0;
        let lMaxVal = dfs(node.left);
        let rMaxVal = dfs(node.right);
        let temp = [lMaxVal + node.val, rMaxVal + node.val, lMaxVal + rMaxVal + node.val];
        max = max === undefined ? Math.max(...temp) : Math.max(max, ...temp);
        return Math.max(lMaxVal + node.val, rMaxVal + node.val, 0);
    }
    dfs(root);
    return max;
};