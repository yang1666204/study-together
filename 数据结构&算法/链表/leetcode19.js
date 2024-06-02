/**
 * 19. 删除链表的倒数第 N 个结点
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 要求：使用一趟扫描实现
 * 
 * 难点：如何找到要删除节点并且只使用一趟扫描？
 * 可以用快慢指针，因为要删除的是倒数第 n 个结点，快指针先走n个位置，然后快慢指针同步走，
 * 走到末尾慢指针的下一个结点便是要删除的结点
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let fast = head, slow = head;
    while (n--) {
        fast = fast.next;
    }
    if (!fast) {
        // 说明删除的是头结点
        return head.next;
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
};