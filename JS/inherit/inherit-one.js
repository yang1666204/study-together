/*原型链的问题
    1. 当原型链上有属性值是引用类型时，该值会被每个实例分享
    2. 在创建子类型实例时，不能像父类型传参
*/
// function Father(){
//     this.color = ['blue','white']
// }

// function Son(){
//     this.name = 'ly'
// }

// Son.prototype = new Father
// var a = new Son
// console.log(a.color);
// a.color.push('black')
// var b = new Son
// console.log(b.color);
//为了解决上述问题,于是出现了第一种继承方式    借用构造函数(也叫经典继承)
function Father(name){
    this.color = ['yellow','red']
    this.name = name
}

Father.prototype.sayColor = function(){
    console.log("color",this.color);
}

function Son(){
    Father.call(this,"ll")
}

let a = new Son
a.color.push('white')

//    a.sayColor()  报错 
let b = new Son
console.log(b.color);
/*随之而来的问题
    方法都在构造函数中定义，函数复用无从谈起        应该在原型中定义方法

*/