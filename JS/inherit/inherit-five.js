// //寄生组合式继承

// function object(obj) {
//     function fn() { }
//     fn.prototype = obj
//     return new fn
// }

// function extend(son, father) {
//     let instance = object(father.prototype)
//     instance.constrctor = son
//     son.prototype = instance
// }

// function Son() {
//     this.name = 'la'
// }


// function Father() {
//     Son.call(this)
//     this.age = 'aaa'
// }

// Father.prototype.sayName = () => {
//     console.log("hello world");
// }
// extend(Son, Father)

// var son = new Son
// son.sayName()
// console.log(son.__proto__ === Son.prototype);


// instanceof用来判断对象是否是构造器构造的
function fn(){
    this.name = 'al'
}
function _fn(){
    this.name = 'aa'
}

let b = new _fn
let a = new fn
console.log(a instanceof fn);
console.log(b instanceof fn);
