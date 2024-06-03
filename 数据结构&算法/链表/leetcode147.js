/**
 * 147. 对链表进行插入排序
 * 给定单个链表的头 head ，使用 插入排序 对链表进行排序，并返回 排序后链表的头 。
 * 
 * 思考：
 * 这道题思路很简单，就是插入排序的逻辑，麻烦的点在于如何控制好指针的操作
 * 有可能涉及到头结点的插入，可以联想到创建一个虚拟头结点，使得真实头结点的插入和其他元素一致
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    const virtualHead = new ListNode(0);
    virtualHead.next = head;
    let curPtr = head;
    while (curPtr && curPtr.next) {
        if (curPtr.next.val < curPtr.val) {
            let tempPtr = curPtr.next;
            curPtr.next = curPtr.next.next;
            let pre = virtualHead;
            // if判断中有结点比tempPtr.val小才会进这个while循环，所以pre.next一定存在
            while (pre.next.val < tempPtr.val) {
                pre = pre.next
            }
            tempPtr.next = pre.next;
            pre.next = tempPtr;
        } else {
            curPtr = curPtr.next;
        }
    }
    return virtualHead.next;
};