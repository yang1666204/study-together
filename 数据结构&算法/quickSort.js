function findPovit(arr, left, right) {
    if (right - left > 3) {
        const center = Math.ceil((left + right) / 2);
        if (arr[left] > arr[center]) {
            swap(arr, left, center);
        }
        if (arr[left] > arr[right]) {
            swap(arr, left, right);
        }
        if (arr[right] > arr[center]) {
            swap(arr, right, center);
        }
        swap(arr, center, right);
    }
    return arr[right];
}

function swap(arr, left, right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

/**
 * 
 * @param {*} arr 待排序数组
 * @param {*} left 起始坐标
 * @param {*} right 终止坐标
 */
function quickSort(arr, left, right) {
    if (left >= right) return;
    const povit = findPovit(arr, left, right); // 将povit放在末尾
    let i = left - 1;
    for (let p = left; p < right; p++) {
        if (arr[p] <= povit) {
            i++;
            swap(arr, i, p);
        }
    }
    swap(arr, i + 1, right);
    quickSort(arr, left, i);
    quickSort(arr, i + 2, right);
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
    quickSort(_arr, 0, _arr.length - 1)
    console.log(_arr);
})