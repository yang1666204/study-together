/**
 * 450. 删除二叉搜索树中的节点
 * 
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。
 * 返回二叉搜索树（有可能被更新）的根节点的引用。
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return null;
    if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else {
        // 找到待删除结点
        if (!root.left && !root.right) return null; // 待删除结点没有子树/子结点，返回null
        if (!root.left) return root.right; // 待删除结点只有右子树，返回右子树
        if (!root.right) return root.left; // 待删除结点只有左子树，返回左子树
        /**
         * 当待删除结点既有左子树也有右子树时，拿左子树的最大值/右子树的最小值替换当前的值，再删除左子树的最大值/右子树的最小值
         * 左子树的最大值/右子树的最小值替换当前这个结点值是可以保证排序二叉树的结构的
         */
        let tempNode = findMinNode(root.right);
        root.val = tempNode.val;
        root.right = deleteNode(root.right, tempNode.val);
    }
    return root;
};

function findMinNode(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}