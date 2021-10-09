//组合继承
function Father(){
    this.color = ['red']
}
Father.prototype.sayColor = function (){
    console.log("color",this.color);
}

function Son(name,age){
    this.age = age;
    this.name = name
    Father.call(this)
}


Son.prototype = new Father
Son.prototype.sayName = function(){
    console.log("age",this.age);
}
var one = new Son('ly',20)
one.sayName()
one.color.push('yellow')
one.sayColor()

var two = new Son('hjy',21)
two.sayName()
two.sayColor()
//组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，成为JavaScript中最常用的继承模式
//唯一缺点：调用了两次Father