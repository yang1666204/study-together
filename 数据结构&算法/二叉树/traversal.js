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
 * @param {TreeNode} root 
 */
function preOrderTraversal2(root) {
    let stack = [], node = root;
    while (node || stack.length) {
        while (node) {
            console.log(node.val);
            node = node.left;
            stack.push(node);
        }
        if (stack.length) {
            node = stack.pop();
            node = node.right;
        }
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
 * @param {TreeNode} root 
 */
function inOrderTraversal2(root) {
    let stack = [], node = root;
    while (stack.length || node) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        if (stack.length) {
            node = stack.pop();
            console.log(node.val);
            node = node.right;
        }
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
 * 后序遍历非递归版
 * 
 *             任何一棵二叉树都可以想象成由多个 a->b->c a->b a->c a->null的子树组成，
 *             所以遍历整个二叉树就可以想象成循环的解决每一棵子树的问题
 *       a     以示例来说，遍历这棵二叉树的路径是 a->b->a->c->a 在途中会经过两次根节点
 *      / \    所以我们可以拿一个指针pre记录上一次经过的结点，如果pre不等于当前结点的右儿子，说明走到了a->c，我们可以把c结点当作头结点继续往下遍历
 *     b   c   如果上一次经过的结点是当前结点的右儿子，说明走到了c->a，说明已经开始回溯了，这时候就可以遍历当前结点a了
 * @param {TreeNode} root 
 */
function postOrderTraversal2(root) {
    let stack = [], node = root, pre = null;
    while (stack.length || node) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack[stack.length - 1];
            if (node.right && pre !== node.right) {
                node = node.right;
            } else {
                node = stack.pop();
                console.log(node.val);
                pre = node;
                node = null;
            }
        }
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