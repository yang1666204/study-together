/**
 * 61. 旋转链表
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 *
 * 思路：把链表首尾相连形成循环链表，找到断点处，再切断链表
 * k = 1,断点处为倒数第二个位置， k = 2，断点处为倒数第三个位置 .....
 * 断点位 = 链表长度 - (k % 链表长度)
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return null;
    let ptr1 = head, length = 1;
    while (ptr1.next) {
        ptr1 = ptr1.next;
        length++;
    }
    ptr1.next = head; // 将链表连成环
    const count = k % length, nodeIdx = length - count;
    for (let i = 0; i < nodeIdx - 1; i++) {
        head = head.next
    }
    const res = head.next;
    head.next = null; // 断开环
    return res;
};

/**
 * @description 思路和上面的方法一致，使用双指针实现
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight1 = function (head, k) {
    let slow = head, fast = head;
    // 当K过大时 会导致超出时间限制
    while (k) {
        k--;
        if (!fast.next) {
            fast = head;
        } else {
            fast = fast.next;
        }
    }
    if (slow === fast) return head;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    // 首尾相连
    fast.next = head;
    let res = slow.next;
    slow.next = null;
    return res;
};