/**
 * 优先队列：特殊的“队列”，取出元素的顺序是依照元素的优先权（关键字）大小，而不是元素进入队列的先后顺序
 * heap 堆用来实现优先队列
 * 堆的两个特性
 * 1.结构性：用数组表示的完全二叉树
 * 2.有序性：任一结点的关键字是其子树所有节点的最大值（或最小值）
 * 
 * 主要的操作：构建堆、删除顶点、插入结点
 * 
 *  */
/**
 * 
 * @param {Array} arr 待构建数组
 * @param {Number} p 父节点坐标
 */
function percDown(arr, p) {
    let parent, child;
    let parentVal = arr[p];
    for (parent = p; parent * 2 <= arr.length - 1; parent = child) {
        child = 2 * parent;
        if (child !== arr.length - 1 && arr[child] < arr[child + 1]) {
            child++
        }
        if (parentVal >= arr[child]) break;
        arr[parent] = arr[child];
    }
    arr[parent] = parentVal;
}


/**
 * 
 * @param {Array} arr 待构建数组
 */
function buildHeap(arr) {
    // arr[0] 为哨兵 arr的有效长度为 arr.length - 1
    for (let i = Math.floor((arr.length - 1) / 2); i > 0; i--) {
        percDown(arr, i);
    }
}

/**
 * 
 * @param {Array} arr 堆
 * @param {Number} value 待插入值
 */
function insertHeap(arr, value) {
    arr.push(value);
    let i = arr.length - 1;
    for (; value > arr[Math.floor(i / 2)]; i = Math.floor(i / 2)) {
        arr[i] = arr[Math.floor(i / 2)]
    }
    arr[i] = value;
}

/**
 * 
 * @param {Array} arr 待删除顶点堆
 */
function deleteMax(arr) {
    let max = arr[1];
    let temp = arr[arr.length - 1], child, parent = 1;
    for (parent, child; parent < Math.floor(arr.length / 2); parent = child) {
        child = parent * 2
        if (child !== arr.length - 1 && arr[child] < arr[child + 1]) {
            child++
        }
        if (arr[child] < temp) {
            break
        }
        arr[parent] = arr[child]
    }
    arr[child] = temp;
    arr.pop();
    return max;
}

// 999为哨兵
const arr1 = [999, 1, 2, 3, 4, 8]
buildHeap(arr1);
console.log(arr1);
insertHeap(arr1, 16);
console.log(arr1);
console.log(deleteMax(arr1), 'arr1', arr1);
console.log(deleteMax(arr1), 'arr1', arr1);
