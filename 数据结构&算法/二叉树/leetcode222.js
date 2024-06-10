/**
 * 222. 完全二叉树的节点个数
 * 
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
 * 
 * 要求：遍历树来统计节点是一种时间复杂度为 O(n) 的简单解决方案。你可以设计一个更快的算法吗？
 * 
 * 补充：力扣对完全二叉树的定义和我们平时的理解不太一致，它的高度是从第0层开始计算的，所以有“若最底层为第 h 层，则该层包含 1~ 2^h 个节点。”
 * 维基百科显示是从第一层开始计算的，所以最底层最多应该包含2^(h-1)个节点，我们依然按照高度第一层开始计算来实现
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
var countNodes = function (root) {
    if (!root) return 0;
    let lHighness = getHighness(root.left);
    let rHighness = getHighness(root.right);
    /**
     * 当前节点左右子树的高度相等说明左子树是满二叉树，不等说明右子树是满二叉树（画一下很容易明白）
     * 当前结点为头结点的完全二叉树结点总数 = 两棵子树结点总和 + 当前结点
     * 由于其中一颗子树是满二叉树，即为 2^h - 1，加上当前结点正好是 2^h
     * 用位运算表示为: 1 << h
     */
    if (lHighness === rHighness) return countNodes(root.right) + (1 << lHighness);
    else return countNodes(root.left) + (1 << rHighness);
};

function getHighness(node) {
    let highness = 0;
    while (node) {
        node = node.left;
        highness++;
    }
    return highness;
}
