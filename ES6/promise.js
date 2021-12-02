// let p = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("成功")
//         // reject("失败")
//     },1000)
// })
// p.then(function(value){
//     return new Promise((resolve,reject)=>{
//         resolve([value,"再次成功"])
//     })
// },function(reason){ 
//     console.error("reason",reason);
// }).then(function(value){
//     console.log("value",value);
// })

let arr = [2,5,1,32,7]

function huafen(left,right){
    while(left<right){
        while(arr[left]<arr[right]&&left<right)right--
        if(left<right){
            let temp = arr[left]
            arr[left] = arr[right] 
            arr[right] = temp
            left++
        }
        while(arr[left]<arr[right]&&left<right)left++
        if(left<right){
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            right--
        }
    }
    return left
}

function quickSort(left,right){
    if(left>=right)return
    let middle = huafen(left,right)
    quickSort(left,middle-1)
    quickSort(middle+1,right)
}
quickSort(0,arr.length-1)
console.log("arr",arr);