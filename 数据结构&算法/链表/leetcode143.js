/**
 * 143. 重排链表
 * 
 * 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
 * L0 → L1 → … → Ln - 1 → Ln
 * 
 * 请将其重新排列后变为：
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * 
 * 要求：不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 思路：把链表均匀分成两部分，后半部分做反转链表操作，最后合并两个链表
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head || !head.next) return;

    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let nextListHead = slow.next, newHead = null, ptr;
    slow.next = null;   //和后面一半链表断开链接

    while (nextListHead) {
        ptr = nextListHead;
        nextListHead = nextListHead.next;
        ptr.next = newHead;
        newHead = ptr;
    }

    let temp;
    while(newHead && head){
        temp = newHead;
        newHead = newHead.next;
        temp.next = head.next;
        head.next = temp;
        head = temp.next;
    }
};