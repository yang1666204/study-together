// 归并(递归实现)
// 核心思想：分而治之
/**
 * 
 * @param {Array} arr 待排序数组
 * @param {Array} tempArr 临时数组
 * @param {Number} leftStart 左半部分起始指针
 * @param {Number} leftEnd 左半部分结束指针
 * @param {Number} rightEnd 右半部分结束指针
 */
function merge(arr, tempArr, leftStart, leftEnd, rightEnd) {
    let rightStart = leftEnd + 1, length = rightEnd - leftStart + 1, p = leftStart;
    while (leftStart <= leftEnd && rightStart <= rightEnd) {
        //这里一定是小于等于 不然会进入死循环
        if (arr[leftStart] <= arr[rightStart]) {
            tempArr[p++] = arr[leftStart++];
        }
        if (arr[rightStart] <= arr[leftStart]) {
            tempArr[p++] = arr[rightStart++];
        }
    }
    // 这里也是小于等于，因为leftStart在上一个循环中最后做的处理是先赋值后加一
    // leftStart如果不是大于leftEnd说明左半部分在上一个while循环中没有遍历完
    while (leftStart <= leftEnd) {
        tempArr[p++] = arr[leftStart++];
    }
    while (rightStart <= rightEnd) {
        tempArr[p++] = arr[rightStart++];
    }
    for (let i = 0; i < length; i++) {
        arr[rightEnd] = tempArr[rightEnd];
        rightEnd--;
    }
}

function merge_sort(arr, tempArr, left, right) {
    if (left < right) {
        let center = Math.floor((left + right) / 2);
        merge_sort(arr, tempArr, left, center);
        merge_sort(arr, tempArr, center + 1, right);
        merge(arr, tempArr, left, center, right);
    }
    return
}

/**
 * 
 * @param {Array} arr 待排序数组
 */
function mergeSort(arr) {
    let tempArr = new Array(arr.length);
    merge_sort(arr, tempArr, 0, arr.length - 1)
}

// 自测
const arr = [3, 5, 2, 8, 11, 4, 7, 1, 22, 6]
const arr1 = [6, 3, 12, 34, 2, 1, 5, 55, 4]
const arr2 = [1]
const arr3 = [3, 2]
const arr4 = [3, 2, 1]
const arr5 = [4, 3, 2, 5, 1]
const arr6 = [22, 1, 23, 34, 2, 23, 1, 66];
[arr, arr1, arr2, arr3, arr4, arr5, arr6].forEach((_arr) => {
    mergeSort(_arr)
    console.log(_arr);
})