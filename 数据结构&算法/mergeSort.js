// 归并(递归实现)

/**
 * 
 * @param {Array} arr 待排序数组
 * @param {Array} tempArr 临时数组
 * @param {Number} left 起始指针
 * @param {Number} leftEnd 左半部分结束指针
 * @param {Number} right 右半部分结束指针
 */
function merge(arr, tempArr, left, leftEnd, right) {
    let rightStart = leftEnd + 1, p = left;
    let length = right - left + 1;
    while (left <= leftEnd && rightStart <= right) {
        if (tempArr[left] < arr[rightStart]) {
            tempArr[left] = arr[left];
            left++
            p++;
        }
        if (arr[rightStart] < arr[left]) {
            tempArr[p] = arr[rightStart];
            rightStart++;
            p++;
        }
        // while (arr[left] < arr[rightStart]) {
        // tempArr[left] = arr[left];
        // left++
        // p++;
        // }
        // while (arr[rightStart] < arr[left]) {
        // tempArr[p] = arr[rightStart];
        // rightStart++;
        // p++;
        // }
    }
    while (left <= leftEnd) {
        tempArr[p++] = arr[left++]
    }
    while (rightStart <= right) {
        tempArr[p++] = arr[rightStart++]
    }
    for (let i = 0; i < length; i++) {
        arr[right] = tempArr[right];
        right--;
    }
}

function merge_sort(arr, tempArr, left, right) {
    if (left < right) {
        let center = Math.floor((left + right) / 2);
        merge_sort(arr, tempArr, left, center);
        merge_sort(arr, tempArr, center + 1, right);
        merge(arr, tempArr, left, center, right);
    }
    return;
}
/**
 * 
 * @param {Array} arr 待排序数组 
 * @param {Number} n 数组长度
 */
function mergeSort(arr, n) {
    let tempArr = new Array(n);
    merge_sort(arr, tempArr, 0, arr.length - 1);
}

const arr1 = [3, 5, 2, 8, 11, 4, 7, 1, 22, 6]
mergeSort(arr1, arr1.length);
console.log(arr1);