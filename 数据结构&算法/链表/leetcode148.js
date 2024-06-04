/**
 * 148. 排序链表
 * 
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 
 * 要求：在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序
 * 
 * 思路：使用归并排序对链表进行排序
 * 
 * 思考为什么是用归并排序呢？堆排序和快排是否不行？
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head) return null;
    return mergeSort(head)
};

function mergeSort(head) {
    if (!head.next) return head;
    const [left, right] = divide(head);
    let leftHead = mergeSort(left);
    let rightHead = mergeSort(right);
    return merge(leftHead, rightHead);
}

function divide(head) {
    let slow = head, fast = head, right;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    right = slow.next;
    slow.next = null;
    return [head, right]
}

function merge(left, right) {
    let virtualHead = new ListNode(0);
    let pre = virtualHead;
    virtualHead.next = left;
    while (pre.next && right) {
        if (pre.next.val > right.val) {
            let temp = right;
            right = right.next
            temp.next = pre.next;
            pre.next = temp
        }
        // 注意：即使当right插进来一个元素后 pre还是只往后遍历一个元素 
        // 因为right的下一个元素还是有可能比之前的pre.next小
        pre = pre.next;
    }
    if (right) pre.next = right;
    return virtualHead.next;
}