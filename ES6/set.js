let a = new Set([1,2,3,2])
console.log(a); //自动去重
a.add(5)
console.log("add",a);
a.delete(1)
console.log("delete",a);
console.log("has",a.has(2));
a.clear()
console.log("clear",a);

let arr1 = [1,3,5,6]
let arr2 = [2,1,3,3,4,6]
//交集
let result = [...new Set(arr1)].filter(item=>{
    if(new Set(arr2).has(item)){
        return true
    }else{
        return false
    }
})
console.log("result",result);
    //简写
let _result = [...new Set(arr1)].filter(item=>new Set(arr2).has(item))
console.log("_result",_result);
//并集
let __result = new Set([...arr1,...arr2])
console.log("__result",__result); 
let ___result = new Set(arr1.concat(arr2)) 
console.log("___result",___result);

//差集

// arr1与arr2的差集 即arr1中有的且arr2中没得

let ____result = arr1.filter(item=>(!new Set(Array.from(new Set(arr1)).filter(item=>new Set(arr2).has(item))).has(item))) 
console.log("____result",____result); 