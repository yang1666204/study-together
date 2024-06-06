/**
 * 25. K 个一组翻转链表
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 * 
 * 思路：可以把一个大问题拆成一个个小问题，每个小问题解决方法一致，就比较适合用递归
 * 每次只关注反转当前的链表，并且拼接每个反转好的链表，需要想清楚每次递归返回的是什么
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let count = 0, ptr = head;
    while (ptr && count < k) {
        count++;
        ptr = ptr.next;
    }
    if (count === k) {
        const newHead = reverseKNodes(head, k); // 反转之后返回的新的头结点
        head.next = reverseKGroup(ptr, k); // head是前一段的尾结点，用于拼接下一段的头结点
        return newHead;
    }
    return head;
}

function reverseKNodes(head, k) {
    let pre = null, cur = head, count = 0;
    // 不用考虑链表head长度不够，长度不够不会进这个函数
    // 其实 cur && 可以去掉
    while (cur && count < k) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
        count++;
    }
    return pre;
}