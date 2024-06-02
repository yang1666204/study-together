/**
 * 234. 回文链表
 * 
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * 
 * 要求：用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题
 * 
 * 思路：
 * 这道题难点在需要 O(1) 空间复杂度解决，意味着需要原地解决这个问题
 * 可以通过快慢两指针得到链表的中点（快指针遍历速度是慢指针的两倍），在遍历的同时反转前半部分链表，
 * 当快指针遍历完整个链表之后，链表形成了以慢指针为头结点和慢指针前一个结点的反转链表为头结点的两个链表
 * 最后两个链表同时遍历，值相同说明是回文链表
 * 
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head, fast = head, p, newHead;
    // 最后一轮遍历slow往后移动了一位，正好为链表后半部分头指针
    while (fast && fast.next) {
        p = slow; // p一直是在slow前一位的
        slow = slow.next;
        fast = fast.next.next;
        p.next = newHead;
        newHead = p;
    }
    // 说明链表是奇数
    if (fast) {
        slow = slow.next;
    }
    while (newHead && slow) {
        if (newHead.val !== slow.val) return false;
        newHead = newHead.next;
        slow = slow.next;
    }
    return true;
};