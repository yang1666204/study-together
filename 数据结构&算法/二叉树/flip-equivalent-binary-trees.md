# 951. 翻转等价二叉树

我们可以为二叉树 **T** 定义一个 **翻转操作** ，如下所示：选择任意节点，然后交换它的左子树和右子树。

只要经过一定次数的翻转操作后，能使 **X** 等于 **Y**，我们就称二叉树 **X** *翻转 等价* 于二叉树 **Y**。

这些树由根节点 `root1` 和 `root2` 给出。如果两个二叉树是否是*翻转 等价* 的函数，则返回 `true` ，否则返回 `false` 。

**示例 1：**

![Flipped Trees Diagram](https://assets.leetcode.com/uploads/2018/11/29/tree_ex.png)

```
输入：root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
输出：true
解释：我们翻转值为 1，3 以及 5 的三个节点。
```

实现思路：**同时**对两棵树进行深度优先遍历，遍历的同时**判断两个节点的左右子节点值是否相同或者翻转后是否相同**，如果翻转后相同需要做翻转操作，以防止有一棵无节点可遍历；反之表示无法翻转为等价二叉树

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
    if (root1?.val !== root2?.val) return false
    function dfs(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        if (!handleNode(node1, node2)) return false;
        let lRes = dfs(node1?.left, node2?.left);
        let rRes = dfs(node1?.right, node2?.right);
        return lRes && rRes
    }

    function handleNode(node1, node2) {
        if (node1.left?.val === node2.left?.val && node1.right?.val === node2.right?.val) return true;
        if (node1.left?.val === node2.right?.val && node1.right?.val === node2.left?.val) {
            let temp = node1.left;
            node1.left = node1.right;
            node1.right = temp;
            return true
        }
        return false;
    }
    return dfs(root1, root2)
};
```

