// 二叉树的遍历（递归/非递归）

function TreeNode(val, left, right) {
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.val = val === undefined ? 0 : val;
}

/**
 * 
 * @param {TreeNode} node 
 */
function preOrderTraversal(node) {
    if (node) {
        console.log(node.val);
        preOrderTraversal(node.left);
        preOrderTraversal(node.right);
    }
}

/**
 * 
 * @param {TreeNode} node 
 */
function inOrderTraversal(node) {
    if (node) {
        inOrderTraversal(node.left);
        console.log(node.val);
        inOrderTraversal(node.right);
    }
}

/**
 * 
 * @param {TreeNode} node 
 */
function postOrderTraversal(node) {
    if (node) {
        postOrderTraversal(node.left);
        console.log(node.val);
        postOrderTraversal(node.right);
    }
}

/**
 * 
 * @param {TreeNode} root 
 */
function levelOrderTraversal(root) {
    const queue = [];
    if (!root) return;
    else queue.push(root);
    while (queue.length) {
        const node = queue.shift();
        console.log(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}