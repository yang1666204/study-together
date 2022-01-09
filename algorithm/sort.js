

// //1.插入排序
// //直接插入排序
// function InsertSort(arr) {
//     let i, j, temp;
//     for (i = 1; i < arr.length; i++) {
//         temp = arr[i]   //暂存待查记录
//         for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
//             arr[j + 1] = arr[j]
//         }

//         arr[j + 1] = temp
//     }
//     return arr
// }
// // console.log("InsertSort", InsertSort(arr));

// //希尔排序
// function ShellSort(arr) {
//     let d, i, j, temp;
//     for (d = arr.length; d >= 1; d = Math.floor(d / 2)) {
//         for (i = d; i < arr.length; i++) {
//             temp = arr[i]
//             for (j = i - d; j >= 0 && arr[j] > temp; j = j - d) {
//                 arr[j + d] = arr[j]
//             }
//             arr[j + d] = temp
//         }
//     }
//     return arr
// }

// // console.log("ShellSort", ShellSort(arr));
// /*
//     总结：
//     直接插入排序：数组从第二个数开始，跟在这个数temp之前的每一个数比较，
//     若前一个数比temp大，则temp的位置存放前一个数，temp接着和前前一个数比较，
//     直到找到比自己小的数或者遍历到数组的头部

//     希尔排序：直接插入排序的加强版，将数组以增量d为间隔分为多个组，依次进行直接插入排序,
//     待到序列基本有序时，整体进行直接插入排序，即d=1时
// */

// //  2.交换排序
// //起泡排序（冒泡排序）

// function BubbleSort(arr) {
//     let temp, i, j;
//     for (i = 1; i < arr.length; i++) {
//         //length-1轮
//         for (j = 0; j < arr.length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
// }

// // console.log("BubbleSort", BubbleSort(arr));

// //快速排序（快排）
// function QuickSort(first, last) {
//     if (first > last) return
//     else {
//         let partition = Partition(first, last)
//         QuickSort(0, partition - 1)
//         QuickSort(partition + 1, last)
//     }
// }
// //划分
// function Partition(first, last) {
//     let i = first, j = last, temp;
//     while (i < j) {
//         while (i < j && arr[j] > arr[i]) j--;
//         if (i < j) {
//             temp = arr[j]
//             arr[j] = arr[i]
//             arr[i] = temp
//         }
//         while (i < j && arr[i] < arr[j]) i++
//         if (i < j) {
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
//     return i
// }

// QuickSort(0, arr.length - 1)
// console.log("arr", arr);

/*
    总结：
    起泡排序：每次从数组第一个数依次和后面的数比较，遇到较小的数交换位置，将大数交换到数组末尾；
    交换length-1轮即可完成排序

    快排：i，j分别为数组头指针，尾指针；从尾指针往回遍历找到比头指针小的数，与其交换位置，j就指向该位置;
    从头指针顺序遍历找到比j位置的数大的数与其交换位置，i就指向该位置；当i = j时将数组分成左右两份，
    继续执行上述操作，直至数组长度为1
*/

//  3.选择排序
//  简单选择排序


//4.归并排序
let arr = [59, 20, 17, 36, 98, 14, 23, 83, 13, 28];
let temp = new Array(arr.length)    //辅助数组
func(0,arr.length-1)
console.log(arr);
function func(low, high) {
    if (low < high) {
        let mid = Math.floor((low + high) / 2)
        func(low, mid)
        func(mid+1, high)
        merge(low, high, mid)
    }
}

function merge(low, high, mid) {
    let i, j, k;
    for (k = low; k <= high; k++) {
        temp[k] = arr[k]
    }
    for (i = low, k = i, j = mid+1; j <= high && i <= mid; k++) {
        if(temp[i]>temp[j]){
            arr[k] = temp[j]
            j++
        }else{
            arr[k] = temp[i]
            i++
        }
    }
    while(j<=high){
        arr[k++] = temp[j++]
    }
    while(i<=mid){
        arr[k++] = temp[i++]
    }
}