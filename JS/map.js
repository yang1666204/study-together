//key 的比较
//NaN 是与 NaN 相等的（虽然 NaN !== NaN），剩下所有其它的值是根据 === 运算符的结果判断是否相等。

let map = new Map
map.set('name','ly')
map.set({a:1},()=>{console.log("a");})
console.log(map.get('name'));
console.log(map.has('name')); 
map.forEach((value,key)=>{
    console.log("value",value,"key",key);
    if(typeof value === 'function'){
        value()
    }
})
console.log(map.size); 
for(let key of map.keys()){
    console.log("key",key);
}

for(let value of map.values()){
    console.log("value",value);
}


//简易实现

class YangMap{
    constructor(){
        //先不考虑传进来参数的情况
        this.key = []
        this.value = []
    }

    clear(){
        this.key = []
        this.value = []
    }

    set(key,value){
        this.key.push(key)
        this.value.push(value)
    }

    has(key){
        for (const item of this.key) {
            if(item === key){
                return true
            }else{
                return false
            }
        }
    }

    get(key){
        let index = this.key.indexOf(key)
        return this.value[index]
    }

    delete(key){
        let index = this.key.indexOf(key)
        this.key.splice(index,1)
        this.value.splice(index,1)
    }
}

let yangonMap = new YangMap

yangonMap.set('age','19')
yangonMap.set('name','liyang')
console.log(yangonMap.get('name'));
console.log(yangonMap.has('age'));
yangonMap.delete('name')
console.log(yangonMap);
yangonMap.clear()
console.log(yangonMap);