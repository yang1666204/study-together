/**
 * 完全二叉树中，用数组存储且没有哨兵的情况下
 * 父节点和子节点的关系是 如果父节点下标是n，两个子节点为2n+1、2n+2
 * 最后一个带有子结点的结点下标为：n/2-1 n为二叉树长度
 */

/**
 * 
 * @param {Array} arr 待下滤数组
 * @param {Number} length 数组长度
 * @param {Number} p 初始父节点
 */
function percDown(arr, length, p = 0) {
    let parent = p, child, value = arr[p];
    for (; 2 * parent + 1 < length; parent = child) {
        child = 2 * parent + 1;
        if (child + 1 < length && arr[child + 1] > arr[child]) {
            child++;
        }
        // child一定是跟value比 不能跟parent比 parent是在变化的
        if (arr[child] > value) {
            arr[parent] = arr[child]
        } else {
            break;
        }
    }
    // 这里赋值的下标是parent
    arr[parent] = value
}

/**
 * 
 * @param {Array} arr 待构建数组
 */
function buildHeap(arr) {
    let p;
    for (p = Math.floor(arr.length / 2) - 1; p >= 0; p--) {
        percDown(arr, arr.length, p);
    }
}
/**
 * 
 * @param {Array} arr 待排序数组
 */
function heapSort(arr) {
    buildHeap(arr);
    for (let endIdx = arr.length; endIdx > 1; endIdx--) {
        let temp = arr[endIdx - 1];
        arr[endIdx - 1] = arr[0];
        arr[0] = temp;
        if (endIdx <= 2) break;
        percDown(arr, endIdx - 1)
    }
}

const arr1 = [1, 2, 3, 4, 5, 6]
heapSort(arr1);
console.log(arr1);