/**
 * 110. 平衡二叉树
 * 
 * 给定一个二叉树，判断它是否是 平衡二叉树
 * 
 * 平衡二叉树：任一节点在左右子树的高度差的绝对值不超过1
 * 
 * 需要思考的问题：
 * 1.如何获取每一个节点的高度/深度？
 * 有两种方法：
 * 第一种是先序遍历二叉树的过程中每遍历一个节点高度/深度+1，遍历到叶子节点能拿到这条路线的高度/深度。
 * 结合这道题，需要在回溯过程中不断的返回从叶子节点得到的高度/深度
 * 第二种是后序遍历二叉树（也就是递归遍历的回溯过程），从叶子节点开始计算，每遍历一个节点高度+1，到根节点达到最值
 * 显然这道题更适合第二种方法，因为两种方法都要在回溯过程去判断当前左右子树的高度差，第二种方法少一个先序遍历的操作，更加简单
 * 2.回溯过程中如何让父节点知道当前节点的左右子树高度差已经超过1了？
 * 这是一个小技巧，正常情况是需要返回父节点当前的高度，但是判断出来当前高度差大于一，这道题答案已经出来了即可返回一个不可能的值 -1
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    function checkHighness(node) {
        if (!node) return 0;
        let lHighness = checkHighness(node.left);
        let rHighness = checkHighness(node.right);
        if (Math.abs(lHighness - rHighness) > 1 || lHighness === -1 || rHighness === -1) return -1;
        return Math.max(lHighness, rHighness) + 1;
    }
    return checkHighness(root) !== -1;
};
