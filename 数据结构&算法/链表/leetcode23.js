/**
 * 23. 合并 K 个升序链表
 * https://leetcode.cn/problems/merge-k-sorted-lists/description/
 * 
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 
 * [[1,4,5],[1,3,4],[2,6]] => [1,1,2,3,4,4,5,6]
 * 
 * 解题思路：
 * 我们可以很轻易的对两个有序数组/链表进行排序，但是没法同时对多个有序数组/链表进行排序
 * 所以考虑分而治之，通过把lists不断的拆分，拆到最后两个链表即可排序，
 * 然后递归的合并两个链表，思路和归并排序几乎一致，难在如何想到用归并
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? next : null)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    return mergeSort(lists, 0, lists.length - 1);
};

/**
 * 
 * @param {ListNode[]} lists 
 * @param {Number} left 每一段序列左边起始下标
 * @param {Number} right 每一段序列右边起始下标
 * @returns {ListNode}
 */
function mergeSort(lists, left, right) {
    if (left === right) {
        return lists[left];
    }

    if (left < right) {
        const center = Math.floor((left + right) / 2);
        const leftList = mergeSort(lists, left, center);
        const rightList = mergeSort(lists, center + 1, right);
        return merge(leftList, rightList);
    }
    // lists为空会走到这里
    return null
}

/**
 * 合并两个链表
 * @param {ListNode} leftList 
 * @param {ListNode} rightList 
 */
function merge(leftList, rightList) {
    const head = new ListNode(0), ptr = head;
    while (leftList && rightList) {
        if (leftList.val < rightList.val) {
            ptr.next = leftList;
            ptr = ptr.next;
            leftList = leftList.next;
        } else {
            ptr.next = rightList;
            ptr = ptr.next;
            rightList = rightList.next;
        }
    }
    // ptr最后是有值的，所以是ptr.next
    if (leftList) ptr.next = leftList;
    if (rightList) ptr.next = rightList;
    return head.next;
}