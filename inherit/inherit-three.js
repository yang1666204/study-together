//原型式继承
//思想：向函数中传入一个对象，在这个函数中创建一个临时性的构造函数；这个构造函数的原型指向这个对象；
//最后返回这个构造函数的实例

//存在数据共享问题
let o = {
    name:'ly',
    color:['red']
}

function _Object(o){
    function cons(){}
    cons.prototype = o
    return new cons
}

var person = _Object(o)
person.color.push('black')
var _person = _Object(o)

console.log(person.name);
console.log("person.color",person.color);
console.log("_person.color",_person.color);


//create不传如第二个参数和上面没有区别
//传入第二个参数后 第二个参数会覆盖原型对象上的同名属性
var person = {
    color:['red','yellow']
}

// var person1 = Object.create(person)
var person2 = Object.create(person,{
    color:{
        value:['blakc']
    }
})

var person1 = Object.create(person,{
    color:{
        value:['aaa']
    }
})
// person1.color.push('yellow')
console.log(person2.color);
person2.color.push('bvfv')
console.log(person2.color);
console.log(person1.color);