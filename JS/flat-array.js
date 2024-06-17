/* 
    数组扁平化
*/ 

//方法一 利用Array.prototype.flat 
//该方法会按照一个指定的深度递归遍历数组并将所有元素和遍历到的子数组中的元素合并到一个新数组返回

const arr1 = [1, [2, [3, [4, 5]]], 6];

const _arr1 = arr1.flat(Infinity)
console.log(_arr1)
//方法二 递归遍历

const arr2 = [1, [2, [3, [4, 5]]], 6];
const _arr2 = []
function flat2(arr){
    for(let i = 0;i<arr.length;i++){
        if(arr[i].constructor === Array){
            /**
             * 这里有三种判断元素是否是数组的方法，其余两种是
             * Array.isArray() === true  
             * Object.prototype.toString.call(arr[i]) === '[object Array]'
             */
            flat2(arr[i])
        }else{
            _arr2.push(arr[i])
        }
    }
}
flat2(arr2)
console.log(_arr2)

//方法三 利用reduce递归
const arr3 = [1, [2, [3, [4, 5]]], 6];
function flat3(arr){
    return arr.reduce((pre,cur)=>{
        /**
         * 需要注意的点：
         * 1.reduce需要用[]作为第二个参数，防止arr的第一个元素不是数组
         * 2.concat的参数可以是数组或值，但pre必须是数组
         */
        return pre.concat(Array.isArray(cur) ? flat3(cur) : cur)    
    },[])
}
console.log(flat3(arr3))